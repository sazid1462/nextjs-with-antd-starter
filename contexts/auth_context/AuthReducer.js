import {LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, SYNC_AUTH} from "./AuthActions";
import cookies from "next-cookies";

/* Auth State */
// const auth = JSON.parse(localStorage.getItem('auth'));
export const initAuthState = {
    isLoggedIn: false,
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
        case LOGIN_SUCCESS: {
            const cookie = cookies();
            return {
                ...state,
                ...cookie,
                isLoggedIn: true,
                loading: false
            };
        }
        case LOGIN_FAILED:
            return {
                ...state,
                loading: false
            };
        case LOGOUT_REQUEST: {
            const cookie = cookies();
            return {
                ...state,
                ...cookie,
                isLoggedIn: false
            };
        }
        case SYNC_AUTH: {
            const cookie = cookies();
            return {
                ...state,
                ...cookie,
                isLoggedIn: Boolean(cookie.token)
            };
        }
        default:
            return state;
    }
};
