import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../config";
import { toast } from "react-toastify";

export const fetchUser = createAsyncThunk("fetchUser", async (data) =>{ 
    try{
        const response = await api.post('/university/register', data);
        return response.data;

    }
    catch(error){
        throw error.response?.data;
    }
        
})
const userSlice = createSlice({
    name:"user",
    initialState : {
        isloading :false,
        data:null,
        error:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchUser.pending, (state,action) =>{
            state.isloading =true;
        });
        builder.addCase(fetchUser.fulfilled, (state,action) =>{
            state.isloading = false;
            state.data=action.payload;
            toast.success(action.payload.message);
        });
        builder.addCase(fetchUser.rejected, (state,action) =>{
            state.isloading=false;
            toast.error( action.error.errors || action.error.message );
        })
    }
})

export default userSlice.reducer;