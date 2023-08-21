import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthAPI from '../services/auth';
import { SubmissionError, reduxForm } from "redux-form";

const signupSlice = createSlice({
    name: 'auth',

    initialState: {
        isLoading: false,
        error: "",
        validationErrors: {},
        strategy: "",
    },

    reducers: {
        setSignupStrategy: (state, action) => {
            return {
                ...state,
                strategy: action.payload
            }
        },
    },

    // extraReducers: (builder) => {
    //     builder.addCase(register.pending, (state) => {
    //         state.isLoading = true
    //     })
    //     .addCase(register.fulfilled, (state, action) => {
    //         state.isLoading = false
    //         console.log(action, 'action fulfilled')
    //         // state.contents = action.payload
    //     })
    //     .addCase(register.rejected, (state, action) => {
    //         state.isLoading = false

    //         console.log(action, 'action rej')
    //         // state.error = action.error.message
    //     })
    // }
});

// export const login = createAsyncThunk(
//     'auth/login',
//     async (data, { rejectWithValue }) => {
//         try {
//             const response = await AuthAPI.login(data);
//             return response.data;
//         } catch (error) {
//             return rejectWithValue({errors: error.response.data.errors});
//         }
//     }
// );

export default signupSlice.reducer;
export const { setSignupStrategy } = signupSlice.actions;
