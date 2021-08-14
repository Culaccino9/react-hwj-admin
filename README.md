# 项目简介

一个简单的react+express后台管理系统demo

前端：react+thunk+antd+antV

后端：express

项目灵感来自`Ant Design`，在空余，花了一些时间基于 `react` 和 `Ant Design` 的开发的一款简单漂亮的后台系统`demo`。

后端因时间比较匆促+个人技术有限，很多假象未实现，也影响了一些前端功能，还是挺小遗憾，后期可能会继续完善。

以及项目中肯定有做的不够好的地方，欢迎各位同好提 `pr` 或 `issue`，在这里向大佬致敬！



# 项目展示

**首页**

![react-admin](D:\openSource\react-admin\react-hwj-admin\showPic\react-admin.png)



**商品**

![react-admin-goods](D:\openSource\react-admin\react-hwj-admin\showPic\react-admin-goods.png)



**个人信息**

![react-admin-user](D:\openSource\react-admin\react-hwj-admin\showPic\react-admin-user.png)





# 安装

```
# 克隆项目
git clone https://github.com/Culaccino9/react-hwj-admin.git

# 进入项目目录

  - 前端：
  - cd react-hwj-admin
  - 后端：
  - cd sell-serve

# 安装依赖
npm yarn

# 切换淘宝源，解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
  - 前端：
  - yarn dev
  - 后端：
  - yarn start
```

后端需要搭服务器，详细在 `sell-serve` 下的 `1.服务器完整启动指南`文件。以下简述：

- yarnt安装相关依赖

- 启动服务器

  - yarnt start（默认端口3000）

- 启动数据库（不是默认密码需在）routes-db-conn.js修改密码

  - ```js
    const conn = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',		//修改这里
      database: 'sell'		//数据库名字修改这里，需要与数据库名字对应
    });
    ```

  - 启动数据库教程见`1.服务器完整启动指南`

  - 记得运行`2.建表sql`文件



# 功能

```
- 登录 / 注销

- 权限验证
  - 分为super和normol
  - 页面权限
  - 路由权限

- Account
  - 账号CURD

- 功能页面
  - 各种表格CURD

- Home、Sales
  - AntV数据可视化展示

- Layout
  - 全局架子文件

- 404
  - 错误页面
```



# 目录结构

```
├─ public                     # 静态资源
│   ├─ favicon.ico            # favicon图标
│   └─ index.html             # html模板
├─ sell-serve                 # 后台文件
├─ src                        # 项目源代码
│   ├─ ervices                # 所有请求
│   ├─ assets                 # 图片 字体等静态资源
│   ├─ components             # 全局公用组件
│   ├─ common                 # 公共文件
│   ├─ router                 # 路由文件
│   ├─ store                  # 全局 store管理
│   ├─ utils                  # 全局公用方法
│   ├─ page                   # page 所有页面
│   ├─ App.js                 # 入口页面
│   └─index.js                # 入口文件
├── carco.config.js           # carco配置
└── package.json              # package.json
```



# 关于我

大家好，我是`1874`。

**简单介绍自己：**

- 艾格伦扛把子，咳咳。。不是，守望p。。。。

**言归正传：**

- 本人，一个95后前端小码农
- 乐于分享，崇尚开源精神。
- 喜欢折腾和搞机，喜欢琢磨一些新鲜的技术。`阳光宅男警告!`
- 下面是我的Vx，欢迎志同道合的小伙伴一起交流技术，学习
- 一起**树(tree)新(new)风(bee)！！！**



**iamGEZELLIGHEID**

