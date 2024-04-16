// userSlice.js

import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';
const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBjb2hlcmVudC5pbiIsImF1ZGl0IjoiMjdfVXNlciIsImlzQ2xpZW50RGV0YWlscyI6ZmFsc2UsImV4cCI6MTcxMjg5NzAwMywiaWF0IjoxNzEyMzc4NjAzfQ.9Ak9zmSdZRs4AmCQUAu5ZhFmpM1kRQ5p8AP64LQNJdp8WyfwGPgQH1IeZixCvzHPOhJgW1QanX4jlXhmBrgb-g`,
};

// Async thunk to fetch all users
export const fetchAllUsers = createAsyncThunk('users/fetchAll', async (item: any) => {
    try {
        const response = await axios.post('https://chd-gateway-dev.coherent.in/incident-service/clientDetails/getAllClient', item, {
            headers: headers,
        },
        );
        return response.data;
    } catch (error) {
        throw error;
    }
});

// Async thunk to update a user
export const updateUser = createAsyncThunk('users/update', async (newData: any) => {
    try {
        const response = await axios.put(`https://chd-gateway-dev.coherent.in/incident-service/clientDetails/edit`, newData, { headers: headers, });
        return response.data;
    } catch (error) {
        throw error;
    }
});

// User slice
const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAllUsers.pending, (state: any) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllUsers.fulfilled, (state: any, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state: any, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateUser.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state: any, action) => {
                state.loading = false;
                const updatedUserData = action.meta.arg;
                // Update the user in state
                const userIndex = state?.data?.data?.findIndex((user: any) => user.id == updatedUserData.id);
                console.log(userIndex, "indd")
                if (userIndex !== -1) {
                    // If user is found, update their data
                    state.data.data[userIndex] = { ...state.data.data[userIndex], ...updatedUserData };
                } else {
                    // If user is not found, add them to the data array
                    state.data.data.push(updatedUserData);
                }
            })
            .addCase(updateUser.rejected, (state: any, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;
