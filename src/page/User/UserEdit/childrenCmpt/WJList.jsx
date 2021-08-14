import React from 'react'

import {
    List,
} from 'antd'
export default function WJList(props) {
    const {data} = props
    // [<Button type="link" key={item.id}>{item.id===5 ? "绑定" : "修改"}</Button>]
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item key={item.id} actions={item.element}>
                <List.Item.Meta
                title={item.title}
                description={item.description}
                />
            </List.Item>
            )}
        />
    )
}
