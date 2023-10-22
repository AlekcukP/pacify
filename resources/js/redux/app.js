import { createSlice } from '@reduxjs/toolkit';
import { config } from './config';

export const appSlice = createSlice({
    name: 'app',

    initialState: {
        theme: config.get('APP_THEMES').LIGHT,
    },

    reducers: {
        setTheme: (state, { payload }) => {
            state.theme = payload;
        },
    },
});

export const { setTheme } = appSlice.actions;
