import React from 'react';
import { Redirect } from 'react-router-dom';
// import { Redirect } from "react-router-dom";

const WJLogin = React.lazy(_ => import('@/page/Login'))
const WJLayout = React.lazy(_ => import('@/page/Layout'))
const WJHome = React.lazy(_ => import('@/page/Home'))
const WJOrder = React.lazy(_ => import('@/page/Order'))
const WJGoods = React.lazy(_ => import('@/page/Goods'))
const WJGoodsList = React.lazy(_ => import('@/page/Goods/GoodsList'))
const WJGoodsAdd = React.lazy(_ => import('@/page/Goods/GoodsAdd'))
const WJGoodsType = React.lazy(_ => import('@/page/Goods/GoodsType'))
const WJShops = React.lazy(_ => import('@/page/Shops'))
const WJAccount = React.lazy(_ => import('@/page/Account'))
const WJAccountList = React.lazy(_ => import('@/page/Account/AccountList'))
const WJAccountAdd = React.lazy(_ => import('@/page/Account/AccountAdd'))
const WJAccountEdit = React.lazy(_ => import('@/page/Account/AccountEdit'))
const WJSales = React.lazy(_ => import('@/page/Sales'))
const WJGoodsSales = React.lazy(_ => import('@/page/Sales/GoodsSales'))
const WJOrderSales = React.lazy(_ => import('@/page/Sales/OrderSales'))
const WJUser = React.lazy(_ => import('@/page/User'))
const WJUserInf = React.lazy(_ => import('@/page/User/UserInf'))
const WJUserEdit = React.lazy(_ => import('@/page/User/UserEdit'))
const WJ404 = React.lazy(_ => import('@/page/404'))


const router = [
    {path:'/login',component:WJLogin},
    {path:'/', component:WJLayout,routes:[
        {path:'/',exact: true,render:() => <Redirect to="/home" />,role:["super","normal"]},
        {path:'/home',component:WJHome,role:["super","normal"]},
        {path:'/order',component:WJOrder,role:["super","normal"]},
        {path:'/goods',component:WJGoods,role:["super","normal"],routes:[
            {path:'/goods', exact: true, render: () => <Redirect to="/goods/list" />},
            {path:'/goods/list',component:WJGoodsList},
            {path:'/goods/add',component:WJGoodsAdd},
            {path:'/goods/type',component:WJGoodsType},
            {path:'*',  render: () => <Redirect to='/404'/>}
        ]},
        {path:'/shops',component:WJShops,role:["super"]},
        {path:'/account',component:WJAccount,role:["super"],routes:[
            {path:'/account',exact:true,render: () => <Redirect to='/account/list' />},
            {path:'/account/list',component:WJAccountList},
            {path:'/account/add',component:WJAccountAdd},
            {path:'/account/edit',component:WJAccountEdit},
            {path:'*',  render: () => <Redirect to='/404'/>}
        ]},
        {path:'/sales',component:WJSales,role:["super"],routes:[
            {path:'/sales', exact : true , render : () => <Redirect to='/sales/goods' />},
            {path:'/sales/goods',component:WJGoodsSales},
            {path:'/sales/order',component:WJOrderSales},
            {path:'*',  render: () => <Redirect to='/404'/>}
        ]},
        {path:'/user',component:WJUser,role:["super","normal"],routes:[
            {path:'/user' , exact : true , render : () => <Redirect to='/user/inf' />},
            {path:'/user/inf',component:WJUserInf},
            {path:'/user/edit',component:WJUserEdit},
            {path:'*',  render: () => <Redirect to='/404'/>}
        ]},
        {path:'/404',component:WJ404,role:["super","normal"]},
        {path:'*',  render: () => <Redirect to='/404'/>,role:["super","normal"]}
    ]},
]

export default router