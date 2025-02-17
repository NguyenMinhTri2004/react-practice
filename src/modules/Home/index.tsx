import HeroSection from './HeroSection';
import Section from '../../common/components/Section';
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';
import ProductCategoryList from '@/common/components/ProductCategory/ProductCategoryList';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Section>
        <SectionTitle>Categories For Men</SectionTitle>
        <SectionBody>
          <ProductCategoryList />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Categories For Woman</SectionTitle>
        <SectionBody>
          <ProductCategoryList />
        </SectionBody>
      </Section>
    </>
  );
};
export default Home;
