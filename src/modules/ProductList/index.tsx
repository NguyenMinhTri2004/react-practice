import { Box } from '@mui/material';
import FilterSidebar from './FilterSidebar';
import ProductListComponent from '@/common/components/Product/ProductList';
import Section from '@/common/components/Section';
import SectionBody from '@/common/components/Section/SectionBody';
import Header from './Header';
import { useEffect, useState } from 'react';
import { mockProducts } from '@/assets/fakeData';

const ProductList = () => {
  const [category, setCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [priceRange, setPriceRange] = useState([10, 600]);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const path = window.location.pathname;

  useEffect(() => {
    const categoryFromPath = path.split('/')[2];
    setCategory(categoryFromPath);
    console.log(categoryFromPath);
  }, [path]);

  useEffect(() => {
    const filtered = mockProducts.filter(
      (p) =>
        (!selectedType || p.category === selectedType) && // Lọc theo loại
        (!category || p.gender === category) && // Lọc theo danh mục
        p.price >= priceRange[0] &&
        p.price <= priceRange[1], // Lọc theo khoảng giá
    );
    setFilteredProducts(filtered);
  }, [selectedType, priceRange, category]); // Cập nhật khi bất kỳ giá trị nào thay đổi

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
