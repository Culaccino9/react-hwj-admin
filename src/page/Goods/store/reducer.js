import * as actionType from './constants'


const defaultState = {
    goodsList: null,
    currentPage: 1,
    pageSize: 10,
    goodsCategories: [],
    catelistPageSize: 10,
    catelistCurrentPage: 1,
    catelist: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.UPDATA_GOODSLIST:
            return { ...state, goodsList: action.goodsList }
        case actionType.UPDATA_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case actionType.UPDATA_PAGE_SIZE:
            return { ...state, pageSize: action.pageSize }
        case actionType.UPDATA_GOODS_CAREGORIES:
            return { ...state, goodsCategories: action.goodsCategories }
        case actionType.UPDATA_CATELIST:
            return { ...state, catelist: action.catelist }
        case actionType.UPDATA_CATELIST_PAGESIZE:
            return { ...state, catelistPageSize: action.catelistPageSize }
        case actionType.UPDATA_CATELIST_CURRENTPAGE:
            return { ...state, catelistCurrentPage: action.catelistCurrentPage }
        default:
            return state
    }
}

export default reducer