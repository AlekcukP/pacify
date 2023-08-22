import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import commonReducer from './components';


const store = configureStore({
    reducer: {
        auth: authReducer,
        common: commonReducer,
        form: formReducer,
    }
})

export default store;
