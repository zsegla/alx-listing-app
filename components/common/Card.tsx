import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  imageUrl,
  price,
  rating,
  location,
  onClick,
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden ${className}`}
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {rating && (
          <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-full">
            <span className="text-sm font-medium text-gray-900">
              ⭐ {rating}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          {location && (
            <p className="text-sm text-gray-500 mb-1">{location}</p>
          )}
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {title}
          </h3>
        </div>
        
        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}
        
        {price && (
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">
              ${price}
            </span>
            <span className="text-sm text-gray-500">per night</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
