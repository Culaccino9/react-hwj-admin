import React from 'react'

import moment from 'moment'
import {
    Card,
    Comment,
    Avatar,
    Tooltip
} from 'antd'
import { DislikeOutlined, LikeFilled } from '@ant-design/icons';
import { ShopsMainLDivStyle } from './style'
export default function WJShopsMainLeft({ shopsData }) {
    const { Meta } = Card
    const carMap = [
        ["deliveryPrice", "配送费"],
        ["deliveryTime", "配送时间"],
        ["description", "专送"],
        ["sellCount", "销量"],
        ["minPrice", "最低起送"],
    ]
    const picsCar = []
    carMap.forEach(item => {
        let obj = {
            title: item[1],
            content: shopsData[item[0]],
        }
        picsCar.push(obj)
    })
    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span>
                <LikeFilled />
                <span className="comment-action">{213}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span>
                <DislikeOutlined />
                <span className="comment-action">{26}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];
    return (
        <ShopsMainLDivStyle>
            <Card className="letf-car" title="商品展示卡片" extra={<a href="/#">More</a>}>
                {
                    picsCar.map(car => {
                        return (
                            <Card.Grid key={car.title}>
                                <Meta
                                    title={<><Avatar size={22} style={{ color: '#f56a00', backgroundColor: '#fde3cf', marginRight: "10px" }}>C</Avatar>{car.title}</>}
                                    description={car.content}
                                />
                            </Card.Grid>
                        )
                    })
                }
                <Card.Grid>
                    <Meta
                        title={<><Avatar size={22} style={{ color: '#f56a00', backgroundColor: '#fde3cf', marginRight: "10px" }}>C</Avatar>营业时间</>}
                        description={shopsData.date && shopsData.date[0].substr(10) + " - " +  shopsData.date[1].substr(10)}
                    />
                </Card.Grid>
            </Card>
            <Card className="left-evaluate" title="客人评价" extra={<a href="/#">More</a>}>
                {
                    [1, 2, 3, 4, 5, 6].map(evaluate => {
                        return (
                            <Comment
                                key={evaluate}
                                style={{ margin: "0 20px" }}
                                actions={actions}
                                author={<a href="/home">Han Solo</a>}
                                avatar={
                                    <Avatar
                                        src="https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg"
                                        alt="Han Solo"
                                    />
                                }
                                content={
                                    <p>
                                        太好吃了，从来没有吃过这么好吃的快餐，感动哭了，家人们，冲他，冲他。锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦！
                                    </p>
                                }
                                datetime={
                                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                        <span>{moment().fromNow()}</span>
                                    </Tooltip>
                                }
                            />
                        )
                    })
                }
            </Card>
        </ShopsMainLDivStyle>
    )
}
