import React, { createContext, useContext, useState, ReactNode, useMemo, useCallback } from 'react';

export type Category = 'men' | 'women';

type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  category: Category;
};

type ProductContextType = {
  products: Product[];
  updateProduct: (id: string, field: keyof Product, value: number) => void;
  totalAmount: number;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'Product A', quantity: 2, price: 10, category: 'men' },
    { id: '2', name: 'Product B', quantity: 1, price: 15, category: 'women' },
    { id: '3', name: 'Product C', quantity: 2, price: 10, category: 'men' },
    { id: '4', name: 'Product D', quantity: 1, price: 15, category: 'women' },
    { id: '5', name: 'Product E', quantity: 2, price: 10, category: 'men' },
    { id: '6', name: 'Product F', quantity: 1, price: 15, category: 'women' },
    { id: '7', name: 'Product G', quantity: 2, price: 10, category: 'men' },
    { id: '8', name: 'Product H', quantity: 1, price: 15, category: 'women' },
  ]);

  const updateProduct = useCallback((id: string, field: keyof Product, value: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === id ? { ...product, [field]: value } : product)),
    );
  }, []);

  const totalAmount = useMemo(() => {
    return products.reduce((sum, p) => sum + p.quantity * p.price, 0);
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, updateProduct, totalAmount }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
