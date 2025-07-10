import { ReactNode } from 'react';

// Card Component Props
export interface CardProps {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  price?: number;
  rating?: number;
  location?: string;
  onClick?: () => void;
  className?: string;
}

// Button Component Props
export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

// Listing Data Interface
export interface Listing {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
  location: string;
  host: {
    name: string;
    avatar: string;
  };
  amenities: string[];
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  createdAt: string;
  updatedAt: string;
}

// User Interface
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isHost: boolean;
  createdAt: string;
}

// Booking Interface
export interface Booking {
  id: string;
  listingId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

// API Response Interface
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Pagination Interface
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Filter Interface
export interface FilterOptions {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  guests?: number;
  amenities?: string[];
  rating?: number;
}
