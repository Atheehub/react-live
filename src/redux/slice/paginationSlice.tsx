// userSlice.js

import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';
const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBjb2hlcmVudC5pbiIsImF1ZGl0IjoiMjdfVXNlciIsImlzQ2xpZW50RGV0YWlscyI6ZmFsc2UsImV4cCI6MTcxMjg5NzAwMywiaWF0IjoxNzEyMzc4NjAzfQ.9Ak9zmSdZRs4AmCQUAu5ZhFmpM1kRQ5p8AP64LQNJdp8WyfwGPgQH1IeZixCvzHPOhJgW1QanX4jlXhmBrgb-g`,
};

// Async thunk to fetch all users
export const fetchAllData = createAsyncThunk('users/fetchAll', async () => {
    try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
        return response.data;
    } catch (error) {
        throw error;
    }
});

// User slice
const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAllData.pending, (state: any) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllData.fulfilled, (state: any, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllData.rejected, (state: any, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export default paginationSlice.reducer;
