import React, { useEffect, useState, useMemo } from 'react';
import { Box } from '@mui/material';
import FilterSidebar from './FilterSidebar';
import ProductListComponent from '@/common/components/Product/ProductList';
import Section from '@/common/components/Section';
import SectionBody from '@/common/components/Section/SectionBody';
import Header from './Header';
import { mockProducts } from '@/assets/fakeData';

const ProductList: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [priceRange, setPriceRange] = useState<number[]>([10, 999999]);

  const path = window.location.pathname;

  useEffect(() => {
    const categoryFromPath = path.split('/')[2];
    setCategory(categoryFromPath);
  }, [path]);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(
      (p) =>
        (!selectedType || p.category === selectedType) &&
        (!category || p.gender === category) &&
        p.price >= priceRange[0] &&
        p.price <= priceRange[1],
    );
  }, [selectedType, priceRange, category]);

  return (
    <Section>
      <SectionBody>
        <Box display="flex" bgcolor="#f9fafb" minHeight="100vh">
          <FilterSidebar
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />
          <Box width="75%" p={3}>
            <Header category={category} />
            <ProductListComponent products={filteredProducts} />
          </Box>
        </Box>
      </SectionBody>
    </Section>
  );
};

export default ProductList;
