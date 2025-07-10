import { CardProps } from '../interfaces';

// App Configuration
export const APP_NAME = 'ALX Listing App';
export const APP_DESCRIPTION = 'Find and book amazing places to stay';
export const APP_VERSION = '1.0.0';

// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
export const API_TIMEOUT = 10000; // 10 seconds

// Pagination
export const ITEMS_PER_PAGE = 12;
export const MAX_ITEMS_PER_PAGE = 50;

// Price Ranges
export const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: '$200 - $500', min: 200, max: 500 },
  { label: 'Over $500', min: 500, max: Infinity },
];

// Property Types
export const PROPERTY_TYPES = [
  'Apartment',
  'House',
  'Villa',
  'Condo',
  'Townhouse',
  'Loft',
  'Studio',
  'Cabin',
  'Cottage',
  'Mansion',
];

// Amenities
export const AMENITIES = [
  'WiFi',
  'Kitchen',
  'Parking',
  'Pool',
  'Gym',
  'Air Conditioning',
  'Heating',
  'Washer',
  'Dryer',
  'TV',
  'Hot Tub',
  'Fireplace',
  'Balcony',
  'Garden',
  'Pet Friendly',
];

// Sample Data for Development
export const SAMPLE_CARDS: CardProps[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    description: 'Beautiful 2-bedroom apartment in the heart of the city with stunning skyline views.',
    imageUrl: '/assets/apartment-1.jpg',
    price: 120,
    rating: 4.8,
    location: 'New York, NY',
  },
  {
    id: '2',
    title: 'Cozy Beach House',
    description: 'Charming beachfront property perfect for a relaxing getaway with ocean views.',
    imageUrl: '/assets/beach-house-1.jpg',
    price: 200,
    rating: 4.9,
    location: 'Malibu, CA',
  },
  {
    id: '3',
    title: 'Mountain Cabin Retreat',
    description: 'Rustic cabin nestled in the mountains, ideal for nature lovers and hiking enthusiasts.',
    imageUrl: '/assets/cabin-1.jpg',
    price: 85,
    rating: 4.7,
    location: 'Aspen, CO',
  },
  {
    id: '4',
    title: 'Luxury City Penthouse',
    description: 'Elegant penthouse with premium amenities and panoramic city views.',
    imageUrl: '/assets/penthouse-1.jpg',
    price: 350,
    rating: 4.9,
    location: 'San Francisco, CA',
  },
  {
    id: '5',
    title: 'Historic Brownstone',
    description: 'Beautifully restored brownstone in a quiet neighborhood with classic charm.',
    imageUrl: '/assets/brownstone-1.jpg',
    price: 180,
    rating: 4.6,
    location: 'Boston, MA',
  },
  {
    id: '6',
    title: 'Desert Villa Oasis',
    description: 'Stunning desert villa with private pool and breathtaking sunset views.',
    imageUrl: '/assets/villa-1.jpg',
    price: 275,
    rating: 4.8,
    location: 'Scottsdale, AZ',
  },
];

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Listings', href: '/listings' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Footer Links
export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Blog', href: '/blog' },
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Safety', href: '/safety' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  hosting: [
    { label: 'Become a Host', href: '/host' },
    { label: 'Host Resources', href: '/host-resources' },
    { label: 'Community', href: '/community' },
    { label: 'Host Guarantee', href: '/host-guarantee' },
  ],
};

// Social Media Links
export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
];

// Form Validation
export const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-\(\)]+$/,
  password: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: false,
  },
};

// Date Formats
export const DATE_FORMATS = {
  display: 'MMM dd, yyyy',
  input: 'yyyy-MM-dd',
  api: 'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx',
};

// Error Messages
export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  validation: 'Please check your input and try again.',
  unauthorized: 'You are not authorized to perform this action.',
  notFound: 'The requested resource was not found.',
  serverError: 'Server error. Please try again later.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  bookingCreated: 'Booking created successfully!',
  profileUpdated: 'Profile updated successfully!',
  listingCreated: 'Listing created successfully!',
  messagesSent: 'Message sent successfully!',
};
