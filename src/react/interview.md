---
# 这是文章的标题
title: 面试题
# 你可以自定义封面图片
cover: /assets/images/cover2.jpg
# 这是页面的图标
icon: fa-solid fa-file-lines
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Mr.Chuzs
# 设置写作时间
date: 2023-08-06
# 一个页面可以有多个分类
category:
  - 面试题
# 一个页面可以有多个标签
tag:
  - react
  - 前端框架
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚


footer: 你走的每一步都算数
# 你可以自定义版权信息
copyright: Copyright © 2023 Mr.Chuzs
---

`React` 面试题

<!-- more -->
1. 浅谈React工作原理
::: tip 答案示例

Reactjs起源于Facebook内部项目，是一个用来构建用户界面的js库，相当于MVC架构中的V层框架，React把每一个组件当成了一个状态机，组件内部通过state来维护组件状态的变化，当组件状态发生变化时，React通过虚拟DOM技术来增量并且高效的更新真实DOM。

:::
