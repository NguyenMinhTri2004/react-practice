import React, { useMemo } from "react";
import { useProductContext } from "@/context/QuoteFormContext";
import { useCurrency } from "@/context/CurrencyContext";
import "../../styles/quoteFormTable.scss"

type Category = "men" | "women";

type Props = {
  category: Category;
};

const QuoteFormTable: React.FC<Props> = ({ category }) => {
  const { products, updateProduct } = useProductContext();
  const { currency } = useCurrency();

  const filteredProducts = useMemo(() => products.filter((p) => p.category === category), [products, category]);

  return (
    <div className="table-container">
      <h3 className="table-title">{category}</h3>
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

                {/* Ô nhập số lượng */}
                <td>
                  <input
                    type="number"
                    className="input-field"
                    min={0}
                    max={1000}
                    value={product.quantity === 0 ? "" : product.quantity}
                    onChange={(e) => {
                      const value = Number(e.target.value); 

                      if (value  < 1000) {
                        updateProduct(product.id, "quantity", Number(value));
                      }
                    }}
                    onBlur={(e) => {
                      if (e.target.value.trim() === "") {
                        updateProduct(product.id, "quantity", 1);
                      }
                    }}
                  />
                </td>

                {/* Ô nhập giá */}
                <td>
                  <div className="input-group">
                    <span className="currency">{currency}</span>
                    <input
                      type="number"
                      className="input-field price"
                      min={0}
                      max={999999}
                      value={product.price || ""}
                      onChange={(e) => {
                        // const value = e.target.value;
                        // updateProduct(product.id, "price", value === "" ? 0 : Number(value));

                        const value = Number(e.target.value); 

                        if (value  < 999999) {
                          updateProduct(product.id, "price", Number(value));
                        }
                      }}
                      onBlur={(e) => {
                        if (e.target.value.trim() === "") {
                          updateProduct(product.id, "price", 1);
                        }
                      }}
                    />
                  </div>
                </td>

                {/* Thành tiền */}
                <td>
                  {currency === "USD" ? `$ ${totalPrice.toFixed(2)}` : `${totalPrice.toLocaleString()} VND`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default QuoteFormTable;
