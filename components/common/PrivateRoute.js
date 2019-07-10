import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LOGIN_PATH } from '../../routes/Slugs';

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => isLogin ? <Component /> : <Redirect to={LOGIN_PATH} />}
        />
    );
}

export default PrivateRoute;