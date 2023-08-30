import _ from "lodash";
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from "./base-query";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQuery({
        baseUrl: '/api/auth',
        withCredentials: true,
        withToken: false
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

export const { useLoginMutation, useRegisterMutation } = authApi;
