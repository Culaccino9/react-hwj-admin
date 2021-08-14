import React from 'react'

import { Descriptions } from 'antd';
export default function WJActStpsSecond({ addForm }) {
    return (
        <Descriptions
            title="添加账号信息"
            column={{ xxl: 1, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            style={{marginBottom:"20px"}}
            bordered
        >
            <Descriptions.Item label="账号">{addForm.account}</Descriptions.Item>
            <Descriptions.Item label="密码">{addForm.password}</Descriptions.Item>
            <Descriptions.Item label="用户组">{addForm.userGroup}</Descriptions.Item>
        </Descriptions>
    )
}
