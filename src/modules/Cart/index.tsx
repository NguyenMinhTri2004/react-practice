import { Container, Grid } from '@mui/material';
import CartItemList from './CartItemList';
import DiscountCodes from './DiscountCodes';
import Summary from './Summary';
import Section from '@/common/components/Section';
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';
import { useAppSelector } from '@/store/hooks';
  
const Cart = () => {

  const cartItems = useAppSelector((state) => state.cart.items);

  const products = [
    {
      image:
        'https://storage.googleapis.com/a1aa/image/Vj7IxCuof0fsYySqN4Iuzne3SXOqOKtRbLbGPiZqw70.jpg',
      title: 'Blue Flower Print Crop Top',
      color: 'Yellow',
      size: 'M',
      price: 29.0,
      quantity: 1,
      shipping: 'FREE',
      subtotal: 29.0,
    },
    {
      image:
        'https://storage.googleapis.com/a1aa/image/dk6cSpmiUTroOWnNmk2C5fL8nQc1uPkKTntXfQXryKg.jpg',
      title: 'Lavender Hoodie',
      color: 'Lavender',
      size: 'XXL',
      price: 119.0,
      quantity: 2,
      shipping: 'FREE',
      subtotal: 119.0,
    },
    {
      image:
        'https://storage.googleapis.com/a1aa/image/dh3pLS1Qlex3xts9jz57ztnrsWs6zRwXMPf5jmyExcw.jpg',
      title: 'Black Sweatshirt',
      color: 'Black',
      size: 'XXL',
      price: 123.0,
      quantity: 2,
      shipping: '$5.00',
      subtotal: 123.0,
    },
  ];

  return (
    // <Container maxWidth="lg" sx={{ py: 4 }}>

    // </Container>
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
