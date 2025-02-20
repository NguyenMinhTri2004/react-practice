import React from 'react';
import HeroSection from './HeroSection';
import Section from '../../common/components/Section';
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';
import ProductCategoryList from '@/common/components/ProductCategory/ProductCategoryList';
import { Product } from '@/common/types';

const Home: React.FC<{ products: Product[] }> = ({ products }) => {
  const filterProductsByGender = (gender: string) => {
    return products.filter((product) => product.gender === gender);
  };

  return (
    <>
      <HeroSection />
      <Section aria-label="Categories For Men">
        <SectionTitle>Categories For Men</SectionTitle>
        <SectionBody>
          <ProductCategoryList products={filterProductsByGender('men')} />
        </SectionBody>
      </Section>
      <Section aria-label="Categories For Women">
        <SectionTitle>Categories For Women</SectionTitle>
        <SectionBody>
          <ProductCategoryList products={filterProductsByGender('women')} />
        </SectionBody>
      </Section>
    </>
  );
};

export default Home;
