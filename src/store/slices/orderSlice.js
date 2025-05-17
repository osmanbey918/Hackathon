import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate async order placement
export const placeOrder = createAsyncThunk(
  'orders/placeOrder',
  async (order, { rejectWithValue }) => {
    try {
      // Here you would send order to backend or Firebase
      // For now, just resolve
      return order;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  orders: [], // { id, items, userId, status, createdAt }
  status: 'idle',
  error: null,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders.push({ ...action.payload, id: Date.now(), status: 'placed', createdAt: new Date().toISOString() });
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
