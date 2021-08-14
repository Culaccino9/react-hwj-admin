import React, { memo, useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {
    getGoodsCategoriesAction
} from '../store'
import { add } from '@/services/goods'

import {
    Card,
    Result,
    Button,
    Form,
    Input,
    Select,
    InputNumber,
    Upload,
    message
} from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { GoodsAddDivStyle } from './style'
export default memo(function WJGoodsAdd() {
    const { Option } = Select
    const { TextArea } = Input;

    const [added, setAdded] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const { goodsCategories } = useSelector(state => ({
        goodsCategories: state.goods.goodsCategories
    }))
    const [form] = Form.useForm()
    useEffect(() => {
        dispatch(getGoodsCategoriesAction())
    }, [dispatch])

    const toOherPage = page => {
        switch (page) {
            case "goods":
                return history.push("/goods/list")
            case "cate":
                return history.push("/goods/type")
            default:
                return
        }
    }
    const createResult = () => (
        <Result
            title="您可以选择在此页添加商品"
            subTitle="您也可以选择前往商品分类页面添加分类，或者查看现有商品列表。"
            extra={
                <>
                    <Button onClick={() => toOherPage("goods")} type="primary">
                        商品列表
                    </Button>
                    <Button onClick={() => toOherPage("cate")}>
                        分类列表
                    </Button>
                </>
            }
        />
    )
    const createSuccessResult = () => (
        <Result
            status="success"
            title="添加商品成功！"
            subTitle="恭喜你，添加商品成功，您可以去往商品列表查看，5秒后将返回初始状态。"
        />
    )
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
            setImageUrl(`http://127.0.0.1:5000/upload/imgs/goods_img/${info.file.response.imgUrl}`)
            setLoading(false)
        }
    };
    const iptRules = { rules: [{ required: true, message: 'Please input your password!' }] }
    const formSetting = {
        name: "goodsAdd",
        form,
        initialValues: {},
        onFinish: value => {
            value.imgUrl = imageUrl.split("/")[imageUrl.split("/").length - 1]
            add(value).then(res => {
                if (res.data.code === 0) {
                    setAdded(true)
                    message.success(res.data.msg)
                    setImageUrl('')
                    form.resetFields()
                    setTimeout(() => {
                        setAdded(false)
                    }, 5000)
                }
                res.data.code !== 0 && message.error(res.data.msg)
            })
        }
    }
    return (
        <GoodsAddDivStyle>
            <Card className="goodsadd-left" title="添加商品">
                <Form {...formSetting}>
                    <Form.Item name="name" label="商品名称" {...iptRules}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="category" label="商品分类" {...iptRules}>
                        <Select style={{ width: 200 }} >
                            {
                                goodsCategories && goodsCategories.map(option => (
                                    <Option value={option.cateName} key={option.cateName}>{option.cateName}</Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item name="price" label="商品价格" {...iptRules}>
                        <InputNumber defaultValue={0.00} min={0} max={10} step="5.00" />
                    </Form.Item>
                    <Form.Item name="imgUrl" label="商品图片" {...iptRules}>
                        <Upload
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="http://127.0.0.1:5000/goods/goods_img_upload"
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item name="goodsDesc" label="商品描述" {...iptRules}>
                        <TextArea rows={4} />
                    </Form.Item>
                    <div className="goodsadd-btn">
                        <Button htmlType="submit" type="primary">提交</Button>
                    </div>
                </Form>
            </Card>
            <Card className="goodsadd-right" title="结果页展示">
                {added ? createSuccessResult() : createResult()}
            </Card>
        </GoodsAddDivStyle>
    )
})
