import { type ImagePlaceholder } from '@/lib/placeholder-images';

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  desc: string;
  image: ImagePlaceholder;
};

export type Category = {
  id: string;
  name: string;
};
