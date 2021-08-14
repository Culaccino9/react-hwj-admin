import React, { memo, useState } from 'react'

import { Card, List, Avatar } from 'antd'
import { Column, Pie, WordCloud, Area } from '@ant-design/charts'
import wordCloudData from './data'
export default memo(function WJHomeChart(props) {
    const { xData, orderData, amountData } = props
    const orderChartData = orderData.map((item, index) => {
        return item = {
            type: xData[index],
            sales: item
        }
    })
    const amountCharData = amountData.map((item, index) => {
        return item = {
            type: xData[index],
            sales: item,
        }
    })
    const [key, setKey] = useState("order")
    const tabList = [
        {
            key: 'order',
            tab: '订单量',
        },
        {
            key: 'amount',
            tab: '销售额',
        },
    ];
    const onTabChange = key => {
        setKey(key)
    }
    const columnStting = {
        data: key === "order" ? orderChartData : amountCharData,
        xField: 'type',
        yField: 'sales',
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: { alias: '类别' },
            sales: { alias: `${key === 'order' ? '订单量' : '销售额'}` },
        },
        minColumnWidth: 50,
        maxColumnWidth: 50,
        height: 160,
        style: {
            width: "68%",
            padding: "30px 10px"
        }
    };
    const pieStting = {
        appendPadding: 10,
        data: orderChartData,
        angleField: 'sales',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: '订单量',
            },
        },
        height: 300,
    };
    const wordCloudStting = {
        data: wordCloudData,
        wordField: 'x',
        weightField: 'value',
        color: '#122c6a',
        wordStyle: {
            fontFamily: 'Verdana',
            fontSize: [24, 80],
        },
        interactions: [{ type: 'element-active' }],
        state: { active: { style: { lineWidth: 3 } } },
        height: 300,
    }
    const areaStting = {
        data: amountCharData,
        xField: 'type',
        yField: 'sales',
        annotations: [
            {
                type: 'text',
                position: ['min', 'median'],
                content: '中位数',
                offsetY: -4,
                style: { textBaseline: 'bottom' },
            },
            {
                type: 'line',
                start: ['min', 'median'],
                end: ['max', 'median'],
                style: {
                    stroke: 'red',
                    lineDash: [2, 2],
                },
            },
        ],
        style:{
            padding: "10px 100px"
        }
    }
    return (
        <>
            <Card
                style={{ width: '100%', marginTop: "30px" }}
                // extra={<a href="#">More</a>}
                tabList={tabList}
                activeTabKey={key}
                onTabChange={key => onTabChange(key)}
            >
                <div className="chart-order">
                    <Column {...columnStting} />
                    <List
                        header={<h3 style={{ marginLeft: "16px" }}>{key === 'order' ? '订单量' : '销售额'}</h3>}
                        size="small"
                        split={false}
                        style={{ width: "26%", marginTop: "-24px" }}
                        dataSource={key === 'order' ? orderChartData : amountCharData}
                        renderItem={(item, index) => (
                            <List.Item
                                actions={[<div>{item.sales}</div>]}
                            >
                                <Avatar style={{ backgroundColor: `${index < 3 ? '#314659' : '#fafafa'}`, verticalAlign: 'middle', marginRight: "20px" }} size={20}>
                                    <span style={{ color: `${index < 3 ? '#fff' : '#000 '}`, fontSize: "16px" }}>{index + 1}</span>
                                </Avatar>
                                日期：{item.type}
                            </List.Item>
                        )
                        }
                    />
                </div>
            </Card>
            <div className="chart-pie">
                <Card title="词图" style={{ width: "49%" }}>
                    <WordCloud {...wordCloudStting} />
                </Card>
                <Card title="订单量" style={{ width: "49%" }}>
                    <Pie {...pieStting} />
                </Card>
            </div>
            <Card title="销售额" style={{marginTop:"30px"}}>
                <Area {...areaStting} />
            </Card>
        </>
    )
})
