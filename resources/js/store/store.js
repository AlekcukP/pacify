import { configureStore } from '@reduxjs/toolkit'
import signupReducer from './signup';
import commonReducer from './common';

const store = configureStore({
    reducer: {
        signup: signupReducer,
        common: commonReducer
    }
})

export default store;
