import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import {
    updataPageSizeAction,
    updataCurrentPage,
    getGoodsListAction,
    delGoodsAction
} from '../../../store'

import moment from 'moment';
import {
    Table,
    Descriptions,
    Button,
    Image,
    Tooltip,
    Avatar,
    Comment,
    Popconfirm,
} from 'antd';
import WJGoodsTableModal from './WJGoodsTableModal';
export default function WJGoodsListTable({ goodsList, total }) {
    const dispatch = useDispatch()
    const [modalVisible,setModalVisibel] = useState(false)
    const [goodsEditData,setGoodsEditData] = useState([])

    const doDel = id => {
        dispatch(delGoodsAction({ id }))
    }
    const doEdit = data => {
        setModalVisibel(true)
        setGoodsEditData(data)
    }
    const columns = [
        { title: '商品名称', dataIndex: 'name', width: 300, align: "center" },
        { title: '所属分类', dataIndex: 'category', width: 180, align: "center" },
        { title: '商品价格', dataIndex: 'price', width: 80, align: "center" },
        {
            title: '商品图片',
            dataIndex: 'imgUrl',
            align: "center",
            width: 100,
            render: text => <Image width={80} src={text} />
        },
        { title: '商品描述', dataIndex: 'goodsDesc', width: 380, align: "center" },
        {
            title: '操作',
            width: 180,
            dataIndex: 'id',
            align: "center",
            render: (text, record) => (
                <>
                    <Button type="link" onClick={e => doEdit(record)}>编辑</Button>
                    <Popconfirm
                        title="你确定要删除此商品吗，一旦删除不可更改！"
                        onConfirm={() => doDel(text)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="link" danger>删除</Button>
                    </Popconfirm>,
                </>
            )
        },
    ];
    const expandedRowRenderTableArr = [
        { title: "商品ID", goodsList: "id", key: 1 },
        { title: "商品名称", goodsList: "name", key: 2 },
        { title: "所属分类", goodsList: "category", key: 3 },
        { title: "商品价格", goodsList: "price", key: 4 },
        { title: "商品描述", goodsList: "goodsDesc", key: 5 },
        { title: "商品评价", goodsList: "rating", key: 6 },
        { title: "商品销量", goodsList: "sellCount", key: 7 },
        { title: "创建时间", goodsList: "ctime", key: 8 },
        { title: "评价", goodsList: "ratings", key: 9 },
    ]

    const expandedRowRenderTable = data => {
        const createDescriptions = des => {
            if (des.goodsList === "ratings") {
                return (
                    <Descriptions.Item
                        label={des.title}
                        key={des.key}
                        bordered={true}
                    >
                        {
                            JSON.parse(data[des.goodsList]).map(evaluate => (
                                <Comment
                                    key={evaluate.username}
                                    author={evaluate.username}
                                    avatar={
                                        <Avatar
                                            src={evaluate.avatar}
                                            alt={evaluate.username}
                                        />
                                    }
                                    content={
                                        <p>
                                            很喜欢的菜品，期待买家更多的新品，已经是老顾客了。
                                        </p>
                                    }
                                    datetime={
                                        <Tooltip title={moment(evaluate.rateTime).format('YYYY-MM-DD HH:mm:ss')}>
                                            <span>{moment(evaluate.rateTime).fromNow()}</span>
                                        </Tooltip>
                                    }
                                />
                            ))
                        }
                    </Descriptions.Item>
                )
            } else {
                return (<Descriptions.Item
                    label={des.title}
                    key={des.key}

                    bordered={true}
                >
                    {data[des.goodsList]}
                </Descriptions.Item>)
            }
        }
        return (
            <Descriptions
                title="商品详细信息"
                bordered
                size="small"
                column={2}
            >
                {expandedRowRenderTableArr.map(item => createDescriptions(item))}
            </Descriptions>
        )
    }
    const paginationStting = {
        total,
        showTotal: total => `总共 ${total} 条数据`,
        showSizeChanger: true,
        showQuickJumper: true,
        onChange: (page, pageSize) => {
            dispatch(updataPageSizeAction(pageSize))
            dispatch(updataCurrentPage(page))
            dispatch(getGoodsListAction())
        }
    }
    return (
        <div style={{ backgroundColor: "#fff", padding: "30px 40px" }}>
            <Table
                rowKey="id"
                columns={columns}
                size="small"
                dataSource={goodsList}
                expandable={{
                    expandedRowRender: record => expandedRowRenderTable(record),
                }}
                pagination={{ ...paginationStting }}
            />
            <WJGoodsTableModal
                modalVisible={modalVisible}
                setModalVisibel={setModalVisibel}
                goodsEditData={goodsEditData}
            />
        </div>
    )
}
