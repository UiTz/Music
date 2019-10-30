# 163Music-app

## `Vue移动端音乐APP——推荐使用手机访问`

# 使用工具

前端部分：

    Vue + Vuex + Vue-Router + Axios + Mint-UI

后端部分：

使用GitHub上Binaryify的开源项目
[网易云音乐 Node.js API service](https://github.com/Binaryify/NeteaseCloudMusicApi)

# 使用

```npm
git clone https://github.com/UiTz/Music.git

cd Music/web

npm install 

# 开发环境
npm run serve
访问 http://localhost:8080/

# 打包
npm run build
```


# 实现功能

### 音乐搜索

输入搜索关键词 使用回车键进行搜索

- [x] 本地保存历史搜索
- [x] 本地保存历史搜索

# 目录结构

```
|
|——server 服务端
|
|__web 
  |——src 资源文件
  | |—— assets 组件静态资源库
  | |—— components 组件库
  | |—— router 路由配置
  | |—— store vuex状态管理
  | |—— App.vue SPA
  | |__ main.js SPA入口
  |__public 静态资源目录
```
