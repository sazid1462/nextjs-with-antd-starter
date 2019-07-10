import React, {useContext} from 'react';
import {Avatar, Dropdown, Layout, Menu} from 'antd';
import Link from 'next/link';
/* SCSS */
import './nav_header.scss'
import {GlobalContext} from "../../../contexts/WithContext";
import {redirectTo} from "../../common/Redirect";

const {Header} = Layout;

const NavHeader = () => {

    const {authContext} = useContext(GlobalContext);

    const logout = () => {
        authContext.logoutRequest();
        redirectTo('/login');
    };

    const menu = (
        <Menu style={{minWidth: "120px", backgroundColor: "#ffffff"}}>
            <Menu.Item key="0">
                <Link href=""><a>Profile</a></Link>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="1" onClick={logout}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Header className="nav_header">
            <Dropdown className="drop_down" overlay={menu} trigger={['click']}>
                <div>
                    <span>admin@ecourier.org</span> &nbsp;
                    <Avatar size="large" icon="user" className="ant-dropdown-link"/>
                </div>
            </Dropdown>
        </Header>
    );
};

export default NavHeader;
