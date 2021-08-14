import React from 'react'

import { Spin, Space } from 'antd';
export default function WJLoading() {
    const styleDiv = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%",
    }
    return (
        <div style={styleDiv}>
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </div>
    )
}
