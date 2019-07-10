import React, {useContext} from 'react';
import {Button, Checkbox, Form, Icon, Input} from 'antd';
/* SCSS */
import '../static/scss/login.scss';

import withContext, {GlobalContext} from "../contexts/WithContext";
import {redirectTo} from "../components/common/Redirect";

const Login = (props) => {

    const {authContext} = useContext(GlobalContext);

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                authContext.loginRequest(values);
            }
        });
    };

    const {getFieldDecorator} = props.form;

    if (authContext.isLogin) {
        redirectTo('/dashboard', {status: 301});
        return null;
    }

    return (
        <div className="login_form_wrapper">
            <Form onSubmit={handleSubmit} className="login_form">
                <h4 className="login_title">Login</h4>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login_form_forgot" href="#/">
                        Forgot password
                    </a>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={authContext.loading}
                        className="login_form_button"
                        icon='login'
                    >
                        Log in
                    </Button>
                    Or <a href="#/">register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
};

const WrappedLogin = Form.create({name: 'login'})(Login);

export default withContext(WrappedLogin);
