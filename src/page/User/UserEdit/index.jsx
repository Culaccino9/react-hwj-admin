import React, { memo } from 'react'

import {
    Tabs,
    Switch,
    Button
} from 'antd'
import WJBasicStting from './childrenCmpt/BasicStting';
import WJList from './childrenCmpt/WJList';
import { UserEditDivStyle } from './style';
export default memo(function WJUserEdit() {
    const safeSttingData = [
        {
          title: '账户密码',
          description:"当前密码强度：强",
          id:1,
          element:[<Button type="link">修改</Button>]
        },
        {
          title: '密保手机',
          description:"已绑定手机：188*****888",
          id:2,
          element:[<Button type="link">修改</Button>]
        },
        {
          title: '密保问题',
          description:"未设置密保问题，密保问题可有效保护账户安全",
          id:3,
          element:[<Button type="link">修改</Button>]
        },
        {
          title: '备用邮箱',
          description:"已绑定邮箱：xxx***gol.com",
          id:4,
          element:[<Button type="link">修改</Button>]
        },
        {
          title: 'MFA 设备',
          description:"未绑定 MFA 设备，绑定后，可以进行二次确认",
          id:5,
          element:[<Button type="link">修改</Button>]
        },
      ];
    const meesageSttingData =  [
        {
          title: '账户密码',
          description:"其他用户的消息将以站内信的形式通知",
          id:1,
          element:[<Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />]
        },
        {
          title: '系统消息',
          description:"系统消息将以站内信的形式通知",
          id:2,
          element:[<Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />]
        },
        {
          title: '待办任务',
          description:"待办任务将以站内信的形式通知",
          id:3,
          element:[<Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />]
        },
      ];
    const { TabPane } = Tabs
    return (
        <UserEditDivStyle>
            <Tabs tabPosition="left">
                <TabPane tab="基本设置" key="1">
                    <WJBasicStting/>
                </TabPane>
                <TabPane tab="安全设置" key="2">
                    <h2>安全设置</h2>
                    <WJList data={safeSttingData}/>
                </TabPane>
                <TabPane tab="新消息通知" key="3">
                    <h2>新消息通知</h2>
                    <WJList data={meesageSttingData}/>
                </TabPane>
            </Tabs>
        </UserEditDivStyle>
    )
})
