import React from 'react';
import PropTypes from 'prop-types';

/* SCSS */
import './brand.scss'

const Brand = ({ icon, brandText, className }) => {
    return (
        <div className={className}>
            <span className="icon">{icon}</span>
            <span className="text">{brandText}</span>
        </div>
    );
}

Brand.defaultProps = {
    className: "brand",
    brandText: "Brand"
}

Brand.propTypes = {
    icon: PropTypes.element.isRequired
}

export default Brand;
