import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'

import {Result,Button} from 'antd'
export default memo(function WJ404() {
    const history = useHistory()
    const toHome = () => {
        history.push("/home")
    }
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button onClick={toHome} type="primary">回到主页</Button>}
        />
    )
})
