import React, { useContext, useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';
import {editGoodsAction} from '../../../store'

import {
    Modal,
    Form,
    Input,
    InputNumber,
    Select,
    Upload
} from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import { CountContext } from '../../index'
export default function WJGoodsTableModal(props) {
    const categoryList = useContext(CountContext)
    const { modalVisible, setModalVisibel, goodsEditData } = props
    const { TextArea } = Input
    const { Option } = Select

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    useEffect(() => {
        setImageUrl(goodsEditData.imgUrl)
    }, [goodsEditData.imgUrl])

    const modalStting = {
        okButtonProps: { htmlType: 'submit', form: 'editGoods' },
        onCancel: () => setModalVisibel(false),
        destroyOnClose: true,
        visible: modalVisible,
        title: "修改商品信息"
    }
    const formSetting = {
        name: "editGoods",
        initialValues: goodsEditData,
        onFinish:value =>{
            value.id = goodsEditData.id
            value.imgUrl = imageUrl.split("/")[imageUrl.split("/").length-1]
            // console.log(value);
            setModalVisibel(false)
            dispatch(editGoodsAction(value))
        }
    }


    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            // console.log(info.file.response.imgUrl);
            setImageUrl(`http://127.0.0.1:5000/upload/imgs/goods_img/${info.file.response.imgUrl}`)
            setLoading(false)
        }
    };
    return (
        <Modal {...modalStting}>
            <Form {...formSetting}>
                <Form.Item name="name" label="商品名称">
                    <Input />
                </Form.Item>
                <Form.Item label="商品图片">
                    <Upload
                        listType="picture-card"
                        showUploadList={false}
                        action="http://127.0.0.1:5000/goods/goods_img_upload"
                        onChange={handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: 100 }} /> : uploadButton}
                    </Upload>
                </Form.Item>
                <Form.Item name="goodsDesc" label="商品描述">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item name="price" label="商品价格">
                    <InputNumber min={0} max={999} step="5.00" />
                </Form.Item>
                <Form.Item name="category" label="商品分类">
                    <Select style={{ width: 200 }}>
                        {
                            categoryList.map(category => (
                                <Option value={category.cateName} key={category.cateName}>{category.cateName}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
}
