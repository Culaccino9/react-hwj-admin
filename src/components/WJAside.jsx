import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';

import { Menu } from 'antd';
import {
    HomeOutlined,
    FileDoneOutlined,
    ShoppingOutlined,
    SketchOutlined,
    UsergroupAddOutlined,
    PieChartOutlined,
    SmileOutlined
} from '@ant-design/icons'

import menuData from '@/common/menuData'

export default memo(function WJAside({ currentRoute }) {
    const role = sessionStorage.role
    const { pathname } = currentRoute
    const { SubMenu } = Menu;
    const menuIcon = [<HomeOutlined />, <FileDoneOutlined />, <ShoppingOutlined />, <SketchOutlined />, <UsergroupAddOutlined />, <PieChartOutlined />, <SmileOutlined />]
    const buildMenu = (menu, index) => {
        // console.log(menuData(role));
        return (
            (menu.children &&
                <SubMenu key={menu.path} title={menu.title} icon={menuIcon[index]}>
                    {menu.children.map(menu_2 => {
                        return (
                            <Menu.Item key={menu_2.path}>
                                <NavLink to={menu_2.path}>{menu_2.title}</NavLink>
                            </Menu.Item>
                        )
                    })}
                </SubMenu>) ||
            <Menu.Item key={menu.path} icon={menuIcon[index]}>
                <NavLink to={menu.path}>{menu.title}</NavLink>
            </Menu.Item>
        )
    }
    const getDefaultOpenKeys = currentRouter => {
        return [`/${currentRouter.split("/")[1]}`]
    }
    return (
        <Menu mode="inline"
            selectedKeys={[pathname]}
            defaultOpenKeys={getDefaultOpenKeys(pathname)}
            theme="dark"
            style={{ width: "100%" }}>
            {
                menuData(role).map((item, index) => {
                    return buildMenu(item, index)
                })
            }
        </Menu>
    )
})
