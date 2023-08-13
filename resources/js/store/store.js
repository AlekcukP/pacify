import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import signupReducer from './signup';
import commonReducer from './common';

const store = configureStore({
    reducer: {
        signup: signupReducer,
        common: commonReducer,
        form: formReducer,
    }
})

export default store;
