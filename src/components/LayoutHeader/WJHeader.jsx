import React from 'react'

import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {
    SearchOutlined,
    QuestionCircleOutlined,
    BellOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import {
    Tooltip,
    Badge,
    Dropdown,
    Avatar,
    Menu
} from 'antd'
import { HeaderDivStyle } from './style'
import WJMessageMune from './chirdrenCmpt/MessageMune'
export default function WJHeader() {
    const {userInfo} = useSelector(state=>({
        userInfo:state.user.userInfo
    }))
    const logOut = () => {
        sessionStorage.clear()
    }
    const userMune = (
        <Menu>
            <Menu.Item key="0" icon={<UserOutlined />}>
                <NavLink to="/user/inf">个人中心</NavLink>
            </Menu.Item>
            <Menu.Item key="1" icon={<SettingOutlined />}>
                <NavLink to="/user/edit">个人设置</NavLink>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" icon={<LogoutOutlined />}>
                <NavLink to="/login" onClick={logOut}>退出登录</NavLink>
            </Menu.Item>
        </Menu>
    )
    return (
        <HeaderDivStyle>
            <div className="user">
                <SearchOutlined className="icont" />
                <Tooltip className="icont" placement="bottomLeft" title="需要帮助吗？">
                    <QuestionCircleOutlined />
                </Tooltip>
                <Dropdown className="icont" overlay={<WJMessageMune />} trigger={['click']}>
                    <Badge dot={true} >
                        <BellOutlined onClick={e => e.preventDefault()} />
                    </Badge>
                </Dropdown>
                <Dropdown className="icont" overlay={userMune} >
                    <div className="userImg">
                        <Avatar size={28} src={userInfo.imgUrl} style={{ marginRight: "10px" }} />
                        {userInfo.account}
                    </div>
                </Dropdown>
            </div>
        </HeaderDivStyle>
    )
}
