import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthAPI from '../services/signup';

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

    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoading = false

            // state.contents = action.payload
        })

        builder.addCase(register.rejected, (state, action) => {
            state.isLoading = false

            // state.error = action.error.message
        })
    }
});

export const register = createAsyncThunk(
    'auth/register',
    async (data, { rejectWithValue }) => {
        try {
            const response = await AuthAPI.register(data);
            return response.data;
        } catch (error) {
            return rejectWithValue({errors: error.response.data.errors});
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await AuthAPI.login(data);
            return response.data;
        } catch (error) {
            return rejectWithValue({errors: error.response.data.errors});
        }
    }
);

export default signupSlice.reducer;
export const { setSignupStrategy } = signupSlice.actions;
