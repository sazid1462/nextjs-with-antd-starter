import React from 'react';
import { Icon } from "antd";
import { DASHBOARD_PATH, LOGIN_PATH, PAGE_403_PATH, PAGE_500_PATH, PAGE_404_PATH, USER_PATH } from '../routes/Slugs';

const Navs = [
    {
        key: 'dashboard',
        title: 'Dashboard',
        path: DASHBOARD_PATH,
        icon: <Icon type="pie-chart" />,
        subMenu: null
    },
    {
        key: 'user',
        title: 'USER',
        path: USER_PATH,
        icon: <Icon type="user" />,
        subMenu: null
    },
    {
        key: 'pages',
        title: 'Pages',
        icon: <Icon type="star" />,
        subMenu: [
            {
                key: 'login',
                title: 'Login',
                path: LOGIN_PATH,
                icon: <Icon type="login" />,
                subMenu: null
            },
            {
                key: 'page403',
                title: 'Page403',
                path: PAGE_403_PATH,
            },
            {
                key: 'page404',
                title: 'Page404',
                path: PAGE_404_PATH,
            },
            {
                key: 'page500',
                title: 'Page500',
                path: PAGE_500_PATH,
            }
        ]
    }
]

export default Navs;
