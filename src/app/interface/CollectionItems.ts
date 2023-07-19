export interface CollectionItems {
  length: number;
  id: string;
  slug: string;
  title: string;
  ExibirTodosProdutos: boolean;
  items: {
    id: string;
    images: string[];
    item_type: string;
    main_subcategory: string;
    min_price_valid: string;
    name: string;
    prices: {
      id: string;
      internal_code: string;
      title: string;
      qntid_stock: string;
      strock_control_enabled: string;
      price: string;
      promo_price: string;
      promo_end_at: string;
      bar_codes: string;
    }[];
  }[];
}
