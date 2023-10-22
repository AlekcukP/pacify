import _ from "lodash";
import { createApi } from '@reduxjs/toolkit/query/react';
import { api, baseQuery } from "./api";

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQuery({
        baseUrl: '/auth'
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
                withCredentials: true
            }),
        }),
        register: builder.mutation({
            query: (userData) => ({
                url: 'register',
                method: 'POST',
                body: userData,
                withCredentials: true
            })
        })
    })
});
// const authApi = api.injectEndpoints({
//     endpoints: (builder) => ({
//         login: builder.mutation({
//             query: (credentials) => ({
//                 url: 'login',
//                 method: 'POST',
//                 body: credentials,
//                 withCredentials: true
//             }),
//         }),
//         register: builder.mutation({
//             query: (userData) => ({
//                 url: 'register',
//                 method: 'POST',
//                 body: userData,
//                 withCredentials: true
//             })
//         })
//     })
// });

export const login = authApi.endpoints.login.initiate;
export const register = authApi.endpoints.register.initiate;

export const { useRegisterMutation, useLoginMutation } = authApi;
