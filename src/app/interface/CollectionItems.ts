export interface CollectionItems {
  length: number;
  id: string;
  slug: string;
  title: string;
  items: {
    id: string;
    images: string[];
    item_type: string;
    main_subcategory: string;
    min_price_valid: string;
    name: string;
  }[];
}

