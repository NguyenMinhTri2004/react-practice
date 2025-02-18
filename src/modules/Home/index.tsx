import HeroSection from './HeroSection';
import Section from '../../common/components/Section';
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';
import ProductCategoryList from '@/common/components/ProductCategory/ProductCategoryList';
import { Product } from '@/common/types';

const Home = ({ products }: { products: Product[] }) => {
  return (
    <>
      <HeroSection />
      <Section>
        <SectionTitle>Categories For Men</SectionTitle>
        <SectionBody>
          <ProductCategoryList products={products.filter((p) => p.gender === 'men')} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Categories For Woman</SectionTitle>
        <SectionBody>
          <ProductCategoryList products={products.filter((p) => p.gender === 'women')} />
        </SectionBody>
      </Section>
    </>
  );
};
export default Home;
