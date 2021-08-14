import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import {
    getCatelistAction,
    updataCatelistPageSizeAction,
    updataCatelistCurrentPageAction,
    delCateAction,
    editCateAction
} from '../../../store'

import {
    Button,
    Form,
    Switch,
    Popconfirm,
    Typography,
    Table,
    Input,
    message
} from 'antd'
export default function WJGoodsTypeLeft({ catelist }) {
    const { total, data } = catelist
    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState('');
    const dispatch = useDispatch()

    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        const inputNode = inputType === 'switch' ? <Switch defaultChecked={record.state} /> : <Input />;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        rules={[
                            {
                                required: true,
                                message: `请输入 ${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };
    const isEditing = (record) => record.id === editingKey;
    const edit = (record) => {
        form.setFieldsValue({
            id: '',
            cateName: '',
            state: '',
            ...record,
        });
        setEditingKey(record.id);
    };
    const cancel = (page, pageSize) => {
        dispatch(updataCatelistPageSizeAction(pageSize))
        dispatch(updataCatelistCurrentPageAction(page))
        dispatch(getCatelistAction())
        setEditingKey('');
    };
    const save = async (id) => {
        try {
            const row = await form.validateFields();
            row.state = Boolean(row.state)
            row.id = id
            dispatch(editCateAction(row))
            setEditingKey('');
            // console.log(row);
        } catch (errInfo) {
            message.error('Validate Failed:', errInfo);
            setEditingKey('');
        }
    };
    const doDel = ({id}) => {
        dispatch(delCateAction({id}))
    }
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            align: "center",
            width: '15%',
        },
        {
            title: '分类',
            dataIndex: 'cateName',
            align: "center",
            width: '40%',
            editable: true,
        },
        {
            title: '是否启用',
            dataIndex: 'state',
            align: "center",
            width: '25%',
            editable: true,
            render: text => {
                return (
                    <Switch defaultChecked={text} disabled />
                )
            }
        },
        {
            title: '操作',
            dataIndex: 'operation',
            align: "center",
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Button
                            type="link"
                            onClick={() => save(record.id)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            保存
                        </Button>
                        <Popconfirm title="是否退出？" onConfirm={cancel}>
                            <Button type="link">退出</Button>
                        </Popconfirm>
                    </span>
                ) : (
                    <>
                        <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                            修改
                        </Typography.Link>
                        <Popconfirm title="是否永久删除此分类" onConfirm={() => doDel(record)}>
                            <Button type="link" danger>删除</Button>
                        </Popconfirm>
                    </>
                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'state' ? 'switch' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <div style={{ width: "70%", backgroundColor: "#fff" }}>
            <Form form={form} component={false} size="middle">
                <Table
                    rowKey="id"
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                        total,
                        showSizeChanger: true,
                        showQuickJumper: true.data,
                        showTotal: total => `总共 ${total} 个分类`,
                        style: { marginRight: "20px" }
                    }}
                />
            </Form>
        </div>
    )
}
