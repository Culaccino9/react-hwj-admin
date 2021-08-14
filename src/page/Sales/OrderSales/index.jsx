import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getOrderDataAction } from '../store'

import {
    Card,
    Tabs
} from 'antd'
import {
    Area,
    RingProgress
} from '@ant-design/charts'
export default memo(function WJOrderSales() {
    const { TabPane } = Tabs
    const dispatch = useDispatch()
    const { orderData } = useSelector(state => ({
        orderData: state.sales.orderData
    }), shallowEqual)
    useEffect(() => {
        dispatch(getOrderDataAction())
    }, [dispatch])
    const areaStting = {
        height: 300,
        data: orderData || [{ orderTime: "1", orderAmount: "2" }],
        xField: 'orderTime',
        yField: 'orderAmount',
        xAxis: { tickCount: 5 },
        animation: false,
        slider: {
            start: 0.1,
            end: 0.9,
            trendCfg: { isArea: true },
        },
    };
    const ringProgressSting = {
        height: 50,
        style: { width: "100%" },
        autoFit: false,
        percent: 0.7,
        color: ['#5B8FF9', '#E8EDF3'],
        statistic: false
    };
    const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>
            <Card title="订单统计" style={{marginBottom:"30px"}}>
                说明：此图标适合数据繁多，多分类、多X轴数据可视化。可以动态选择范围与切换。
            </Card>
            <div style={{ backgroundColor: "#fff", padding: "20px 50px" }}>
                <Tabs title="日销售额" style={{ marginBottom: "60px" }}>
                    {tab.map(item => {
                        return (
                            <TabPane
                                tab={
                                    <>
                                        <h3>store{item}</h3>
                                        <div style={{ display: "flex", width: "160px", color: "#000", fontWeight: 100 }}>
                                            <div>
                                                <p>完成率</p>
                                                <p style={{ fontSize: "24px" }}>70%</p>
                                            </div>
                                            <RingProgress {...ringProgressSting} />
                                        </div>
                                    </>
                                }
                                key={item}
                            ></TabPane>
                        )
                    })}
                </Tabs>
                <Area {...areaStting} />;
            </div>
        </>
    )
})
