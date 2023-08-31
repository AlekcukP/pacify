import _ from "lodash";
import axios, { AxiosHeaders, HttpStatusCode } from "axios";
import { createApi } from '@reduxjs/toolkit/query/react';
import Cookies from "js-cookie";
import { setLoading } from "../redux/common";

export const baseQuery = ({ baseUrl } = { baseUrl: '/' }) => async (args, { getState, dispatch }) => {
    const { body, params, url, withCredentials, method, headers } = args;
    const { token } = getState().auth;

    const config = {
        baseUrl: baseUrl,
        url: url,
        method: method ?? axios.get.name,
        data: body,
        headers: new AxiosHeaders({
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            ...headers,
        }),
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        params: params,
        withCredentials: withCredentials ?? false
    };

    axios.interceptors.request.use((config) => {
        if (withCredentials && !Cookies.get('XSRF-TOKEN')) axios('/sanctum/csrf-cookie');
        if (!withCredentials && token) config.headers.setAuthorization('Authorization', `Bearer ${token}`);
        if (!config.headers.has('Precognition')) dispatch(setLoading(true));

        return config;
    });

    axios.interceptors.response.use(
        (response) => {
            if (!response.headers.has('Precognition')) dispatch(setLoading(false));
            return response;
        },
        (error) => {
            if (!error.config.headers.has('Precognition')) dispatch(setLoading(false));
            return Promise.reject(error);
        }
    );

    try {
        const result = await axios(config);

        return {
            status: true,
            code: HttpStatusCode.Ok,
            data: result.data,
        }
    } catch (error) {
        return {
            status: false,
            code: error.response?.status ?? HttpStatusCode.BadRequest,
            data: error.response?.data ?? null,
            message: error.message
        }
    }
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery({
        baseUrl: '/api'
    }),
    endpoints: () => ({})
});
