---
# 这是文章的标题
title: 面试题
# 你可以自定义封面图片
cover: /assets/images/cover2.jpg
# 这是页面的图标
icon: fa-solid fa-file-lines
# 这是侧边栏的顺序
order: 2
# 设置作者
author: Mr.Chuzs
# 设置写作时间
date: 2023-08-02
# 一个页面可以有多个分类
category:
  - 面试题
# 一个页面可以有多个标签
tag:
  - webpack
  - 打包工具
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚


# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: Copyright © 2023 Mr.Chuzs
---

`webpack` 面试题

<!-- more -->

1. **webpack与grunt、gulp的不同？**
::: tip 答案示例

三者都是前端构建工具，`grunt`和gulp在早期比较流行，现在webpack相对来说比较主流，不过一些轻量化的任务还是会用gulp来处理，比如单独打包CSS文件等。
grunt和gulp是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。
webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能。
所以总结一下：

- 从构建思路来说，gulp和grunt需要开发者将整个前端构建过程拆分成多个`Task`，并合理控制所有`Task`的调用关系 webpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工
- 对于知识背景来说，gulp更像后端开发者的思路，需要对于整个流程了如指掌 webpack更倾向于前端开发者的思路

:::
2. **与webpack类似的工具还有哪些？**
::: tip 答案示例

同样是基于入口的打包工具还有以下几个主流的：`webpack`、`rollup`、`parcel`
从应用场景上来看：

- webpack适用于大型复杂的前端站点构建
- rollup适用于基础库的打包，如vue、react
- parcel适用于简单的实验性项目，他可以满足低门槛的快速看到效果
由于parcel在打包过程中给出的调试信息十分有限，所以一旦打包出错难以调试，所以不建议复杂的项目使用parcel

:::
3. **有哪些常见的Loader？**
::: tip 答案示例

- file-loader：将一个文件中的 import/require() 解析为 url，并且将文件发送到输出文件夹。
- url-loader：和 file-loader 类似，但是能在文件指定大小下以 base64 的方式把文件内容注入到代码中去
- source-map-loader：加载额外的 Source Map 文件，以方便断点调试
- image-loader：加载并且压缩图片文件
- babel-loader：把 ES6 转换成 ES5
- css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
- style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。
- eslint-loader：通过 ESLint 检查 JavaScript 代码

:::
4. **有哪些常见的Plugin？**
::: tip 答案示例

- define-plugin：定义环境变量
- commons-chunk-plugin：提取公共代码
- uglifyjs-webpack-plugin：通过UglifyES压缩ES6代码

:::
5. **Loader和Plugin的不同？**
::: tip 答案示例

`不同的作用`

- Loader直译为"加载器"。Webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件也打包的话，就会用到loader。 所以Loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力。
- Plugin直译为"插件"。Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。 在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

`不同的用法`

- Loader在module.rules中配置，也就是说他作为模块的解析规则而存在。 类型为数组，每一项都是一个Object，里面描述了对于什么类型的文件（test），使用什么加载(loader)和使用的参数（options）
- Plugin在plugins中单独配置。 类型为数组，每一项是一个plugin的实例，参数都通过构造函数传入。

:::
