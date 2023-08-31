import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
    name: 'common',

    initialState: {
        isPasswordDisplayed: false,
        isLoading: false
    },

    reducers: {
        setPasswordDisplay: (state, { payload }) => {
            state.isPasswordDisplayed = payload;
        },
        setLoading: (state, { payload }) => {
            state.isLoading = payload;
        }
    }
});

export const { setPasswordDisplay, setLoading } = commonSlice.actions;
