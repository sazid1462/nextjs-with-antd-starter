import React, { useContext } from 'react';
import { Avatar, Card, Col, PageHeader, Row } from 'antd';
/* SCSS */
import '../static/scss/dashboard.scss'

import { GlobalContext } from "../contexts/WithContext";
import PageWrapper from "../components/common/PageWrapper";

const { Meta } = Card;

const Dashboard = () => {

    const { userContext } = useContext(GlobalContext);

    const pageHeader = <PageHeader title="Dashboard" subTitle="This is a subtitle" />;

    return (
        <PageWrapper
            pageHeader={pageHeader}
        >
            <Row gutter={4}>
                <Col xs={24} sm={8}>
                    <Card>
                        <Meta
                            avatar={<Avatar icon='user' />}
                            title="Number Of Users"
                            description={userContext.users.length}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
        </PageWrapper>
    );
};

Dashboard.isDefaultLayout = true;

export default Dashboard;
