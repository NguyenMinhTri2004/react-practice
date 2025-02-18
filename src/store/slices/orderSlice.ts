import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Order {
  id: string;
  items: { id: string; name: string; quantity: number }[];
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
}

export interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    placeOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    updateOrderStatus: (state, action: PayloadAction<{ id: string; status: Order['status'] }>) => {
      const order = state.orders.find((order) => order.id === action.payload.id);
      if (order) {
        order.status = action.payload.status;
      }
    },
  },
});

export const { placeOrder, updateOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;
