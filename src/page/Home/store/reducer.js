import * as actionType from './constants'

const defalutState = {
    homeData:{
        totalOrder:'',
        totalAmount:'',
        todayOrder:'',
        totayAmount:'',
        orderData:[],
        amountData:[]
    },
}

const reducer = (state=defalutState,action) => {
    switch(action.type){
        case actionType.UPDATA_HOMEDATA:
            return {...state,homeData:action.homeData}
        default:
            return state
    }
}

export default reducer