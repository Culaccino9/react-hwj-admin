import React from 'react'

import { NavLink } from 'react-router-dom'
import {
    Card,
    Divider
} from 'antd'
import {
    Progress,
    TinyLine,
    TinyColumn
} from '@ant-design/charts';
export default function WJHomeCar(props) {
    const { totalOrder, totalAmount, todayOrder, totayAmount } = props.homeData
    const totalAmountEchart = {
        height: 50,
        autoFit: false,
        data: [
            264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539,
            243, 226, 192,
        ],
        smooth: true,
        style: { width: "100%" }
    };
    const todayOrderEchart = {
        height: 64,
        autoFit: false,
        data: [274, 337, 81, 497, 666, 111, 497, 154, 421, 211, 321, 111, 219, 189],
        style: { width: "100%" }
    }
    const totayAmountEchart = {
        height: 60,
        autoFit: false,
        barWidthRatio: 0.3,
        percent: 0.7,
        color: ['#5B8FF9', '#E8EDF3'],
        style: { width: "100%" }
    };
    const carData = [
        {
            title: "总共订单",
            data: totalOrder,
            to: "/sales/order",
            echart: <p>周同比增长 <span style={{ color: "red" }}>12%</span> &emsp; 日同比下降 <span style={{ color: "green" }}>11%</span></p>
        },
        {
            title: "总销售额",
            data: totalAmount,
            to: "/sales/goods",
            echart: <TinyLine {...totalAmountEchart} />
        },
        {
            title: "今日订单",
            data: todayOrder,
            to: "/sales/order",
            echart: <TinyColumn {...todayOrderEchart} />
        },
        {
            title: "今日销售额",
            data: totayAmount,
            to: "/sales/goods",
            echart: <Progress {...totayAmountEchart} />
        },
    ]
    return (
        <>
            {
                carData.map(car => {
                    return (
                        <Card
                            key={car.title}
                            title={car.title}
                            className="car-info"
                            headStyle={{ fontSize: "14px", borderBottom: "none", height: "40px", minHeight: "0", color: "rgba(0,0,0,.45)" }}
                            bodyStyle={{ padding: "0 24px", paddingBottom: "12px" }}
                            extra={<NavLink to={car.to} style={{ color: "#1890ff" }}>More</NavLink>}
                        >
                            <p className="car-title">
                                {car.title.indexOf("销售额") !== -1 ? `￥${car.data}` : car.data}
                            </p>
                            <div className="car-echart">
                                {car.echart}
                            </div>
                            <Divider style={{ margin: "12px 0" }} />
                            <p>{car.title}&nbsp;{car.title.indexOf("销售额") !== -1 ? `￥${car.data}` : car.data}</p>
                        </Card>
                    )
                })
            }
        </>
    )
}
