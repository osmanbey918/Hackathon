import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore"; // Use getDocs for fetching all documents
import { db } from "../../config/fireBaseConfig";

// Fetch product data from Firestore
export const fetchProductData = createAsyncThunk(
    'Product/fetchProductData',
    async (_, { rejectWithValue }) => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        return querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  
  );

// Add product data to Firestore
export const addProductData = createAsyncThunk(
    'product/addProductData',
    async (data) => {
        try {
            const docRef = await addDoc(collection(db, "products"), data);
            return { id: docRef.id, ...data };
        } catch (error) {
            console.error("Error adding document:", error);
            throw error;
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProductData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addProductData.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })
            .addCase(addProductData.rejected, (state, action) => {
                state.error = action.error.message;
            });
    }
});

export default productSlice.reducer;
