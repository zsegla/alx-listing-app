import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { CardProps } from '../interfaces';
import { APP_NAME, SAMPLE_CARDS } from '../constants';

const HomePage: React.FC = () => {
  const handleCardClick = (id: string) => {
    console.log(`Card ${id} clicked`);
  };

  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {APP_NAME}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover amazing places to stay around the world
          </p>
          <Button
            variant="primary"
            size="large"
            onClick={handleButtonClick}
          >
            Get Started
          </Button>
        </header>

        <main>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Featured Listings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SAMPLE_CARDS.map((card) => (
                <Card
                  key={card.id}
                  {...card}
                  onClick={() => handleCardClick(card.id)}
                />
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to explore?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="medium">
                Browse All Listings
              </Button>
              <Button variant="secondary" size="medium">
                Become a Host
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
