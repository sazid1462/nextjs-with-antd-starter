import React from 'react';
import { Spin } from 'antd';

const LoadingSuspense = ({ height, width }) => {

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height,
        width
    }

    return (
        <div style={style} >
            <Spin size='large' />
        </div>
    );
}

LoadingSuspense.defaultProps = {
    width: "100%",
    height: "100%"
}

export default LoadingSuspense;