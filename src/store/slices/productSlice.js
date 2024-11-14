import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore"; // Use getDocs for fetching all documents
import { db, storage } from "../../config/fireBaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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
export const uploadImage = createAsyncThunk(
    'product/uploadImage',
    async (file) => {
        const storageRef = ref(storage, `productsImages/${file.name}`);

        try {
            // Upload image
            const snapshot = await uploadBytes(storageRef, file);

            // Get download URL
            const url = await getDownloadURL(snapshot.ref);
            return url; // Return the URL to be used later
        } catch (error) {
            console.error("Error uploading image:", error);
            throw error; // Throw error to be handled later
        }
    }
);
const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        imageUrl: null,
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
            }).addCase(uploadImage.fulfilled, (state, action) => {
                state.imageUrl = action.payload;
                console.log(action.payload);

            });

    }
});

export default productSlice.reducer;
