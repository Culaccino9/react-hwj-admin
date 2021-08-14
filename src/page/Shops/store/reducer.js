import * as actionType from './constants'

const defaultState = {
    shopsData :{
        pics:[]
    },
}

const reducer = (state=defaultState,action)=>{
    switch(action.type){
        case actionType.UPDATA_SHOPSDATA:
            return {...state,shopsData:action.shopsData}
        default:
            return state
    }
}

export default reducer