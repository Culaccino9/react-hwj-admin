import axios from '../index'

/**
 * 获取店铺详情
 * /shop/info
 * get
 * 无参数
 */
export const info = () => axios.get("/shop/info")

/**
 * 修改店铺内容
 * /shop/edit
 * post
 */
export const edit = pramas => axios.post("/shop/edit",pramas)