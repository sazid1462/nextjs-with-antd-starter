import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Layout } from 'antd';
import CustomFooter from './Footer';
import NavHeader from './header/NavHeader';
import '../../static/scss/layout.scss';

const AsideLeft = dynamic(import('./AsideLeft'));


const { Sider, Content } = Layout;

const DefaultLayout = ({ children }) => {

    const [collapsed, setCollapsed] = useState(true);

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    };

    return (
        <Layout>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <AsideLeft collapsed={collapsed} />
            </Sider>
            <Layout>
                <NavHeader />
                <Content className="app_page">
                    {children}
                </Content>
                <CustomFooter />
            </Layout>
        </Layout>
    );
};

export default DefaultLayout;
