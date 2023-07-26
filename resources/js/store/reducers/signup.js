const intialSate = {
    signUpType: ''
};

export default (state = intialSate, action) => {
    switch (action.type) {
        case 'SET_SIGN_UP_TYPE':
            return { ...state, signUpType: action.payload };
        default:
            return state;
    }
};
