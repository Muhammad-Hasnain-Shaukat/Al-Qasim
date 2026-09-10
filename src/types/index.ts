export type CategorySlug = 'all' | 'shalwar-kameez' | 'kurtas' | 'waistcoats' | 'unstitched';

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'shalwar-kameez' | 'kurtas' | 'waistcoats' | 'unstitched';
  price: number;
  compareAtPrice?: number;
  shortDescription: string;
  description: string;
  fabric: string;
  includes?: string;
  fit: string;
  colors: ProductColor[];
  sizes: string[];
  isUnstitched?: boolean;
  images: string[];
  tags: ('everyday-wear' | 'occasion-wear' | 'new-in' | 'featured' | 'unstitched')[];
  details: string[];
  careInstructions: string[];
  inStock: boolean;
}

export interface CartItem {
  id: string; // unique composite key: `${product.id}-${color}-${size}`
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export interface FilterState {
  category: CategorySlug;
  sizes: string[];
  colors: string[];
  fabrics: string[];
  priceRange: [number, number];
  sortBy: 'featured' | 'newest' | 'price-asc' | 'price-desc';
  tags: string[];
}
