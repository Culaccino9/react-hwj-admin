import React, { memo, useState } from 'react'
import { useHistory } from 'react-router-dom'

import {add} from '@/services/account/'

import { Steps, Divider, Button } from 'antd'
import { ActAddDivStyle } from './style'
import WJAccountAddBtn from './childrenCmpt/WJAccountAddBtn'
import WJActStpsFirst from './childrenCmpt/WJActStpsFirst'
import WJActStpsSecond from './childrenCmpt/WJActStpsSecond'
import WJActStpsLast from './childrenCmpt/WJActStpsLast'

export default memo(function WJAccountAdd() {
    const [current, setCurrent] = useState(0)
    const [addForm, setAddForm] = useState({})
    const history = useHistory()
    const { Step } = Steps;
    const next = () => {
        if (current === 1) {
            add(addForm).then(res=>{
                res.data.code === 0 && setCurrent(current + 1)
            })
        } else {
            setCurrent(current + 1);
        }
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const done = () => {
        setCurrent(0)
    }
    const steps = [
        {
            title: '添加账号',
            content: <WJActStpsFirst next={next} setAddForm={setAddForm} addForm={addForm} />,
        },
        {
            title: '确认添加',
            content: <WJActStpsSecond addForm={addForm} />,
        },
        {
            title: '完成添加',
            content: <WJActStpsLast />,
        },
    ];
    return (
        <ActAddDivStyle>
            <h2>添加账号</h2>
            <Steps className="actadd-strps" current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="actadd-form">
                <div className="steps-content">{steps[current].content}</div>
                <WJAccountAddBtn next={next} prev={prev} current={current} steps={steps} done={done} setAddForm={setAddForm} />
                <Divider />
                <div className="actadd-explain">
                    <h3>说明</h3>
                    <p>添加一个账号：</p>
                    <p>您可以添加一个账号，请为其设置相应的账号密码以及管理员权限。</p>
                    <p>查看账号：</p>
                    <p>您可以从
                        <Button type="link" onClick={() => history.push("/account/list")} style={{ padding: 0, fontSize: "12PX" }}>账号列表</Button>
                        查看已有的账号，或者添加的账号，并对其进行管理。
                    </p>
                </div>
            </div>
        </ActAddDivStyle>
    )
})
