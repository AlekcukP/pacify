import _ from "lodash";
import axios, { AxiosHeaders, HttpStatusCode } from "axios";
import Cookies from "js-cookie";
import { setCsrf } from "../redux/auth";

export const baseQuery = ({ baseUrl = '/', withCredentials = false, headers = {}, method = axios.get.name, withToken = true }) =>
    async (args, { getState, dispatch }, extraOptions) => {
        const baseRequestUrl = new URL(baseUrl, 'http://pacify.test/api');
        const requestUrl = new URL(args.url, `${baseRequestUrl.href}/`);

        const config = {
            method: args.method || method,
            url: requestUrl.href,
            data: args.body || null,
            headers: new AxiosHeaders({
                ...headers,
                ...args.headers,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            }),
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            params: args.params ? new URLSearchParams(args.params) : null,
            auth: args.auth || null,
            withCredentials,
        };

        const { csrf, token } = getState().auth;

        if (withCredentials && !csrf) {
            const response = await axios('/sanctum/csrf-cookie', config.headers);

            if (
                _.includes([HttpStatusCode.Ok, HttpStatusCode.NoContent], response.status)
                    && Cookies.get('XSRF-TOKEN')
            ) {
                dispatch(setCsrf(decodeURIComponent(Cookies.get('XSRF-TOKEN'))));
            }
        }

        if (withToken && token) {
            config.headers.setAuthorization('Authorization', `Bearer ${token}`);
        }

        try {
            const result = await axios(config);
            return { data: result.data }
        } catch (axiosError) {
            let err = axiosError;

            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            }
        }
    }