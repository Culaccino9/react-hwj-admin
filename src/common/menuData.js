// const menuData = [
//     {path:"/home",title:"后台首页"},
//     {path:"/order",title:"订单管理"},
//     {path:"/goods",title:"商品管理",children:[
//         {path:"/goods/list",title:"商品列表"},
//         {path:"/goods/add",title:"商品添加"},
//         {path:"/goods/type",title:"商品分类"},
//     ]},
//     {path:"/shops",title:"店铺管理"},
//     {path:"/account",title:"账号管理",children:[
//         {path:"/account/list",title:"账号列表"},
//         {path:"/account/add",title:"添加账号"},
//         {path:"/account/edit",title:"修改密码"},
//     ]},
//     {path:"/sales",title:"销售统计",children:[
//         {path:"/sales/goods",title:"商品统计"},
//         {path:"/sales/order",title:"订单统计"},
//     ]},
//     {path:"/user",title:"个人中心",children:[
//         {path:"/user/inf",title:"个人信息"},
//         {path:"/user/edit",title:"修改信息"},
//     ]}
// ]

// export default menuData

const menuData = type => {
    let menu = []
    if(type ==="super"){
        menu=[
            {path:"/home",title:"后台首页"},
            {path:"/order",title:"订单管理"},
            {path:"/goods",title:"商品管理",children:[
                {path:"/goods/list",title:"商品列表"},
                {path:"/goods/add",title:"商品添加"},
                {path:"/goods/type",title:"商品分类"},
            ]},
            {path:"/shops",title:"店铺管理"},
            {path:"/account",title:"账号管理",children:[
                {path:"/account/list",title:"账号列表"},
                {path:"/account/add",title:"添加账号"},
                {path:"/account/edit",title:"修改密码"},
            ]},
            {path:"/sales",title:"销售统计",children:[
                {path:"/sales/goods",title:"商品统计"},
                {path:"/sales/order",title:"订单统计"},
            ]},
            {path:"/user",title:"个人中心",children:[
                {path:"/user/inf",title:"个人信息"},
                {path:"/user/edit",title:"修改信息"},
            ]}
        ]
    }else if(type === "normal"){
        menu = [
            {path:"/home",title:"后台首页"},
            {path:"/order",title:"订单管理"},
            {path:"/goods",title:"商品管理",children:[
                {path:"/goods/list",title:"商品列表"},
                {path:"/goods/add",title:"商品添加"},
                {path:"/goods/type",title:"商品分类"},
            ]},
            {path:"/user",title:"个人中心",children:[
                {path:"/user/inf",title:"个人信息"},
                {path:"/user/edit",title:"修改信息"},
            ]}
        ]
    }
    return menu
}

export default menuData