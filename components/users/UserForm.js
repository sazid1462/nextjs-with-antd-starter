import React, { useContext, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { GlobalContext } from '../../../contexts/GlobalContextProvider';

const { Item } = Form;

const UserForm = (props) => {

    const { userContext } = useContext(GlobalContext);


    const { getFieldDecorator, setFieldsValue } = props.form;

    useEffect(() => {
        // console.log(userContext)
        setFieldsValue({
            firstName: 'Md',
            lastName: 'Shamim'
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const userFormSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const data = {
                    id: parseInt(((Math.random() + 1) * 1000000)),
                    ...values
                }
                userContext.addUser(data);
            }
        });
    }

    return (
        <Form onSubmit={userFormSubmit}>
            <Item>
                {
                    getFieldDecorator('firstName', {
                        rules: [{ required: true, message: 'Please input your first name!' }],
                    })(<Input placeholder="First Name" />)
                }
            </Item>
            <Item>
                {
                    getFieldDecorator('lastName', {
                        rules: [{ required: true, message: 'Please input your last name!' }],
                    })(< Input placeholder="Last Name" />)
                }
            </Item>
            <Button htmlType="submit">Submit</Button>
        </Form>
    );
}

const WrapperedUserForm = Form.create({ name: 'user_form' })(UserForm);

export default WrapperedUserForm;