import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDoc } from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";



export const fetchProductData = createAsyncThunk(
    'product/fetchProductData',
    async (_) => {
        const productRef = await getDoc(collection(db, "products"));
        return productRef.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

    }
)
export const addProductData = createAsyncThunk(
    'product/addProductData',
    async (data) => {
        try {
            console.log('heloismsm');
              const docRef = await addDoc(collection(db, "products"), data);
            console.log(data, 'llllllll');
            return { id: docRef.id, ...data };
        }
        catch (error) {
            console.log('error');
        }
    }
)
// const initialState = {

// }
const productSlice = createSlice({
    name: "product",
    initialState: {
        product: []

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(addProductData.fulfilled, (state, action) => {
                state.product.push(action.payload);
            })
            .addCase(fetchProductData.fulfilled, (state, action) => {
                state.product = action.payload;
            })
    }
})


export default productSlice.reducer;
