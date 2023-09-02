import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import storage from 'redux-persist-indexeddb-storage';
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
import { componentsSlice} from './components';
import { appSlice } from './app';

import { api } from '../api/api';
import { validateApi } from '../api/validate';

const rootReducer = combineReducers({
    form: formReducer,
    [authSlice.name]: authSlice.reducer,
    [componentsSlice.name]: componentsSlice.reducer,
    [appSlice.name]: appSlice.reducer,
    [api.reducerPath]: api.reducer,
    [validateApi.reducerPath]: validateApi.reducer,
});

const persistedReducer = persistReducer({
    key: 'root',
    storage: storage('stateDB'),
    blacklist: ['form', componentsSlice.name]
}, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(unauthenticatedMiddleware).concat(api.middleware)
});

export const persistor = persistStore(store);
