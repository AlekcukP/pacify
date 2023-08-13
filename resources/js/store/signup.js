import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        strategy: "",
    },
    reducers: {
        setSignupStrategy: (state, action) => {
            return {
                ...state,
                strategy: action.payload
            }
        },

        submitForm: (state, action) => {
            console.log(action.payload)
        }
    }
});

export default signupSlice.reducer;
export const { setSignupStrategy, submitForm } = signupSlice.actions;
