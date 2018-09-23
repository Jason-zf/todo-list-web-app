const initState = {
    isAuthenticated: false
};

export const authenticationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN':
            if (action.username === 'tw' && action.password === 'tw')
                return {...state, isAuthenticated: action.isSucceed};
            else
                return {...state, isAuthenticated: false};
        case 'REGISTER':
            return state;
        default:
            return state;
    }
};