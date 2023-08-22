import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',

    initialState: {
        strategy: "",
        user: {
            authenticated: false,
            token: null
        }
    },

    reducers: {
        setSignupStrategy: (state, action) => {
            return {
                ...state,
                strategy: action.payload
            }
        },
        authenticate: (state, action) => {
            return {
                ...state,
                user: {
                    authenticated: action.payload.status,
                    token: action.payload.token
                }
            }
        }
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

export default authSlice.reducer;
export const { setSignupStrategy, authenticate } = authSlice.actions;
