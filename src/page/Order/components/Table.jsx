import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import {
    getOrderListAction,
    updataPageSizeAction,
    updataCurrentPageAction
} from '../store'

import { Table, Button, Tag } from 'antd'
import WJOrderTableModal from './TableModal'

export default memo(function WJOrderTable() {
    const dispatch = useDispatch()
    const { orderList } = useSelector(state => ({
        orderList: state.order.orderList
    }), shallowEqual)

    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [modalData,setModalData] = useState([])

    useEffect(() => {
        dispatch(getOrderListAction())
    }, [dispatch])

    const columns = [
        {
            title: '订单号',
            dataIndex: 'orderNo',
            align: "center",
            sorter: (a, b) => a.orderNo - b.orderNo,
        },
        {
            title: '下单时间',
            dataIndex: 'orderTime',
            align: "center",
            sorter: (a, b) => a.orderNo - b.orderNo,
        },
        {
            title: '手机号',
            dataIndex: 'phone',
            align: "center",
        },
        {
            title: '收货人',
            dataIndex: 'consignee',
            align: "center",
        },
        {
            title: '配送地址',
            dataIndex: 'deliverAddress',
            align: "center",
        },
        {
            title: '送达时间',
            dataIndex: 'deliveryTime',
            align: "center",
            sorter: (a, b) => a.orderNo - b.orderNo,
        },
        {
            title: '备注',
            dataIndex: 'remarks',
            align: "center",
        },
        {
            title: '订单状态',
            dataIndex: 'orderState',
            align: "center",
            sorter: (a, b) => {
                let astr = a.orderState.slice(1)
                let bstr = b.orderState.slice(1)
                return astr.localeCompare(bstr)
            },
            render: orderState => (
                <Tag color={orderState === "派送中" ? 'geekblue' : orderState === "已完成" ? 'green' : 'volcano'}>
                    {orderState}
                </Tag>
            ),
        },
        {
            title: '操作',
            key: 'id',
            // dataIndex: 'edti',
            align: "center",
            render: (text, record) => <Button onClick={() => doEdit(text, record)} type="link">编辑</Button>
        },

    ];
    const changePage = (page, pageSize) => {
        dispatch(updataCurrentPageAction(page))
        dispatch(updataPageSizeAction(pageSize))
        dispatch(getOrderListAction())
    }
    const pagesetting = {
        total: orderList && orderList.total,
        showSizeChanger: true,
        showTotal: total => `总共 ${total} 条数据`,
        onChange: changePage,
    }
    const doEdit = (text, record) => {
        setVisible(true)
        setModalData(record)
        // console.log(record);
    }
    const handleCancel = () => {
        setVisible(false);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    return (
        <>
            <Table
                rowKey={record => record.id}
                style={{ padding: "20px", background: "#fff" }}
                columns={columns}
                dataSource={orderList && orderList.data}
                pagination={pagesetting}
            />
            <WJOrderTableModal
                visible={visible}
                confirmLoading={confirmLoading}
                handleCancel={handleCancel}
                handleOk={handleOk}
                modalData={modalData}
            />
        </>
    )
})
