import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',

    initialState: {
        user: null,
        token: localStorage.getItem('token') || null,
        csrf: null,
        authenticated: false
    },

    reducers: {
        resetCredentials: (state) => {
            localStorage.removeItem('token');

            state.user = null;
            state.token = null;
            state.authenticated = false;
        },

        setCredentials: (state, { payload: { user, token } }) => {
            localStorage.setItem('token', token);

            state.user = user;
            state.token = token;
            state.authenticated = true;
        },

        setCsrf: (state, { payload }) => {
            state.csrf = payload;
        }
    },
});

export const { setCredentials, setCsrf } = authSlice.actions;
