import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from "./api";

export const validateApi = createApi({
    reducerPath: 'validateApi',
    baseQuery: baseQuery(),
    endpoints: (builder) => ({
        validate: builder.mutation({
            query: ({ form, values }) => ({
                url: form,
                method: 'POST',
                body: values,
                withCredentials: true,
                headers: { 'Precognition': true }
            })
        })
    })
});

export const validate = validateApi.endpoints.validate.initiate;
