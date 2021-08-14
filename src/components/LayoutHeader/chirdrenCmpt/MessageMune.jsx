import React from 'react'

import { Tabs, List, Avatar, Button } from 'antd'
export default function WJMessageMune() {
    const { TabPane } = Tabs;
    const inform = [
        {
            title: "你收到了14份新周报",
            description: "2天前",
            img: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"
        },
        {
            title: "你推荐的韩梅梅已经通过面试",
            description: "3天前",
            img: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png"
        },
        {
            title: "这种模块可以多分区",
            description: "4天前",
            img: "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png"
        },
        {
            title: "左侧图标用于区分不同类型",
            description: "一周前",
            img: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png"
        },
        {
            title: "内容不能超过两行字",
            description: "一个月前",
            img: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"
        }
    ]
    const message = [
        {
            title: "大哥 评论了你",
            description: "哈哈哈哈,明天加班",
            img: "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg"
        },
        {
            title: "小鱼 回复了你",
            description: "可以帮我带一杯农夫三拳的奶茶吗，我想喝秋天的第一被奶茶",
            img: "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg"
        },
        {
            title: "翠花 评论了你",
            description: "我也要奶茶",
            img: "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg"
        },
    ]
    const task = [
        {
            title: "上王者",
            description: "任务需要在 2021-01-12 20:00 前启动",
            img: "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg"
        },
        {
            title: "ABCDF版本发布",
            description: "大哥指派你于 2021-01-09 前完成更新并发布",
            img: "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg"
        },
    ]
    const tabPane = [
        {
            tab: "通知 (5)",
            id: 1,
            dataSource: inform
        },
        {
            tab: "消息 (3)",
            id: 2,
            dataSource: message
        },
        {
            tab: "待办 (2)",
            id: 3,
            dataSource: task
        }
    ]
    const tabsStyle = {
        background: "#fff",
        padding: "20px",
        marginTop: "20px",
        width: "360px",
        boxShadow:"0 6px 16px -8px rgb(0 0 0 / 8%), 0 9px 28px 0 rgb(0 0 0 / 5%), 0 12px 48px 16px rgb(0 0 0 / 3%)"
    }
    return (
        <Tabs defaultActiveKey="1" centered={true} style={tabsStyle}>
            {
                tabPane.map(pane => {
                    return (
                        <TabPane tab={pane.tab} key={pane.id}>
                            <List
                                itemLayout="horizontal"
                                dataSource={pane.dataSource}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={item.img} />}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    </List.Item>
                                )}
                            />
                            <div style={{ display: 'flex', justifyContent: "flex-end" }}>
                                <Button type="primary" danger style={{marginRight:"14px"}}>清空</Button><Button type="primary">更多</Button>
                            </div>
                        </TabPane>
                    )
                })
            }
        </Tabs>
    )
}
