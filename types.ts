
export type Category = 'Birthday' | 'Chocolate' | 'Wedding' | 'Cupcakes' | 'All';

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string;
  featured?: boolean;
}
