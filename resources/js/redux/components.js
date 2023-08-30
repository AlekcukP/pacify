import { createSlice } from '@reduxjs/toolkit';

export const componentsSlice = createSlice({
    name: 'components',

    initialState: {
        passwordVisible: false,
    },

    reducers: {
        togglePasswordVisibility: (state) => {
            return {
                ...state,
                passwordVisible: !state.passwordVisible
            }
        }
    }
});

export const { togglePasswordVisibility } = componentsSlice.actions;
