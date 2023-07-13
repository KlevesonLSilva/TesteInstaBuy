export interface Promocao {
  id: string;
  images: string[];
  name: string;
  description: string;
  prices: {
    id: string;
    internal_code: string;
    title: string;
    qtd_stock: number;
    price:string;
    promo_price:string;
  }[];
}

