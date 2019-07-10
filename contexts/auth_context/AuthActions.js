export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SYNC_AUTH = "SYNC_AUTH";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";

/* Auth Actions */
export const loginRequest = (dispatch, user) => {
    console.log("from action", user);
    dispatch({type: LOGIN_REQUEST});
    setTimeout(() => {
        if (user.username === 'admin' && user.password === '123') {
            dispatch({type: LOGIN_SUCCESS});
            document.cookie = "authtoken=dummyCookieAllowUser; expires=Thu, 01 Jan 2970 00:00:00 UTC; path=/;";
        } else {
            document.cookie = "authtoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            dispatch({type: LOGIN_FAILED})
        }
    }, 2000);
};

export const logoutRequest = (dispatch) => {
    dispatch({type: LOGOUT_REQUEST});
    localStorage.removeItem('auth');
};

export const syncAuth = (dispatch) => {
    dispatch({type: SYNC_AUTH});
};
