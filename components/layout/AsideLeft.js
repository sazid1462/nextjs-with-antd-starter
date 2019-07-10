import React, { Fragment } from 'react';
import { Menu, Icon } from 'antd';
import Brand from './brand/Brand';
import Link from 'next/link';
import Navs from '../../helpers/Navs';
import {ROOT_PATH} from "../../routes/Slugs";

const { SubMenu } = Menu;

const AsideLeft = ({ collapsed }) => {

    const headerLogoClassName = collapsed ? 'brand collapsed' : 'brand';

    /* Menu Binding Start */
    const getMenuItems = (item) => {
        return item.subMenu ? bindSubMenuItem(item) : bindSingleMenuItem(item);
    }

    const bindSingleMenuItem = (item) => {
        return (
            <Menu.Item key={item.key}>
                {item.icon}
                <span>{item.title}</span>
                {item.path && <Link href={item.path}><a/></Link>}
            </Menu.Item>
        )
    }

    const bindSubMenuItem = (item) => {
        return (
            <SubMenu
                key={item.key}
                title={
                    <span>
                        {item.icon}
                        <span>{item.title}</span>
                    </span>
                }
            >
                {item.subMenu.map(item => getMenuItems(item))}
            </SubMenu>
        )
    }
    /* Menu Binding End */

    return (
        <Fragment>
            <Link href={ROOT_PATH}>
                <a><Brand brandText={'Logo'} icon={<Icon style={{ color: '#ff0000' }} type="dingding" />} className={headerLogoClassName} /></a>
            </Link>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {Navs.map(item => getMenuItems(item))}
            </Menu>
        </Fragment>
    );
}

export default AsideLeft;
