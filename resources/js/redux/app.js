import { createSlice } from '@reduxjs/toolkit';

const themes = {
    light: 'light',
    dark: 'dark',
};

export const appSlice = createSlice({
    name: 'app',

    initialState: {
        theme: themes.light,
    },

    reducers: {
        setTheme: (state, { payload }) => {
            state.theme = payload;
        },
    },
});

export const { setTheme } = appSlice.actions;
