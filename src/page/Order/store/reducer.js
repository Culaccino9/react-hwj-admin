import * as actionType from './constanst'


const defaultStore = {
    orderList: null,
    currentPage: 1,
    pageSize: 10

}

const reducer = (state = defaultStore, action) => {
    switch (action.type) {
        case actionType.UPDATA_ORDER_LIST:
            return { ...state, orderList: action.orderList }
        case actionType.UPDATA_CURRENTPAGE:
            return { ...state, currentPage: action.currentPage }
        case actionType.UPDATA_PAGESIZE:
            return { ...state, pageSize: action.pageSize }
        default:
            return state
    }
}



export default reducer