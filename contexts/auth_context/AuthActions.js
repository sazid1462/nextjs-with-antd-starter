export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";

/* Auth Actions */
export const loginRequest = (dispatch, user) => {
    console.log("from action", user);
    dispatch({ type: LOGIN_REQUEST });
    setTimeout(() => {
        if (user.username === 'admin' && user.password === '123') {

            dispatch({ type: LOGIN_SUCCESS });
            localStorage.setItem('auth', JSON.stringify({
                isLogin: true,
                token: '',
                user: null,
                loading: false,
            }));

        } else {
            dispatch({ type: LOGIN_FAILED })
        }
    }, 2000);
}

export const logoutRequest = (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });
    localStorage.removeItem('auth');
}