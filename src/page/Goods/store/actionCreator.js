import * as actionType from './constants'

import moment from 'moment'
import {
    list,
    categories,
    del,
    edit,
    catelist,
    addcate,
    delcate,
    editcate
} from '@/services/goods'
import { message } from 'antd'

const updataGoodsListAction = goodsList => ({
    type: actionType.UPDATA_GOODSLIST,
    goodsList
})
export const getGoodsListAction = () => {
    return (dispatch, getState) => {
        const params = {
            currentPage: getState().goods.currentPage,
            pageSize: getState().goods.pageSize,
        }
        list(params).then(res => {
            res.data.data.forEach(item => {
                item.price = item.price.toFixed(2)
                item.ctime = moment(item.ctime).format("YYYY-MM-DD HH:mm:ss")
            })
            dispatch(updataGoodsListAction(res.data))
        })
    }
}

export const updataPageSizeAction = pageSize => ({
    type: actionType.UPDATA_PAGE_SIZE,
    pageSize
})

export const updataCurrentPage = currentPage => ({
    type: actionType.UPDATA_CURRENT_PAGE,
    currentPage
})

const updataGoodsCategoriesAction = goodsCategories => ({
    type: actionType.UPDATA_GOODS_CAREGORIES,
    goodsCategories,
})
export const getGoodsCategoriesAction = () => {
    return dispatch => {
        categories().then(res => {
            dispatch(updataGoodsCategoriesAction(res.data.categories))
        })
    }
}

export const delGoodsAction = params => {
    return dispatch => {
        del(params).then(res => {
            // console.log(res.data);
            if (res.data.code === 0) {
                dispatch(getGoodsListAction())
                message.success(res.data.msg)
            }
        })
    }
}

export const editGoodsAction = params => {
    return dispatch => {
        edit(params).then(res => {
            if (res.data.code === 0) {
                dispatch(getGoodsListAction())
                message.success(res.data.msg)
            }
        })
    }
}


const updataCatelistAction = catelist => ({
    type: actionType.UPDATA_CATELIST,
    catelist
})
export const getCatelistAction = () => {
    return (dispatch, getState) => {
        const params = {
            currentPage: getState().goods.catelistCurrentPage,
            pageSize: getState().goods.catelistPageSize
        }
        catelist(params).then(res => {
            // console.log(res.data);
            dispatch(updataCatelistAction(res.data))
        })
    }
}

export const updataCatelistPageSizeAction = catelistPageSize => ({
    type: actionType.UPDATA_CATELIST_PAGESIZE,
    catelistPageSize
})

export const updataCatelistCurrentPageAction = catelistCurrentPage => ({
    type: actionType.UPDATA_CATELIST_CURRENTPAGE,
    catelistCurrentPage
})

// const updataCate = (params, fn) => {
//     return dispatch => {
//         fn(params).then(res => {
//             if (res.data.code === 0) {
//                 dispatch(getCatelistAction())
//                 dispatch(getGoodsCategoriesAction())
//                 message.success(res.data.msg)
//             }
//             res.data.code !== 0 && message.error(res.data.code)
//         })
//     }
// }
export const addCateListAction = (params) => {
    return dispatch => {
        addcate(params).then(res => {
            if (res.data.code === 0) {
                dispatch(getCatelistAction())
                dispatch(getGoodsCategoriesAction())
                message.success(res.data.msg)
            }
            res.data.code !== 0 && message.error(res.data.code)
        })
    }
}

export const delCateAction = params => {
    return dispatch => {
        delcate(params).then(res => {
            if (res.data.code === 0) {
                dispatch(getCatelistAction())
                dispatch(getGoodsCategoriesAction())
                message.success(res.data.msg)
            }
            res.data.code !== 0 && message.error(res.data.code)
        })
    }
}

export const editCateAction = params => {
    return dispatch => {
        editcate(params).then(res => {
            if (res.data.code === 0) {
                dispatch(getCatelistAction())
                dispatch(getGoodsCategoriesAction())
                message.success(res.data.msg)
            }
            res.data.code !== 0 && message.error(res.data.code)
        })
    }
}