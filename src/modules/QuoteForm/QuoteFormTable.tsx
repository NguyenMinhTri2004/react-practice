import React, { useMemo, useState } from 'react';
import { useProductContext } from '@/context/QuoteFormContext';
import { useCurrency } from '@/context/CurrencyContext';
import { useTheme } from '@/context/ThemeContext';
import '../../styles/quoteFormTable.scss';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { toast } from 'react-toastify';
import { formatCurrency } from '@/common/utils';

type Category = 'men' | 'women';

type Props = {
  category: Category;
};

const QuoteFormTable: React.FC<Props> = ({ category }) => {
  const { products, updateProduct, addProduct, removeProduct } = useProductContext();
  const { currency } = useCurrency();
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const [newProduct, setNewProduct] = useState({
    name: '',
    quantity: 1,
    price: 1,
    category: category,
  });

  const filteredProducts = useMemo(
    () => products.filter((p) => p.category === category),
    [products, category],
  );

  const handleOpenConfirm = (id: string) => {
    setSelectedProduct(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleAddProduct = () => {
    if (!newProduct.name.trim()) {
      toast.error('Tên sản phẩm không được để trống!', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    addProduct(newProduct);
    toast.success('Thêm sản phẩm thành công!', {
      position: 'top-right',
      autoClose: 3000,
    });

    setNewProduct({ name: '', quantity: 1, price: 1, category: category });
  };

  const handleConfirmDelete = () => {
    if (selectedProduct) {
      removeProduct(selectedProduct, category);
    }
    handleClose();
  };

  return (
    <div className={`table-container ${theme}`}>
      <div className="header">
        <h3 className="table-title">{category}</h3>
      </div>

      <table className="quote-table">
        <thead>
          <tr>
            <th>Mã SP</th>
            <th>Tên</th>
            <th>SL</th>
            <th>Giá ({currency})</th>
            <th>Thành tiền ({currency})</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => {
            const totalPrice = product.quantity * product.price;

            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  <input
                    type="number"
                    className="input-field"
                    min={0}
                    max={1000}
                    step={1}
                    value={product.quantity === 0 ? '' : product.quantity}
                    onChange={(e) => {
                      const value = Math.floor(Number(e.target.value));
                      if (value < 1000) {
                        updateProduct(product.id, category, 'quantity', value);
                      }
                    }}
                    onBlur={(e) => {
                      if (e.target.value.trim() === '' || isNaN(Number(e.target.value))) {
                        updateProduct(product.id, category, 'quantity', 1);
                      }
                    }}
                  />
                </td>
                <td>
                  <div className="input-group">
                    <span className="currency">{currency}</span>
                    <input
                      type="number"
                      className="input-field price"
                      min={0}
                      max={999999}
                      value={product.price || ''}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        if (value < 999999 && /^\d*(\.\d{0,2})?$/.test(value + '')) {
                          updateProduct(product.id, category, 'price', Number(value));
                        }
                      }}
                      onBlur={(e) => {
                        if (e.target.value.trim() === '') {
                          updateProduct(product.id, category, 'price', 1);
                        }
                      }}
                    />
                  </div>
                </td>
                <td>
                  {
                    /* {currency === 'USD'
                    ? 
                    : `${totalPrice.toLocaleString()} VND`} */
                    formatCurrency(totalPrice, currency)
                  }
                </td>

                <td>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleOpenConfirm(product.id)}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="add-product">
        <TextField
          label="Tên sản phẩm"
          variant="outlined"
          size="small"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <TextField
          label="Số lượng"
          type="number"
          variant="outlined"
          size="small"
          value={newProduct.quantity === 0 ? '' : newProduct.quantity}
          inputProps={{ min: 1, max: 1000 }}
          onChange={(e) => {
            const value = Math.floor(Number(e.target.value));
            if (value < 1000) {
              setNewProduct({ ...newProduct, quantity: value });
            }
          }}
          onBlur={(e) => {
            if (e.target.value.trim() === '' || isNaN(Number(e.target.value))) {
              setNewProduct({ ...newProduct, quantity: 1 });
            }
          }}
        />
        <span className="currency">{currency} :</span>
        <TextField
          label="Giá"
          type="number"
          variant="outlined"
          inputProps={{ min: 1, max: 999999 }}
          size="small"
          value={newProduct.price === 0 ? '' : newProduct.price}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value < 999999 && /^\d*(\.\d{0,2})?$/.test(value + '')) {
              setNewProduct({ ...newProduct, price: value });
            }
          }}
          onBlur={(e) => {
            if (e.target.value.trim() === '' || isNaN(Number(e.target.value))) {
              setNewProduct({ ...newProduct, price: 1 });
            }
          }}
        />

        <TextField
          label={`Thành tiền (${currency})`}
          variant="outlined"
          size="small"
          value={
            // currency === 'USD'
            //   ? `$ ${(newProduct.quantity * newProduct.price).toFixed(2)}`
            //   : `${(newProduct.quantity * newProduct.price).toLocaleString()} VND`
            formatCurrency(newProduct.quantity * newProduct.price, currency)
          }
          inputProps={{ readOnly: true }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleAddProduct();
          }}
        >
          Thêm sản phẩm
        </Button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Xác nhận xóa sản phẩm</DialogTitle>
        <DialogContent>
          <DialogContentText>Bạn có chắc chắn muốn xóa sản phẩm này không?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default QuoteFormTable;
