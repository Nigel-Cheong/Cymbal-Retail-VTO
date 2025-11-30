import { type Product, type Category } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Helper to find an image by ID
const findImage = (id: string) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  if (!image) {
    // Fallback for safety, though we expect all images to be found.
    return { id: 'not-found', description: 'Image not found', imageUrl: 'https://picsum.photos/seed/error/600/800', imageHint: 'error' };
  }
  return image;
};

export const categories: Category[] = [
  { id: 'cat_1', name: 'T-Shirts' },
  { id: 'cat_2', name: 'Hoodies' },
  { id: 'cat_3', name: 'Jeans' },
  { id: 'cat_4', name: 'Jackets' },
  { id: 'cat_5', name: 'Accessories' },
];

export const products: Product[] = [
  {
    id: 'prod_9',
    name: 'Google Workspace Zip Hoodie',
    category: 'Hoodies',
    price: 99.99,
    desc: 'Stay cozy and productive with this exclusive Google Workspace zip hoodie. Made by Marine Layer.',
    image: findImage('hoodie-google-workspace'),
  },
  {
    id: 'prod_1',
    name: 'Organic Cotton Tee',
    category: 'T-Shirts',
    price: 34.99,
    desc: 'A classic crewneck tee made from 100% organic cotton for a soft, breathable feel.',
    image: findImage('t-shirt-white'),
  },
  {
    id: 'prod_2',
    name: 'Vintage Wash Hoodie',
    category: 'Hoodies',
    price: 89.99,
    desc: 'This hoodie features a relaxed fit, a cozy fleece interior, and a unique vintage wash.',
    image: findImage('hoodie-black'),
  },
  {
    id: 'prod_3',
    name: 'Slim Fit Denim',
    category: 'Jeans',
    price: 119.99,
    desc: 'Our signature slim-fit jeans, crafted from premium stretch denim for all-day comfort.',
    image: findImage('jeans-blue'),
  },
  {
    id: 'prod_4',
    name: 'Classic Denim Jacket',
    category: 'Jackets',
    price: 149.99,
    desc: 'An iconic denim jacket with a timeless design, perfect for layering in any season.',
    image: findImage('jacket-denim'),
  },
    {
    id: 'prod_5',
    name: 'Essential Graphic Tee',
    category: 'T-Shirts',
    price: 39.99,
    desc: 'Express yourself with this stylish graphic tee, made from soft, high-quality cotton.',
    image: findImage('t-shirt-graphic'),
  },
  {
    id: 'prod_6',
    name: 'Midnight Leather Jacket',
    category: 'Jackets',
    price: 399.99,
    desc: 'A statement piece, this moto-inspired leather jacket is crafted from supple, genuine leather.',
    image: findImage('jacket-leather'),
  },
  {
    id: 'prod_7',
    name: 'Urban Explorer Cap',
    category: 'Accessories',
    price: 29.99,
    desc: 'Top off your look with this classic six-panel cap, featuring an adjustable strap for a custom fit.',
    image: findImage('cap-black'),
  },
  {
    id: 'prod_8',
    name: 'Cloud Walker Sneakers',
    category: 'Accessories',
    price: 129.99,
    desc: 'Minimalist sneakers with a cushioned sole, designed for ultimate comfort and versatile style.',
    image: findImage('sneakers-white'),
  },
];
