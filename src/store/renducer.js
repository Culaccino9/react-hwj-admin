import { combineReducers } from "redux";

import {reducer as home } from '@/page/Home/store'
import {reducer as order} from "@/page/Order/store"
import {reducer as user} from '@/page/User/store'
import {reducer as account} from '@/page/Account/store'
import {reducer as sales} from '@/page/Sales/store'
import {reducer as shops} from '@/page/Shops/store'
import {reducer as goods} from '@/page/Goods/store'

const reducer = combineReducers({
    home,
    order,
    user,
    account,
    sales,
    shops,
    goods
})

export default reducer