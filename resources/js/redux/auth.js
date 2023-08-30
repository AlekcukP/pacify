import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',

    initialState: {
        loading: false,
        user: null,
        token: localStorage.getItem('token') || null,
        error: null,
        success: false,
        csrf: null,
        strategy: ""
    },

    reducers: {
        setSignupStrategy: (state, { payload }) => {
            state.strategy = payload;
        },

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

export const { setSignupStrategy, setCredentials, setCsrf } = authSlice.actions;
