import React from 'react';
import {Col, Divider, PageHeader, Row} from 'antd';
import PageWrapper from '../common/PageWrapper';
import WrappedUserForm from './UserForm';
import UserList from './UserList';

const UserView = () => {

    const pageHeader = <PageHeader title="User" subTitle="This is a subtitle"/>;

    return (
        <PageWrapper pageHeader={pageHeader}>
            <Row gutter={24}>
                <Col sm={24} md={6}>
                    <h4>User Form</h4>
                    <Divider/>
                    <WrappedUserForm/>
                </Col>
                <Col sm={24} md={18}>
                    <h4>User List</h4>
                    <Divider/>
                    <UserList/>
                </Col>
            </Row>
        </PageWrapper>
    );
};

export default UserView;
