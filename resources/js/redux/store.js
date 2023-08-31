import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { authSlice } from './auth';
import { commonSlice} from './common';

import { authApi } from '../api/auth';
import { validateApi } from '../api/validate';

const rootReducer = combineReducers({
    form: formReducer,
    [authSlice.name]: authSlice.reducer,
    [commonSlice.name]: commonSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [validateApi.reducerPath]: validateApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
});
