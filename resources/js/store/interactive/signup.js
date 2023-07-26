import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        signupMail: false,
        signupGoogle: false
    },
    reducers: {
        setSignupMail: (state, action) => {
            state.signupMail = action.payload;
        }
    }
});

export default signupSlice.reducer;
export const { signupMail, signupGoogle } = signupSlice.actions;
