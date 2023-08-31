import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from "./base-query";

export const validateApi = createApi({
    reducerPath: 'validateApi',
    baseQuery: baseQuery({
        baseUrl: 'form',
        withCredentials: true,
        headers: {
            'Precognition': true
        }
    }),
    endpoints: (builder) => ({
        validate: builder.mutation({
            query: ({ form, values }) => ({
                url: form,
                method: 'POST',
                body: values
            }),
        }),
    }),
});

export const validate = validateApi.endpoints.validate.initiate;
