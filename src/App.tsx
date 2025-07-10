import { Authenticated, Unauthenticated, useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import { Id } from "../convex/_generated/dataModel";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm h-16 flex justify-between items-center border-b shadow-sm px-4">
        <h2 className="text-xl font-semibold text-primary">Collaborative Todo</h2>
        <Authenticated>
          <SignOutButton />
        </Authenticated>
      </header>
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-2xl mx-auto">
          <Content />
        </div>
      </main>
      <Toaster />
    </div>
  );
}

function Content() {
  const loggedInUser = useQuery(api.auth.loggedInUser);

  if (loggedInUser === undefined) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">My Todo List</h1>
        <Authenticated>
          <p className="text-lg text-secondary">
            Welcome back, {loggedInUser?.email ?? "friend"}!
          </p>
        </Authenticated>
        <Unauthenticated>
          <p className="text-xl text-secondary">Sign in to manage your todos</p>
        </Unauthenticated>
      </div>

      <Authenticated>
        <TodoApp />
      </Authenticated>

      <Unauthenticated>
        <SignInForm />
      </Unauthenticated>
    </div>
  );
}

function TodoApp() {
  const todos = useQuery(api.todos.list) || [];
  const createTodo = useMutation(api.todos.create);
  const toggleTodo = useMutation(api.todos.toggle);
  const removeTodo = useMutation(api.todos.remove);
  const updateTodo = useMutation(api.todos.update);
  
  const [newTodoText, setNewTodoText] = useState("");
  const [editingId, setEditingId] = useState<Id<"todos"> | null>(null);
  const [editText, setEditText] = useState("");

  const handleCreateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    
    try {
      await createTodo({ text: newTodoText.trim() });
      setNewTodoText("");
      toast.success("Todo created!");
    } catch (error) {
      toast.error("Failed to create todo");
    }
  };

  const handleToggleTodo = async (id: Id<"todos">) => {
    try {
      await toggleTodo({ id });
    } catch (error) {
      toast.error("Failed to update todo");
    }
  };

  const handleRemoveTodo = async (id: Id<"todos">) => {
    try {
      await removeTodo({ id });
      toast.success("Todo deleted!");
    } catch (error) {
      toast.error("Failed to delete todo");
    }
  };

  const handleStartEdit = (id: Id<"todos">, currentText: string) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const handleSaveEdit = async () => {
    if (!editingId || !editText.trim()) return;
    
    try {
      await updateTodo({ id: editingId, text: editText.trim() });
      setEditingId(null);
      setEditText("");
      toast.success("Todo updated!");
    } catch (error) {
      toast.error("Failed to update todo");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const completedCount = todos.filter(todo => todo.isCompleted).length;
  const totalCount = todos.length;

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Your Todos</h2>
          <div className="text-sm text-gray-500">
            {completedCount} of {totalCount} completed
          </div>
        </div>
        
        <form onSubmit={handleCreateTodo} className="flex gap-2">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!newTodoText.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Add
          </button>
        </form>
      </div>

      <div className="space-y-2">
        {todos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No todos yet. Add one above to get started!
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo._id}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                todo.isCompleted ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleToggleTodo(todo._id)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              
              {editingId === todo._id ? (
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveEdit}
                    className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <span
                    className={`flex-1 ${
                      todo.isCompleted ? 'line-through text-gray-500' : 'text-gray-900'
                    }`}
                  >
                    {todo.text}
                  </span>
                  
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleStartEdit(todo._id, todo.text)}
                      className="px-2 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemoveTodo(todo._id)}
                      className="px-2 py-1 text-red-600 hover:bg-red-50 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
