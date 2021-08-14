import React from 'react'

import {
    Tabs,
    List,
    Avatar,
    Space,
    Tag,
    Empty
} from 'antd'
import {
    MessageOutlined,
    LikeOutlined,
    StarOutlined
} from '@ant-design/icons';
import { RightDivStyled } from './style'
export default function WJRightWork() {
    const { TabPane } = Tabs
    const tags = (<><Tag>halo呀</Tag><Tag>我是标签呀</Tag><Tag>说点什么好呢</Tag><Tag>我也不知道呢</Tag></>)
    const textData = []
    for (let i = 0; i < 8; i++) {
        textData.push({
            title: `ant design part`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description: tags,
            content:
                '一个人不能骑两匹马，骑上这匹，就要丢掉那匹。聪明人会把凡是分散精力的要求置之度外，只专心致志地去学一门，学一门就要把它学好。——歌德',
            id:i
        })
    }
    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
    return (
        <RightDivStyled>
            <Tabs defaultActiveKey="1">
                <TabPane tab="文章(8)" key="1">
                    <List
                        itemLayout="vertical"
                        size="large"
                        dataSource={textData}
                        renderItem={item => (
                            <List.Item
                                key={item.id}
                                actions={[
                                    <IconText icon={StarOutlined} text="156" key={`a${item.id}`} />,
                                    <IconText icon={LikeOutlined} text="156" key={`b${item.id}`} />,
                                    <IconText icon={MessageOutlined} text="2" key={`c${item.id}`} />,
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={item.title}
                                    description={item.description}
                                />
                                {item.content}
                            </List.Item>
                        )}
                    />
                </TabPane>
                <TabPane tab="应用(5)" key="2">
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </TabPane>
                <TabPane tab="项目(12)" key="3">
                    <Empty/>
                </TabPane>
            </Tabs>
        </RightDivStyled>
    )
}
