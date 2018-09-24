const initState = {
    isAuthenticated: false,
    authorization: ''
};

export const authenticationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, isAuthenticated: action.isAuthenticated, authorization: action.authorization};
        case 'REGISTER':
            return state;
        default:
            return state;
    }
};