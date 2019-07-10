import React from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;

const CustomFooter = () => {
    const style = {
        textAlign: 'center'
    };
    return (
        <Footer style={style}>E-Courier ©2019 Created by Vivasoft.</Footer>
    );
};

export default CustomFooter;
