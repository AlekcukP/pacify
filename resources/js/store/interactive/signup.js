import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        strategy: "",
        formData: {
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            confirm_password: ""
        },
        formErrors: {
            email: {},
            first_name: {},
            last_name: {},
            password: {},
            confirm_password: {}
        }
    },
    reducers: {
        setSignupStrategy: (state, action) => {
            return {
                ...state,
                strategy: action.payload
            }
        },
        // setFormData: (state, action) => {
        //     return {
        //         ...state,
        //         formData: {
        //             ...action.payload
        //         }
        //     }
        // },
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
export const { setSignupStrategy, setFormState, setFormData, submitForm } = signupSlice.actions;
