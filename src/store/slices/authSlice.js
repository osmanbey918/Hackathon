// authSlice
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from "../../config/fireBaseConfig";
import { addDoc, doc, collection, getDoc, setDoc } from "firebase/firestore";
import Loading from "../../components/loading/Loading";


export const getCurrentUser = createAsyncThunk(
    "auth/currentUser",
    async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                return user
            }

        } catch (error) {

        }

    }
)


export const signup = createAsyncThunk(
    'auth/signup',
    async (user) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)

            let saveUserTodb = {
                email: user.email,
                name: user.name,
                phone: user.phone,
                address: user.address,
                gender: user.gender,
                uid: userCredential.user.uid
            }
            console.log(saveUserTodb);
            
            await setDoc(doc(db, "customers", userCredential.user.uid), saveUserTodb)
            return saveUserTodb

        } catch (error) {
            console.log("error", error);

        }

    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (user) => {
        
        try {
            // console.log("user", user);
            const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password)
            // console.log("userCredential in login", userCredential.user.uid);
            const docSnap = await getDoc(doc(db, "customers", userCredential.user.uid))
            const dbUser = docSnap?.data()
            // console.log("dbUser", dbUser);
            return dbUser
        } catch (error) {
            console.log("error", error);
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        try {
            await signOut(auth)
            return true
        } catch (error) {
            console.log(error);

        }
    }
)

const initialState = {
    user: null,
    loading: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state) => {
                state.loading = false;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state) => {
                state.loading = false;
            })
            .addCase(logout.pending, (state) => {
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
            })
            .addCase(logout.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getCurrentUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getCurrentUser.rejected, (state) => {
                state.loading = false;
            });
    }

});

export const { setUser } = authSlice.actions
export default authSlice.reducer