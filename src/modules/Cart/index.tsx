import { Grid } from '@mui/material';
import CartItemList from './CartItemList';
import DiscountCodes from './DiscountCodes';
import Summary from './Summary';
import Section from '@/common/components/Section';
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';
import { useAppSelector } from '@/store/hooks';

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  return (
    <Section>
      <SectionTitle>Cart</SectionTitle>
      <SectionBody>
        <CartItemList products={cartItems} />
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} md={6}>
            <DiscountCodes />
          </Grid>
          <Grid item xs={12} md={6}>
            <Summary subtotal={513.0} shipping={5.0} grandTotal={518.0} />
          </Grid>
        </Grid>
      </SectionBody>
    </Section>
  );
};

export default Cart;
