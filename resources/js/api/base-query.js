import _ from "lodash";
import axios, { AxiosHeaders, HttpStatusCode } from "axios";
import Cookies from "js-cookie";
import { setCsrf } from "../redux/auth";
import { setLoading } from "../redux/common";
import { error } from "ajv/dist/vocabularies/applicator/dependencies";

export const baseQuery = ({
    baseUrl = '/',
    withCredentials = false,
    headers = {},
    method = axios.get.name,
    withToken = false
}) => async (args, { getState, dispatch }) => {
    const appUrl = 'http://pacify.test/api'; // REPLACE WITH VARIABLE

    const { body, params, url } = args;
    const requestUrl = _.join(_.map([appUrl, baseUrl, url], item => _.trim(item, '/')), '/');

    const config = {
        url: requestUrl,
        method: args.method || method,
        data: body || null,
        headers: new AxiosHeaders({
            ...headers,
            ...args.headers,
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
        }),
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        params: params ? new URLSearchParams(params) : null,
        withCredentials
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

    const isPrecognitionRequest = config.headers.has('Precognition');

    axios.interceptors.request.use((config) => {
        if (!isPrecognitionRequest) dispatch(setLoading(true));
        return config;
    });

    axios.interceptors.response.use(
        (response) => {
            if (!isPrecognitionRequest) dispatch(setLoading(false));
            return response;
        },
        (error) => {
            if (!isPrecognitionRequest) dispatch(setLoading(false));
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
