import { Grid } from '@mui/material';
import OrderSummary from './OrderSummary';
import BillingDetailsForm from './BillingDetailsForm';
import Section from '@/common/components/Section';
import SectionBody from '@/common/components/Section/SectionBody';
import SectionTitle from '@/common/components/Section/SectionTitle';

const Checkout: React.FC = () => {
  return (
    <Section>
      <SectionTitle>Checkout</SectionTitle>
      <SectionBody>
        <Grid container spacing={6}>
          <Grid item lg={8} xs={12}>
            <BillingDetailsForm />
          </Grid>
          <Grid item lg={4} xs={12}>
            <OrderSummary />
          </Grid>
        </Grid>
      </SectionBody>
    </Section>
  );
};
export default Checkout;
