import React, { createContext, useReducer } from 'react';
import { UserReducer, initUserState } from './user_context/UserReducer';
import { AuthReducer, initAuthState } from './auth_context/AuthReducer';
import { loginRequest, logoutRequest } from './auth_context/AuthActions';
import { addUser } from './user_context/UserActions';
import { ContextBinder } from './ContextBinder';

export const GlobalContext = createContext();

const withContext = (Component)=>{
    return function GlobalContextProvider() {
        const authContext = ContextBinder(useReducer(AuthReducer, initAuthState), {loginRequest, logoutRequest});
        const userContext = ContextBinder(useReducer(UserReducer, initUserState), {addUser});

        return (
            <GlobalContext.Provider
                value={{
                    authContext,
                    userContext
                }}
            >
                <Component/>
            </GlobalContext.Provider>
        );
    }
}

export default withContext;
