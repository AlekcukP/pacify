import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
    name: 'common',
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

export default signupSlice.reducer;
export const { togglePasswordVisibility } = signupSlice.actions;
