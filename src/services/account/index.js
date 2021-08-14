import axios from '../index'

/**
 * 获取账号列表
 * /users/list
 * get
 * @param {Number} currentPage  每条页码
 * @param {Number} pageSize     每条条数
 */

export const list = params => axios.get("/users/list",{params})

/**
 * 添加账号
 * /users/add
 * post
 * @param {String} account  账号
 * @param {String} password  密码
 * @param {String} userGroup  用户
 */

export const add = params => axios.post("/users/add",params)

/**
 * 修改账号
 * /users/edit
 * post
 * @param {Number} id  要修改账号的id
 * @param {String} password  密码
 * @param {String} userGroup  用户
 */
export const edit = params => axios.post("/users/edit",params)

/**
 * 删除账号
 * /users/del
 * get
 * @param {Number} id  要修改账号的id
 */
export const del = params => axios.get("/users/del",{params})

/**
 * 检查旧密码是否正确
 * /users/checkoldpwd
 * get
 * @param {Number} id  要修改账号的id
 * @param {String} oldPwd  旧密码
 */
export const checkoldpwd = params => axios.get("/users/checkoldpwd",{params})

/**
 * 修改密码
 * /users/editpwd
 * post
 * @param {Number} id  要修改账号的id
 * @param {String} newPwd  新密码
 */
 export const editpwd = params => axios.post("/users/editpwd",params)