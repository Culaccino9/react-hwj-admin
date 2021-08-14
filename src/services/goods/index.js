import axios from '../index'

/**
 * 获取商品列表
 * /goods/list
 * get
 * @param {Nmuber} currentPage 当前页码
 * @param {Nmuber} pageSize 每条页数
 */

export const list = params => axios.get("/goods/list", {params})

/**
 * 查询所有分类名称
 * /goods/categories
 * get
 */
export const categories = () => axios.get("/goods/categories")

/**
 * 删除商品
 * /goods/del
 * get
 */
export const del = params => axios.get("goods/del",{params})

/**
 * 修改商品
 * /goods/edit
 * post
 * @param {String} name 商品名称
 * @param {String} category 商品分类
 * @param {String} price 商品价格
 * @param {String} imgUrl 商品图片地址
 * @param {String} goodsDesc 商品描述
 * @param {Nmuber} id 商品ID
 */
export const edit = params => axios.post("/goods/edit",params)

/**
 * 获取分类
 * /goods/catelist
 * get
 * @param {Nmuber} currentPage 当前
 * @param {Nmuber} pageSize 每页条数
 */
export const catelist = params=> axios.get("/goods/catelist",{params})

/**
 * 修改分类
 * /goods/editcate
 * post
 * @param {Number} id ID
 * @param {String} cateName 分类名称
 * @param {Boolean} state 分类状态
 */
export const editcate = params => axios.post("/goods/editcate",params)

/**
 * 删除分类
 * /goods/delcate
 * get
 * @param {Number} id ID
 */
export const delcate = params => axios.get("/goods/delcate",{params})

/**
 * 添加商品分类
 * /goods/addcate
 * post
 * @param {String} cateName 分类名称
 * @param {Boolean} state 是否启用
 */
export const addcate = params => axios.post("/goods/addcate",params)

/**
 * 添加商品
 * /goods/add
 * post
 * @param {String} name	商品名称
 * @param {String} category 分类
 * @param {String} price 价格
 * @param {String} imgUrl 商品图片名字
 * @param {String} goodsDesc 商品描述
 */

export const add = params => axios.post("/goods/add",params)