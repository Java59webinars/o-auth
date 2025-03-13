import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginWithGoogle, logoutUserAsync } from "./authThunks.ts";
import { User } from "./types";

interface AuthState {
    user: User | null;
    status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: AuthState = {
    user: null,
    status: "idle"
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUser: (state, action: PayloadAction<User | null>) =>{
            state.user = action.payload;
        },
    },

    extraReducers:(builder) => {
        builder
            .addCase(loginWithGoogle.pending, (state) =>{
                state.status = "loading"
                }
            )
            .addCase(loginWithGoogle.fulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                state.status = "succeeded";
                }
            )
            .addCase(loginWithGoogle.rejected, (state) =>{
                    state.status = "failed"
                }
            )
            .addCase(logoutUserAsync.fulfilled, (state) => {
                state.user = null;
                state.status = "idle";
            })
    }

    })

export const {setUser}= authSlice.actions;
export default authSlice.reducer;





