import _ from "lodash";
import { api } from "./api";

const authApi = api.injectEndpoints({
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

export const login = authApi.endpoints.login.initiate;
export const register = authApi.endpoints.register.initiate;

export const { useRegisterMutation, useLoginMutation } = authApi;
