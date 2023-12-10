export type Product = {
  id: number;
  brand: string;
  title: string;
  price: string;
  images: ProductImage[];
  quantity: number;
};

type ProductImage = {
  id: number;
  attachment_type: 'other';
  class_name: string;
  created_at: string;
  extra_small: string;
  large: string;
  original: string;
  small: string;
  thumbnail: string;
  sort_order: null;
};
