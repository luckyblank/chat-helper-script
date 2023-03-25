# chat-helper-script

## 引言：

一款油猴JS脚本：基于openai相关的接口，实现任意网页上直接和ai对话，无需输入key。

## 功能展示：

<img src="https://qny.luckyblank.cn/start-status.png" alt="start-status"  /><img src="https://qny.luckyblank.cn/chatting-status.png" alt="chatting-status"  />



## 运行须知：

1、项目依赖安装

```sh
npm install
```

2、项目运行

```sh
npm run dev
```

3、项目编译

```sh
npm run build
```



## 开发须知：

> 项目基于脚手架（create-tampermonkey）开发：https://github.com/curly210102/create-tampermonkey
>
> 请先全局安装：
>
> ```shell
> npm i create-tampermonkey -g
> ```
>
> 创建油猴脚本项目
>
> ```shell
> npm init tampermonkey my-userscript
> ```



## 前端技术：

- jquery-3.6.0.min.js
- sweetalert.min.js
- layer.js
- vue.min.js
- element-ui/lib/index.js
- typeit.min.js
- crypto-js.min.js
- axios.min.js
- marked.min.js
- markdown-it.min.js
- showdown.min.js
- highlight.min.js

具体各个脚本的功能请自行百度。整体的js引入在src/meta.json文件@require节点数组有申明。



## 注意事项：

1、运行项目：

```
npm run dev
```

2、先在src/meta.json中定义相关的网址匹配规则以及js脚本依赖，修改后会直接显示在dist/main.dev.user.js文件中

3、在src/main.js中开发，相关的修改也会对应修改到dist/main.dev.user.js文件中，可以参考该文件中样式引入的方式。也可以自行采用以下几种方式：

- 在src/main.js中加入

  ```javascript
  $("head").append($('<link rel="stylesheet" href="https://www.luckyblank.cn/outer/layer-v3.5.1/layer/theme/default/layer.css">'));
  ```

- meta.json中增加（样式名+空格+样式地址）

  ```
   "@resource":[
      "laycss https://www.luckyblank.cn/outer/layer-v3.5.1/layer/theme/default/layer.css"
    ]
  ```

​	然后通过GM_getResourceText函数引入样式

```
    // 导入样式
    GM_addStyle(GM_getResourceText("layxcss"));
```

- 少量的样式/用户自定义样式可以直接用GM_addStyle

```javascript
GM_addStyle(`
    .ti-cursor:after {
      display: none;
      content: '|';
      bottom: .05em;
      right: -.25em;
      position: absolute;
      line-height: normal;
      font-size: inherit;
      -webkit-animation: blink 1s infinite;
      animation: blink 1s infinite
    }
`);
```

## 温馨提示：

建议使用vscode开发，安装tampermonkey-snippets插件。

![image-20230325195921513](https://qny.luckyblank.cn/image-20230325195921513.png)

具体API可参考文档（油猴知识语法.md）

## BUG反馈：

邮箱地址：1724451509@qq.com

