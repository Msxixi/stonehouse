# 石房子咖啡厅小程序demo

## 1. 项目简介

本项目是一个基于微信小程序原生框架开发的「石房子咖啡厅」演示系统，主要面向咖啡厅顾客端与店员端两个使用场景。

项目当前为前端原型 / 本地演示版本，未接入真实后端、数据库、微信支付或云开发服务。商品、订单、预约、用户状态等数据均保存在 `app.js` 的 `globalData.store` 中，刷新小程序或重新编译后会恢复为初始示例数据。

## 2. 功能概览

### 顾客端功能

- 咖啡厅首页展示
- 推荐产品、活动、空间图片展示
- 菜单浏览与分类筛选
- 菜品搜索
- 桌号选择
- 加入购物车
- 菜品下单
- 包房列表查看
- 包房详情查看
- 日历选择预约日期
- 预约时间段选择
- 预约押金状态提示
- 咖啡豆商城浏览
- 咖啡豆购物车
- 咖啡豆订单查看
- 用户登录 / 退出
<img width="579" height="1194" alt="99b2e9d0-1ce5-4170-bec1-b2e2202ad0c5" src="https://github.com/user-attachments/assets/4114fd95-5edc-48a2-9228-d8a6e99e4dad" />
<img width="570" height="1182" alt="5967bb24-a97d-4505-aff0-501ba5248fbd" src="https://github.com/user-attachments/assets/fe8cc44c-83c7-4734-9157-0b563c99ddce" />
<img width="573" height="1199" alt="63cbcb63-123c-4559-bf33-353303e7b14f" src="https://github.com/user-attachments/assets/da1bb7b6-1d66-4525-8680-10cd5bdf8484" />
<img width="567" height="1206" alt="4953ff15-ef7e-4331-ae0a-81f1380a0db0" src="https://github.com/user-attachments/assets/4805356e-e1b4-4e3e-a1c9-07a2808ed38b" />


### 店员端功能

- 店员登录
- 菜单商品管理
- 新增菜品
- 修改菜品价格、库存、分类
- 菜品上架 / 下架
- 查看堂食点单订单
- 查看销售金额统计
- 包房预约管理
- 新增预约记录
- 修改预约状态
- 删除已取消预约
- 咖啡豆商品管理
- 新增咖啡豆商品
- 修改咖啡豆价格、库存、描述
- 咖啡豆上架 / 下架
- 咖啡豆订单发货信息维护
<img width="570" height="1203" alt="38378882-cf39-42b3-8255-5b0340db2e50" src="https://github.com/user-attachments/assets/6348a840-d9db-403a-a02c-6766abd58e0c" />
<img width="564" height="1200" alt="c3bbfe67-ed06-4604-94ba-e2eb2d99c104" src="https://github.com/user-attachments/assets/aaf72940-cfdc-47e9-852d-cd0f6d6c70fa" />
<img width="567" height="1200" alt="9d502138-a3a5-4b6f-b9a4-b646c06f9cd0" src="https://github.com/user-attachments/assets/c9a07d63-e2af-4ba5-92f0-8f8e706b2582" />
<img width="564" height="1188" alt="16e1da9d-f2e8-4729-84db-9bb8ce49edf7" src="https://github.com/user-attachments/assets/aa67add3-9052-4995-ab6f-5093d06f31bb" />


## 3. 技术栈

- 微信小程序原生框架
- WXML
- WXSS
- JavaScript
- 自定义 TabBar
- 自定义日历组件
- 本地静态资源
- 本地内存数据管理

项目未使用 npm 依赖，因此不需要执行 `npm install`。

## 4. 项目目录结构

```text
stonehouse-main/
├── app.js                         # 小程序入口逻辑，包含全局数据与业务方法
├── app.json                       # 小程序页面、窗口、TabBar 配置
├── app.wxss                       # 全局样式
├── project.config.json            # 微信开发者工具项目配置
├── project.private.config.json    # 本地开发者工具私有配置
├── sitemap.json                   # 小程序索引配置
├── assets/                        # 图片、SVG、TabBar 图标等静态资源
├── components/                    # 自定义组件与 FirstUI 风格组件
│   ├── calendar/                  # 自定义日历组件
│   └── firstui/                   # notice-bar、upload、fab 等组件
├── custom-tab-bar/                # 自定义底部导航栏
├── pages/
│   ├── login/                     # 入口 / 登录页面
│   ├── customer/                  # 顾客端页面
│   │   ├── home/                  # 首页
│   │   ├── menu/                  # 点餐页
│   │   ├── booking/               # 包房预约列表
│   │   ├── room-detail/           # 包房详情与预约提交
│   │   ├── beans/                 # 咖啡豆商城
│   │   └── user/                  # 用户中心
│   └── staff/                     # 店员端页面
│       ├── menu-manage/           # 菜单管理
│       ├── booking-manage/        # 预约管理
│       └── beans-manage/          # 咖啡豆管理
└── utils/
    └── util.js                    # 通用工具函数
```

## 5. 运行环境要求

### 必需环境

- 微信开发者工具
- 微信小程序基础库建议使用 `3.15.2` 或更高版本

### 不需要的环境

当前项目不需要以下环境：

- Node.js
- npm
- pnpm
- yarn
- 后端服务
- 数据库
- 微信云开发环境

## 6. 如何启动项目

### 第一步：解压项目

将项目压缩包解压，例如：

```text
stonehouse-main.zip
```

解压后应得到如下目录：

```text
stonehouse-main/
```

请确认 `stonehouse-main` 目录下直接包含以下文件：

```text
app.js
app.json
app.wxss
project.config.json
pages/
components/
assets/
```

### 第二步：打开微信开发者工具

打开微信开发者工具，选择：

```text
小程序 -> 导入项目
```

### 第三步：选择项目目录

项目目录选择解压后的：

```text
stonehouse-main
```

不要选择压缩包，也不要选择上一级空目录。

### 第四步：填写 AppID

项目配置中当前已有 AppID：

```text
wxaece4d2a595da0d0
```

如果这是你自己的小程序 AppID，可以直接使用。

如果只是本地预览或课程演示，可以在微信开发者工具中选择：

```text
测试号 / 无 AppID 模式
```

或者将 `project.config.json` 中的 `appid` 替换为你自己的小程序 AppID。

### 第五步：编译运行

导入成功后，点击微信开发者工具顶部的：

```text
编译
```

默认会进入顾客端首页。

如果页面没有自动刷新，可以手动在编译模式中选择：

```text
pages/customer/home/index
```

或者选择入口页：

```text
pages/login/index
```

## 7. 登录方式

### 顾客模式

进入登录页后，可以直接以顾客身份进入系统。

顾客端主要页面包括：

- 主页
- 点餐
- 包房预定
- 咖啡豆
- 用户中心

### 店员模式

店员登录账号为：

```text
账号：root
密码：root123
```

登录成功后会进入店员管理端。

店员端主要页面包括：

- 菜单管理
- 预约管理
- 咖啡豆管理

> 注意：当前账号密码是写死在前端代码中的，仅适合本地演示，不适合正式上线。

## 8. 页面说明

### 8.1 首页

路径：

```text
pages/customer/home/index
```

主要用于展示咖啡厅介绍、推荐产品、活动信息和图片画廊。

### 8.2 点餐页

路径：

```text
pages/customer/menu/index
```

支持：

- 按分类查看菜品
- 搜索菜品
- 选择桌号
- 加入购物车
- 修改购物车数量
- 清空购物车
- 确认买单

下单后，订单会写入 `app.js` 中的 `menuOrders`。

### 8.3 包房预约页

路径：

```text
pages/customer/booking/index
```

用于展示可预约包房列表。

点击包房后会进入详情页：

```text
pages/customer/room-detail/index
```

详情页支持：

- 查看包房图片
- 选择预约日期
- 选择时间段
- 填写联系人
- 填写联系电话
- 填写备注
- 选择是否支付押金
- 提交预约

预约提交后，数据会写入 `app.js` 中的 `bookings`。

### 8.4 咖啡豆商城

路径：

```text
pages/customer/beans/index
```

支持：

- 咖啡豆商品浏览
- 咖啡豆搜索
- 加入购物车
- 修改购物车数量
- 确认买单
- 查看咖啡豆订单

下单后，订单会写入 `app.js` 中的 `beanOrders`。

### 8.5 用户中心

路径：

```text
pages/customer/user/index
```

支持：

- 查看登录状态
- 店员登录
- 退出登录

### 8.6 店员菜单管理

路径：

```text
pages/staff/menu-manage/index
```

支持：

- 查看上架 / 下架菜品
- 搜索菜品
- 新增菜品
- 修改价格
- 修改库存
- 修改分类
- 上架 / 下架
- 查看堂食订单
- 查看销售金额

### 8.7 店员预约管理

路径：

```text
pages/staff/booking-manage/index
```

支持：

- 查看预约记录
- 新增预约
- 标记预约状态
- 删除已取消预约

### 8.8 店员咖啡豆管理

路径：

```text
pages/staff/beans-manage/index
```

支持：

- 查看咖啡豆商品
- 新增咖啡豆商品
- 修改价格
- 修改库存
- 修改描述
- 上架 / 下架
- 查看咖啡豆订单
- 维护快递单号
- 标记订单为已发货

## 9. 数据存储说明

当前项目没有后端数据库，所有业务数据都保存在：

```text
app.js
```

核心数据位置：

```javascript
globalData: {
  store: {
    menuProducts: [],
    beanProducts: [],
    rooms: [],
    bookings: [],
    menuOrders: [],
    beanOrders: [],
    menuCart: [],
    beanCart: []
  }
}
```

因此需要注意：

- 修改商品后只在当前运行会话中生效
- 新增订单后只在当前运行会话中生效
- 重新编译后可能恢复为初始数据
- 关闭微信开发者工具后数据不会持久保存
- 当前版本不能多用户同步

如果要正式上线，建议接入：

- 微信云开发数据库
- 自建后端 API
- MySQL / PostgreSQL / MongoDB 等数据库
- 用户鉴权系统
- 订单持久化系统
- 支付系统

## 10. 静态资源说明

项目图片与图标主要存放在：

```text
assets/
```

包括：

- 咖啡厅图片
- 菜品图标
- 咖啡豆图标
- 包房图标
- TabBar 图标

如果需要替换图片，建议保持原路径不变，直接替换对应文件。

如果新增图片，需要在页面 JS 数据中引用新的路径，例如：

```javascript
image: '/assets/new-image.svg'
```

## 11. 自定义组件说明

### 11.1 自定义 TabBar

目录：

```text
custom-tab-bar/
```

TabBar 配置来源于 `app.js` 中的：

```javascript
tabbarConfig
```

页面切换时会通过：

```javascript
app.setTabbarActive(pagePath)
```

更新当前激活状态。

### 11.2 日历组件

目录：

```text
components/calendar/
```

主要用于包房预约日期选择。

使用页面：

```text
pages/customer/room-detail/index
```

### 11.3 FirstUI 风格组件

目录：

```text
components/firstui/
```

当前包含：

- `fui-notice-bar`
- `fui-upload`
- `fui-fab`
- `fui-bottom-navbar`

这些是项目内置组件，不需要额外安装 npm 包。

## 12. 常见问题

### 12.1 导入项目后提示 AppID 不正确怎么办？

如果只是本地运行，可以使用测试号或无 AppID 模式。

如果要使用自己的小程序账号，请修改：

```text
project.config.json
```

中的：

```json
"appid": "你的 AppID"
```

### 12.2 为什么修改或新增的数据刷新后不见了？

因为当前项目没有数据库，数据只保存在小程序运行时内存中。

如果需要长期保存，需要接入后端或微信云开发数据库。

### 12.3 为什么不需要 npm install？

因为当前项目没有 `package.json`，也没有使用 npm 构建依赖。

所有页面、组件和资源都已经在项目目录中。

### 12.4 店员账号是什么？

```text
账号：root
密码：root123
```

### 12.5 图片上传是真实上传吗？

不是。

当前 `fui-upload` 组件使用的是：

```javascript
wx.chooseMedia
```

选择本地图片后返回临时文件路径，并没有上传到服务器。

如果需要正式上传，需要接入：

- 微信云存储
- 对象存储 COS / OSS / S3
- 自建文件上传接口

### 12.6 是否已经接入微信支付？

没有。

当前“买单”“押金”都是前端状态模拟，不会发起真实支付。

### 12.7 是否已经接入真实登录？

没有。

当前登录逻辑为前端模拟，店员账号密码写在页面 JS 文件中。

正式上线时应改为后端鉴权或微信登录。

## 13. 当前代码需要注意的问题

### 13.1 首页可能缺少 `getApp()` 引用

当前 `pages/customer/home/index.js` 中使用了：

```javascript
app.setTabbarActive('pages/customer/home/index')
```

但文件顶部没有看到：

```javascript
const app = getApp();
```

如果运行首页时报：

```text
ReferenceError: app is not defined
```

请在 `pages/customer/home/index.js` 文件最顶部补充：

```javascript
const app = getApp();
```

补充后结构应类似：

```javascript
const app = getApp();

Page({
  data: {
    // ...
  }
});
```

### 13.2 当前登录密码不安全

`root / root123` 写在前端代码中，任何人都可以看到。

该方式仅适合课程展示或本地演示，不适合正式上线。

### 13.3 当前没有权限校验

店员页面目前主要依赖前端跳转控制，没有真正的后端权限校验。

正式上线时需要增加：

- 登录态校验
- 角色权限校验
- 后端接口鉴权
- 敏感操作权限控制

## 14. 开发建议

如果后续继续完善项目，建议按以下顺序迭代：

1. 修复首页 `getApp()` 引用问题
2. 将 `app.js` 中的模拟数据拆分到单独的 mock 文件
3. 接入微信云开发数据库
4. 接入真实用户登录
5. 接入店员权限管理
6. 接入真实图片上传
7. 接入微信支付
8. 增加订单状态流转
9. 增加预约冲突检测
10. 增加后台数据统计页面

## 15. 快速启动摘要

```text
1. 解压 stonehouse-main.zip
2. 打开微信开发者工具
3. 选择“小程序 -> 导入项目”
4. 项目目录选择 stonehouse-main
5. AppID 使用自己的 AppID，或选择测试号 / 无 AppID
6. 点击“编译”
7. 顾客端可直接浏览
8. 店员端账号 root，密码 root123
```

## 16. 项目状态

当前项目适合：

- 课程作业展示
- 小程序原型演示
- 咖啡厅业务流程 Demo
- 前端页面与交互展示
- 后续接入后端前的基础版本

当前项目暂不适合直接生产上线，原因是：

- 没有真实数据库
- 没有真实登录鉴权
- 没有真实支付
- 没有真实文件上传
- 没有后端权限控制
- 数据刷新后不能持久保存
