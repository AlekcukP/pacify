import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist';

import { unauthenticatedMiddleware } from '../middleware/unauthenticated';

import { authSlice } from './auth';
import { commonSlice} from './common';

import { api } from '../api/api';
import { validateApi } from '../api/validate';

const rootReducer = combineReducers({
    form: formReducer,
    [authSlice.name]: authSlice.reducer,
    [commonSlice.name]: commonSlice.reducer,
    [api.reducerPath]: api.reducer,
    [validateApi.reducerPath]: validateApi.reducer,
});

const persistedReducer = persistReducer({
    key: 'root',
    storage,
    blacklist: ['form']
}, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(unauthenticatedMiddleware).concat(api.middleware)
});

export const persistor = persistStore(store);
