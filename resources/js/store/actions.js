import { ACTIONS } from "../constants/state";

export const startLoading = () => {
    return {
        type: ACTIONS.START_LOADING
    };
};

export const finishLoading = () => {
    return {
        type: ACTIONS.FINISH_LOADING
    };
};
