import React, { memo } from 'react'

import { fundFlowGraphData, sankeyData } from './data'

import { Card } from 'antd'
import {
    FundFlowGraph,
    Gauge,
    Sankey,
    Bullet,
    Liquid
} from '@ant-design/charts'
import { GoodsSalesDivStyle } from './style.js'
import WJGoodsChart from './childrenCmpt/WJGoodsChart'
export default memo(function WJGoodsSales() {
    const fundFlowGraphStting = {
        data: fundFlowGraphData,
        height: 150,
    }
    const gaugeStting = {
        height: 150,
        percent: 0.75,
        range: { color: '#30BF78' },
        indicator: {
            pointer: { style: { stroke: '#D0D0D0' } },
            pin: { style: { stroke: '#D0D0D0' } },
        },
        axis: {
            label: {
                formatter: function formatter(v) {
                    return Number(v) * 100;
                },
            },
            subTickLine: { count: 3 },
        },
        statistic: {
            content: {
                formatter: function formatter(_ref) {
                    // var percent = _ref.percent;
                    return '优秀';
                },
                style: {
                    color: 'rgba(0,0,0,0.65)',
                    fontSize: 30,
                },
            },
        },
    }
    const sankeyStting = {
        height: 200,
        data: sankeyData,
        sourceField: 'source',
        targetField: 'target',
        weightField: 'value',
        nodeWidthRatio: 0.008,
        nodePaddingRatio: 0.03,
    }
    const bulletStting = {
        height: 200,
        data: [
            {
                title: '重庆',
                ranges: [30, 90, 120],
                measures: [65],
                target: 80,
            },
            {
                title: '杭州',
                ranges: [30, 90, 120],
                measures: [50],
                target: 100,
            },
            {
                title: '广州',
                ranges: [30, 90, 120],
                measures: [40],
                target: 85,
            },
            {
                title: '深圳',
                ranges: [30, 90, 120],
                measures: [50],
                target: 100,
            }],
        measureField: 'measures',
        rangeField: 'ranges',
        targetField: 'target',
        xField: 'title',
        color: {
            range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
            measure: '#5B8FF9',
            target: '#39a3f4',
        },
        label: {
            measure: {
                position: 'middle',
                style: { fill: '#fff' },
            },
        },
        xAxis: { line: null },
        yAxis: false,
        legend: {
            custom: true,
            position: 'bottom',
            items: [
                {
                    value: '差',
                    name: '差',
                    marker: {
                        symbol: 'square',
                        style: {
                            fill: '#FFbcb8',
                            r: 5,
                        },
                    },
                },
                {
                    value: '良',
                    name: '良',
                    marker: {
                        symbol: 'square',
                        style: {
                            fill: '#FFe0b0',
                            r: 5,
                        },
                    },
                },
                {
                    value: '优',
                    name: '优',
                    marker: {
                        symbol: 'square',
                        style: {
                            fill: '#bfeec8',
                            r: 5,
                        },
                    },
                },
                {
                    value: '实际值',
                    name: '实际值',
                    marker: {
                        symbol: 'square',
                        style: {
                            fill: '#5B8FF9',
                            r: 5,
                        },
                    },
                },
                {
                    value: '目标值',
                    name: '目标值',
                    marker: {
                        symbol: 'line',
                        style: {
                            stroke: '#39a3f4',
                            r: 5,
                        },
                    },
                },
            ],
        },
    }
    const liquidStting = {
        height: 200,
        percent: 0.25,
        outline: {
            border: 4,
            distance: 8,
        },
        wave: { length: 128 },
    }
    return (
        <GoodsSalesDivStyle>
            <div className="goods-scatter">
                <WJGoodsChart />
                <div className="scatte-right">
                    <Card title="流向图" style={{ height: "49%" }}>
                        <FundFlowGraph {...fundFlowGraphStting} />
                    </Card>
                    <Card title="圆盘图" style={{ height: "49%" }}>
                        <Gauge {...gaugeStting} />
                    </Card>
                </div>
            </div>
            <div className="goods-footer">
                <div className="footer-left">
                    <Card title="桑葚图" className="left-car">
                        <Sankey {...sankeyStting} />
                    </Card>
                    <Card title="子弹图" className="left-car">
                        <Bullet {...bulletStting} />
                    </Card>
                </div>
                <Card title="水滴图" className="footer-right">
                    <Liquid {...liquidStting} />
                </Card>
            </div>
        </GoodsSalesDivStyle>
    )
})
