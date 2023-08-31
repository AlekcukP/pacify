import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',

    initialState: {
        user: null,
        token: localStorage.getItem('token') || null,
        error: null,
        success: false,
        csrf: null,
    },

    reducers: {
        resetCredentials: (state) => {
            localStorage.removeItem('token');

            state.user = null;
            state.token = null;
        },

        setCredentials: (state, { payload: { user, token } }) => {
            localStorage.setItem('token', token);

            state.user = user;
            state.token = token;
        },

        setCsrf: (state, { payload }) => {
            state.csrf = payload;
        }
    },
});

export const { setCredentials, setCsrf } = authSlice.actions;
