import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',

    initialState: {
        user: null,
        token: null,
        authenticated: false
    },

    reducers: {
        resetCredentials: (state) => {
            state.user = null;
            state.token = null;
            state.authenticated = false;
        },

        setCredentials: (state, { payload: { user, token } }) => {
            if (!_.isEmpty(token) && _.isString(token)) {
                state.user = user;
                state.token = token;
                state.authenticated = true;
            }
        },
    },
});

export const { setCredentials, resetCredentials } = authSlice.actions;
