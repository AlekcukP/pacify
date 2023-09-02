import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
    name: 'common',

    initialState: {
        isSidebarOpen: false,
        isPasswordDisplayed: false,
        isLoading: false
    },

    reducers: {
        setSidebarOpen: (state, { payload }) => {
            state.isSidebarOpen = payload;
        },
        setPasswordDisplay: (state, { payload }) => {
            state.isPasswordDisplayed = payload;
        },
        setLoading: (state, { payload }) => {
            state.isLoading = payload;
        }
    }
});

export const { setPasswordDisplay, setLoading, setSidebarOpen } = commonSlice.actions;
