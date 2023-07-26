import { configureStore } from '@reduxjs/toolkit'
import signupReducer from './interactive/signup';

const store = configureStore({
    reducer: {
        signup: signupReducer
    }
})

export default store
