export interface Product {
  id: string;
  created_at: string;
  item_type: string;
  subcategory_ids: Subcategory[];
  main_subcategory: MainSubcategory;
  store_id: string;
  visible: boolean;
  description: string;
  images: string[];
  name: string;
  custom_infos: any[]; 
  prices: Price[];
  available_stock: boolean;
  min_price_valid: number;
  variation_items: any[]; 
  related_items: any[]; 
  slug: string;
  unit_type: string;
  increment_value: number;
  shipping: {
    deliverable: boolean;
  };
  copy_of: string;
}

export interface Subcategory {
  id: string;
  created_at: string;
  store_id: string;
  title: string;
  _title: string;
  category_id: Category;
}

export interface Category {
  id: string;
  created_at: string;
  title: string;
  show_order: number;
  slug: string;
  spotlight_image: string;
}

export interface MainSubcategory {
  id: string;
  created_at: string;
  store_id: string;
  title: string;
  _title: string;
  category_id: Category;
}

export interface Price {
  id: string;
  internal_code: string;
  title: string;
  qtd_stock: number;
  stock_control_enabled: boolean;
  price: number;
  promo_price: number;
  promo_end_at: string;
  bar_codes: string[];
}
