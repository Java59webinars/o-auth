import {createAsyncThunk} from "@reduxjs/toolkit";
import {logOut, signWithGoogle} from "../services/firebase.ts";
import {User} from "./types.ts";
import {handleError} from "../services/utils.ts";

export const loginWithGoogle = createAsyncThunk(
    "auth/loginWithGoogle",
    async(_, {rejectWithValue}) => {
        try {
            const user = await signWithGoogle();
            if (!user) return rejectWithValue("Unsuccessful login");
            console.log("User: ",user);
            return user as User
        } catch (error){
            return rejectWithValue(handleError(error));
        }
    }
);

export const logoutUserAsync = createAsyncThunk(
    "auth/logoutUser",
    async () => {
        try {
            await logOut();
        } catch (error){
            handleError(error);
        }

    }
)