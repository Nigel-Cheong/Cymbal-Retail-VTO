import { type ImagePlaceholder } from '@/lib/placeholder-images';

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  desc: string;
  image: ImagePlaceholder;
  isNew?: boolean;
  isPopular?: boolean;
};

export type Category = {
  id: string;
  name: string;
};
