import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_REQUEST } from "./AuthActions";

/* Auth State */
// const auth = JSON.parse(localStorage.getItem('auth'));
export const initAuthState = {
    isLogin: false,
    token: '',
    user: null,
    loading: false,
};


/* AuthReducer */
export const AuthReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                loading: false
            };
        case LOGIN_FAILED:
            return {
                ...state,
                loading: false
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLogin: false
            };
        default:
            return state;
    }
}
