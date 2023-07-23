import { ACTIONS, INITIAL_STATE } from "../constants/state";

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.START_LOADING:
            return { ...state, loading: true };
        case ACTIONS.FINISH_LOADING:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default reducer;
