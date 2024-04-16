import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice'; // Adjust the path as needed

// Configure the Redux store
export const store = configureStore({
    reducer: {
        user: userReducer,
        // You can add more reducers here
    },
});