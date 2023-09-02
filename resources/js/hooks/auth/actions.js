import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SubmissionError } from "redux-form";
import { resetCredentials, setCredentials } from "../../redux/auth";
import { useRegisterMutation, useLoginMutation } from "../../api/auth";

export const useSignOut = () => {
    const dispatch = useDispatch();
    return  useCallback(() => dispatch(resetCredentials()));
};

export const useSignUp = () => {
    const dispatch = useDispatch();
    const [register] = useRegisterMutation();

    return useCallback(async (userData) => {
        const result = await register(userData);
        if (result?.errors) throw new SubmissionError(result.errors);
        if (!result.status) throw new Error(result.message);

        if (result?.token && _.isString(result.token)) {
            dispatch(setCredentials({
                token: result.token,
                user: result.user
            }));
        }
    }, []);
};

export const useLookUp = () => {
    const dispatch = useDispatch();
    const [login] = useLoginMutation();

    return useCallback(async (userData) => {
        const result = await login(userData);
        if (result?.errors) throw new SubmissionError(result.errors);
        if (!result.status) throw new Error(result.message);

        if (result?.token && _.isString(result.token)) {
            dispatch(setCredentials({
                token: result.token,
                user: result.user
            }));
        }
    }, []);
};
