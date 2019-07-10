import React, { useContext } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';

/* SCSS */
import './login.scss';
import { GlobalContext } from '../../../contexts/GlobalContextProvider';
import { ROOT_PATH } from '../../../routes/Slugs';

const Login = (props) => {

    const { authContext } = useContext(GlobalContext);

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                authContext.loginRequest(values);
            }
        });
    };

    const { getFieldDecorator } = props.form;

    if (authContext.isLogin) return <Redirect to={ROOT_PATH} />

    return (
        <div className="login_form_wrapper">
            <Form onSubmit={handleSubmit} className="login_form">
                <h4 className="login_title">Login</h4>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
}

const WrappedLogin = Form.create({ name: 'login' })(Login);

export default WrappedLogin;