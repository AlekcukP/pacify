import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import signupReducer from './auth';
import commonReducer from './components';

const store = configureStore({
    reducer: {
        signup: signupReducer,
        common: commonReducer,
        form: formReducer,
    }
})

export default store;
