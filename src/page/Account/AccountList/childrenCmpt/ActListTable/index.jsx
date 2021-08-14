import React, { memo, useCallback, useState, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
    getAccountListAction,
    updataPageSizeAction,
    updataCurrentPageAction,
    getDelAccountAction
} from '../../../store'

import {
    Table,
    Avatar,
    Button,
    Popconfirm,
    message,
} from 'antd'
import WJAccountModal from './WJAccountModal'
export default memo(function WJActListTable(props) {
    //props、store
    const { checkedList, total } = props
    const dispatch = useDispatch()
    const { accountList } = useSelector(state => ({
        accountList: state.account.accountList
    }), shallowEqual)
    const { data } = accountList

    //hooks
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() => {
        dispatch(getAccountListAction())
    }, [dispatch])
    const [editAccount,setEditAccount] = useState(null)
    //other data
    const delethConfirm = (record) => {
        const {id} = record
        dispatch(getDelAccountAction({id}))
    }
    const delethCancel = (e) => {
        message.error('您取消了操作');
    }
    const showAccountModal = useCallback((record) => {
        setEditAccount(record)
        setIsModalVisible(true)
    }, [])
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const filterColumns = [
        {
            show: checkedList.indexOf("用户头像") !== -1,
            title: '用户头像',
            dataIndex: 'imgUrl',
            align: "center",
            render: text => <Avatar src={`http://localhost:5000/upload/imgs/acc_img/${text}`} />,
        },
        {
            show: checkedList.indexOf("账号") !== -1,
            title: '账号',
            dataIndex: 'account',
            align: "center",
        },
        {
            show: checkedList.indexOf("用户组") !== -1,
            title: '用户组',
            dataIndex: 'userGroup',
            align: "center",
        },
        {
            show: checkedList.indexOf("创建时间") !== -1,
            title: '创建时间',
            dataIndex: 'ctime',
            align: "center",
        },
        {
            show: checkedList.indexOf("操作") !== -1,
            title: '操作',
            dataIndex: 'id',
            align: "center",
            render: (text, record) => {
                return (
                    <>
                        <Button type="link" onClick={()=>showAccountModal(record)}>编辑</Button>
                        <Popconfirm
                            title="你确定删除这个账号吗，一旦删除不可更改"
                            onConfirm={()=>delethConfirm(record)}
                            onCancel={delethCancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="link" danger>删除</Button>
                        </Popconfirm>,

                    </>
                )
            }
        },
    ]
    const columns = filterColumns.filter(item => {
        return item.show
    })
    const pagination = {
        size: "small",
        total,
        showTotal: (total) => `总共 ${total} 条数据`,
        showSizeChanger: "showSizeChanger",
        showQuickJumper: "showQuickJumper",
        onChange: (page, pageSize) => {
            dispatch(updataPageSizeAction(pageSize))
            dispatch(updataCurrentPageAction(page))
            dispatch(getAccountListAction())
        },
    }
    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                rowKey={record => record.id}
                style={{ marginTop: "20px" }}
                pagination={pagination}
            />
            <WJAccountModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                initialValues={editAccount}
            />
        </>
    )
})