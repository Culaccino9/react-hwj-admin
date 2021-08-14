import React from 'react'
import { useHistory } from 'react-router-dom'

import{
    Button,
    Tooltip,
    Dropdown,
} from 'antd'
import {ReloadOutlined , SettingOutlined} from '@ant-design/icons'
import {ActListHeaderDivStyle} from './style'
import WJTableStting from './tableStting'
export default function WJActListHeader() {
    const history = useHistory()
    const toAddAcount = () => {
        history.push("/account/add")
    }
    return (
            <ActListHeaderDivStyle>
                <h2 style={{fontWeight:700}}>账号列表</h2>
                <div>
                    <Button type="primary" onClick={toAddAcount}>+添加账号</Button>
                    <Tooltip className="title-icon" placement="top" title="刷新页面">
                        <ReloadOutlined />
                    </Tooltip>
                    <Tooltip className="title-icon" placement="top" title="页面设置" >
                        <Dropdown overlay={<WJTableStting/>} trigger={['click']} >
                            <SettingOutlined />
                        </Dropdown>
                    </Tooltip>
                </div>
            </ActListHeaderDivStyle>
    )
}
