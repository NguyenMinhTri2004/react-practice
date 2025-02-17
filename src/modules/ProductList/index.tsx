import { Box } from '@mui/material';
import FilterSidebar from './FilterSidebar';
import ProductListComponent from '@/common/components/Product/ProductList';
import Section from '@/common/components/Section';
import SectionBody from '@/common/components/Section/SectionBody';
import Header from './Header';
const ProductList = () => {
  return (
    <Section>
      <SectionBody>
        <Box display="flex" bgcolor="#f9fafb" minHeight="100vh">
          <FilterSidebar />
          <Box width="75%" p={3}>
            <Header />
            <ProductListComponent />
          </Box>
        </Box>
      </SectionBody>
    </Section>
  );
};

export default ProductList;
