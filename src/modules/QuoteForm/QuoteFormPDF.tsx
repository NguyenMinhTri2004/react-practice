import React, { useMemo } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';
import { Button, CircularProgress } from '@mui/material';
import RobotoFont from '../../assets/fonts/roboto.ttf';
import { useCurrency } from '@/context/CurrencyContext';

type Category = 'men' | 'women';

type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  category: Category;
};

type QuoteFormPDFProps = {
  products: Product[];
  totalAmount: number;
  currency: 'USD' | 'VND';
};

Font.register({
  family: 'Roboto',
  src: RobotoFont,
});

const styles = StyleSheet.create({
  page: { padding: 20, fontFamily: 'Roboto' },
  section: { marginBottom: 20 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  table: { width: '100%', borderCollapse: 'collapse' },
  row: { flexDirection: 'row', borderBottom: '1px solid #ddd', padding: 5 },
  cell: { width: '20%', textAlign: 'center', fontSize: 10 },
  total: { marginTop: 15, fontSize: 14, textAlign: 'right', fontWeight: 'bold' },
});

export const QuoteFormPDF: React.FC<QuoteFormPDFProps> = ({ products, totalAmount, currency }) => {
  const menProducts = products.filter((p) => p.category === 'men');
  const womenProducts = products.filter((p) => p.category === 'women');

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Men</Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.cell}>Mã SP</Text>
              <Text style={styles.cell}>Tên</Text>
              <Text style={styles.cell}>SL</Text>
              <Text style={styles.cell}>Giá ({currency})</Text>
              <Text style={styles.cell}>Thành tiền ({currency})</Text>
            </View>
            {menProducts.map((product) => (
              <View key={product.id} style={styles.row}>
                <Text style={styles.cell}>{product.id}</Text>
                <Text style={styles.cell}>{product.name}</Text>
                <Text style={styles.cell}>{product.quantity}</Text>
                <Text style={styles.cell}>
                  {product.price.toLocaleString()} {currency}
                </Text>
                <Text style={styles.cell}>
                  {(product.quantity * product.price).toLocaleString()} {currency}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Women</Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.cell}>Mã SP</Text>
              <Text style={styles.cell}>Tên</Text>
              <Text style={styles.cell}>SL</Text>
              <Text style={styles.cell}>Giá ({currency})</Text>
              <Text style={styles.cell}>Thành tiền ({currency})</Text>
            </View>
            {womenProducts.map((product) => (
              <View key={product.id} style={styles.row}>
                <Text style={styles.cell}>{product.id}</Text>
                <Text style={styles.cell}>{product.name}</Text>
                <Text style={styles.cell}>{product.quantity}</Text>
                <Text style={styles.cell}>
                  {product.price.toLocaleString()} {currency}
                </Text>
                <Text style={styles.cell}>
                  {(product.quantity * product.price).toLocaleString()} {currency}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.total}>
          Tổng tiền ({currency}): {totalAmount.toLocaleString()} {currency}
        </Text>
      </Page>
    </Document>
  );
};

type PDFDownloadButtonProps = {
  products: Product[];
  totalAmount: number;
};

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ products, totalAmount }) => {
  const { currency } = useCurrency();

  console.log('Current from download button', currency);

  const document = useMemo(
    () => <QuoteFormPDF products={products} totalAmount={totalAmount} currency={currency} />,
    [products, totalAmount],
  );

  return (
    <PDFDownloadLink
      document={document}
      fileName="quoteform.pdf"
      style={{ textDecoration: 'none' }}
    >
      {({ loading }) => (
        <Button
          variant="contained"
          color="primary"
          startIcon={loading ? <CircularProgress size={20} /> : undefined}
          disabled={loading}
          sx={{
            textTransform: 'none',
            fontSize: 14,
            fontWeight: 600,
            padding: '8px 16px',
            margin: '5px 0px',
          }}
        >
          {loading ? 'Đang tạo PDF...' : 'Tải hóa đơn PDF'}
        </Button>
      )}
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;
