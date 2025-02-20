import { Container, Typography } from '@mui/material';
import { ProductProvider, useProductContext } from '@/context/QuoteFormContext';
import QuoteFormTable from './QuoteFormTable';
import QuoteFormTotal from './QuoteFormTotal';
import PDFDownloadButton from './QuoteFormPDF';

const QuoteFormContent = () => {
  const { products, totalAmount } = useProductContext();
  return (
    <ProductProvider>
      <Container maxWidth="xl">
        <Typography variant="h4" textAlign="center" mt={3} mb={2}>
          Bảng Báo Giá
        </Typography>
        <Typography variant="h5" mt={2}>
          Men
        </Typography>
        <QuoteFormTable category="men" />

        <Typography variant="h5" mt={2}>
          Women
        </Typography>
        <QuoteFormTable category="women" />

        <QuoteFormTotal />
        <PDFDownloadButton
          products={products}
          totalAmount={totalAmount}
          // totalAmountVND={totalAmountVND}
        />
      </Container>
    </ProductProvider>
  );
};

const QuoteForm = () => (
  <ProductProvider>
    <QuoteFormContent />
  </ProductProvider>
);

export default QuoteForm;
