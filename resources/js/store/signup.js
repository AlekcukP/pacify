import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        strategy: "",
        form: {
            values: {},
            errors: {}
        },
    },
    reducers: {
        setSignupStrategy: (state, action) => {
            return {
                ...state,
                strategy: action.payload
            }
        },
        setFormState: (state, action) => {
            return {
                ...state,
                formData: {
                    ...action.payload.data
                },
                formErrors: {
                    ...action.payload.errors
                }
            }
        },
        submitForm: (action) => {

        }
    }
});

export default signupSlice.reducer;
export const { setSignupStrategy, setFormState, setFormData, submitForm, setShowPassword } = signupSlice.actions;
