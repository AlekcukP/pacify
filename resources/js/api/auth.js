import _ from "lodash";
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from "./base-query";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQuery({
        baseUrl: 'auth',
        withCredentials: true
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials
            }),
        }),
        register: builder.mutation({
            query: (userData) => ({
                url: 'register',
                method: 'POST',
                body: userData
            }),
        })
    }),
});

export const login = authApi.endpoints.login.initiate;
export const register = authApi.endpoints.register.initiate;
