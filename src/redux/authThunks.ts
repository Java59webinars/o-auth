import {createAsyncThunk} from "@reduxjs/toolkit";
import {logOut, signWithGoogle} from "../services/firebase.ts";
import {User} from "./types.ts";

export const loginWithGoogle = createAsyncThunk(
    "auth/loginWithGoogle",
    async(_, {rejectWithValue}) =>{
        try {
            const user = await signWithGoogle();
            if (!user) throw new Error("LogIn Error");
            return user as User;
        } catch (error){
            if(error instanceof Error) {return rejectWithValue(error.message)
            }return rejectWithValue("Unknown error")
        }
    }
);

export const logoutUserAsync = createAsyncThunk(
    "auth/logoutUser",
    async () => {
        await logOut();
    }
)