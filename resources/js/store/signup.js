import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SignupAPI from '../services/signup';

const signupSlice = createSlice({
    name: 'signup',

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
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false

            // state.contents = action.payload
        })

        builder.addCase(createUser.rejected, (state, action) => {
            state.isLoading = false

            // state.error = action.error.message
        })
    }
});

export const createUser = createAsyncThunk(
    'signup/create',
    async (data, { rejectWithValue }) => {
        try {
            const response = await SignupAPI.create(data);
            return response.data;
        } catch (error) {
            return rejectWithValue({errors: error.response.data.errors});
        }
    }
);

export default signupSlice.reducer;
export const { setSignupStrategy } = signupSlice.actions;
