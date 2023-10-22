import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from "./api";
import { config } from '../app/config';
import UrlHelper from '../helpers/url';

export const formsApi = createApi({
    reducerPath: 'formsApi',
    baseQuery: baseQuery({
        baseUrl: UrlHelper.getBaseUrl(),
        subdomain: 'forms'
    }),
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

export const validate = formsApi.endpoints.validate.initiate;
