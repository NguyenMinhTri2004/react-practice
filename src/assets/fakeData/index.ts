import { Product } from '@/common/types';
import manClothing from '../images/manClothing.png';
import womanClothing from '../images/womanClothing.png';

type orderItem = {
  id: string;
  name: string;
  quantity: number;
  color: string;
  price: number;
  imageUrl: string;
};

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: 19.99,
    quantity: 100,
    image: manClothing,
    category: 'T-Shirts',
    gender: 'men',
    description: 'A classic cotton t-shirt, perfect for everyday wear.',
  },
  {
    id: 6,
    name: 'Blazer',
    price: 79.99,
    quantity: 50,
    image: womanClothing,
    category: 'Jackets',
    gender: 'women',
    description: 'A fashionable blazer, perfect for formal occasions.',
  },
  {
    id: 7,
    name: 'Hoodie',
    price: 39.99,
    quantity: 80,
    image: manClothing,
    category: 'Sweaters',
    gender: 'men',
    description: 'A comfortable hoodie for casual wear.',
  },
  {
    id: 8,
    name: 'High Heels',
    price: 59.99,
    quantity: 40,
    image: womanClothing,
    category: 'Shoes',
    gender: 'women',
    description: 'Elegant high heels, perfect for special events.',
  },
  {
    id: 9,
    name: 'Jeans',
    price: 44.99,
    quantity: 60,
    image: manClothing,
    category: 'Pants',
    gender: 'men',
    description: 'Classic denim jeans, durable and stylish.',
  },
  {
    id: 10,
    name: 'Leggings',
    price: 29.99,
    quantity: 90,
    image: womanClothing,
    category: 'Pants',
    gender: 'women',
    description: 'Stretchy and comfortable leggings for workouts or casual wear.',
  },
  {
    id: 11,
    name: 'Sneakers',
    price: 74.99,
    quantity: 70,
    image: manClothing,
    category: 'Shoes',
    gender: 'men',
    description: 'Stylish sneakers for everyday use.',
  },
  {
    id: 12,
    name: 'Summer Dress',
    price: 49.99,
    quantity: 50,
    image: womanClothing,
    category: 'Dresses',
    gender: 'women',
    description: 'Light and comfortable summer dress.',
  },
  {
    id: 13,
    name: 'Formal Shirt',
    price: 34.99,
    quantity: 85,
    image: manClothing,
    category: 'Shirts',
    gender: 'men',
    description: 'A perfect shirt for formal occasions.',
  },
  {
    id: 14,
    name: 'Crop Top',
    price: 24.99,
    quantity: 100,
    image: womanClothing,
    category: 'Tops',
    gender: 'women',
    description: 'Trendy crop top for casual outings.',
  },
  {
    id: 15,
    name: 'Sweater',
    price: 54.99,
    quantity: 60,
    image: manClothing,
    category: 'Sweaters',
    gender: 'men',
    description: 'Warm and comfortable sweater.',
  },
  {
    id: 16,
    name: 'Cardigan',
    price: 64.99,
    quantity: 55,
    image: womanClothing,
    category: 'Sweaters',
    gender: 'women',
    description: 'Cozy cardigan for chilly days.',
  },
];

export const footerLinks = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Blog'],
  },
  {
    title: 'Support',
    links: ['Contact Us', 'FAQs', 'Shipping & Returns', 'Order Status'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service'],
  },
  {
    title: 'Other',
    links: ['Contact Us', 'FAQs', 'Shipping & Returns', 'Order Status'],
  },
];

export const orderItems: orderItem[] = [
  {
    id: '1',
    name: 'Blue Flower Print Crop Top',
    quantity: 1,
    color: 'Yellow',
    price: 29.0,
    imageUrl:
      'https://storage.googleapis.com/a1aa/image/Az02pz1b0ReQSArOJ6fpoGiHwsL94y6dWywTEOnfJmk.jpg',
  },
  {
    id: '2',
    name: 'Lavender Hoodie',
    quantity: 2,
    color: 'Lavender',
    price: 119.0,
    imageUrl:
      'https://storage.googleapis.com/a1aa/image/X5Z6VqwimzPAUDTedUL8nl10Pl1bolNhhmz6aVVQujk.jpg',
  },
  {
    id: '3',
    name: 'Black Sweatshirt',
    quantity: 2,
    color: 'Black',
    price: 123.0,
    imageUrl:
      'https://storage.googleapis.com/a1aa/image/YGpIzMJt5kiZyv5e_xF2Q-BN_9ZSCmPWpSTHA1JZ-2c.jpg',
  },
];

export const categories = [
  'T-Shirts',
  'Jackets',
  'Sweaters',
  'Shoes',
  'Pants',
  'Dresses',
  'Shirts',
];
