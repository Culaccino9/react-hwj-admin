import * as actionType from './constants'

const defaultState = {
    accountList:{data:[],total:null},
    currentPage:1,
    pageSize:10
}

const reducer = (state=defaultState,action) => {
    switch (action.type) {
        case actionType.UPDATA_ACCOUNT_LIST:
            return {...state,accountList:action.accountList}
        default:
            return state
    }
}

export default reducer