import React from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from 'antd'
export default function WJAccountAddBtn(props) {
    const { next, prev, current, steps, done,setAddForm } = props

    const history = useHistory()

    const toList = () => {
        history.push("/account/list")
    }
    const goOn = () => {
        setAddForm({})
        done()
    }
    return (
        <div>
            {(current > 0 && current < steps.length - 1) && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    上一步
                </Button>
            )}
            {(current < steps.length - 1 && current !== 0) && (
                <Button type="primary" onClick={() => next()}>
                    下一步
                </Button>
            )}
            {current === steps.length - 1 && (
                <>
                    <Button type="primary" onClick={goOn}>
                        继续添加
                    </Button>
                    <Button style={{ margin: '0 8px' }} onClick={toList}>
                        查看列表
                    </Button>
                </>
            )}
        </div>
    )
}
