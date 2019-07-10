import React from 'react';
import PropsTypes from 'prop-types';
/* SCSS */
import './error_layout.scss';

const ErrorLayout = ({status, subTitle, children}) => {

    return (
        <div className="error_layout">
            <h1 className="status">{status}</h1>
            <h4 className="sub_title">{subTitle}</h4>
            <div>
                {children}
            </div>
        </div>
    );
};

ErrorLayout.prototypes = {
    status: PropsTypes.number.isRequired,
    subTitle: PropsTypes.string.isRequired
};

export default ErrorLayout;
