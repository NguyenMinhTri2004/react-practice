export interface Product {
  id: number;
  name: string;
  category: string;
  gender: 'men' | 'women';
  price: number;
  quantity: number;
  image: string;
  description: string;
}

export interface Category {
  id: number;
  name: string;
  gender: string;
}
