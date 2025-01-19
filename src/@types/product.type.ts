export interface ProductType {
  id: string;
  name: string;
  price: number;
  discount?: number | null;
  image: string;
  rating: number;
  category: string;
  description?: string;
  purchaseQuantity?: number;
}

export interface ImageType {
  id?: string;
  url: string;
  created_at?: Date;
}

export interface Product {
  _id?: string;
  name: string;
  slug?: string;
  description: string;
  origin: string;
  category_id: string;
  thumbnail_url: string;
  sold?: number;
  supplier_id?: string;
  images?: ImageType[];
  rating?: number;
  numberOfReview?: number;
  is_active?: boolean;
  _destroy?: boolean;
  hot?: boolean;
  creator_id: string;
  updater_id?: string;
  created_at?: Date;
  updated_at?: Date;
  attributes: ProductAttribute[]
  tags: ProductTag[]
}

interface ProductAttribute {
  _id?: string;
  product_id: string;
  weight: number;
  original_price: number;
  discounted_percent?: number;
  discount_price?: number;
  total_price?: number;
  dimensions?: string;
  tax_rate?: number;
  organic?: boolean;
  unit_of_measurement?: string;
  quantity_per_unit?: number;
  certification?: string;
  link?: string;
  harvest_date?: Date;
  expiration_date?: Date;
  created_at?: Date;
  updated_at?: Date;
}

interface ProductTag {
  _id?: string;
  user_id: string;
  product_id: string;
  hashtag_id: string;
  added_at?: Date;
}
