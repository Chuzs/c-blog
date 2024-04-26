---
# 这是文章的标题
title: CSS实现鼠标点击效果
# 你可以自定义封面图片
cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: fa-solid fa-file-code
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Mr.Chuzs
# 设置写作时间
date: 2023-10-31
# 一个页面可以有多个分类
category:
  - 笔记
# 一个页面可以有多个标签
tag:
  - js
  - css
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: Copyright © 2023 Mr.Chuzs
---

`more` CSS实现鼠标点击效果，支持iframe。在iframe使用可能涉及跨域问题

<!-- more -->

## HTML部分

``` html
<div>
  <iframe
    id="frame"
    src="./a.html"
    frameborder="0"
    width="720px"
    height="400px"
    onload="frameLoad()"
  ></iframe>
</div>
```

### a.html

``` html
<!DOCTYPE html>
<html lang="en" style="background-color: blueviolet;">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <div>3234243222222222222222222222222222222222222222222</div>
      <div>3234243222222222222222222222222222222222222222222</div>
      <div>3234243222222222222222222222222222222222222222222</div>
      <iframe
        id="frame"
        src="./b.html"
        frameborder="0"
        width="720px"
        height="400px"
      ></iframe>
  </body>
</html>

```

### b.html

``` html
<!DOCTYPE html>
<html lang="en" style="background-color: green;">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body style="background-color: blue;">
    <div>111111</div>
    <div>
      <iframe
        id="frame"
        src="./c.html"
        frameborder="0"
        width="720px"
        height="400px"
      ></iframe>
  </body>
</html>

```

### c.html

``` html
<!DOCTYPE html>
<html lang="en" style="background-color: aqua">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div style="background-color: red; width: 720px; height: 400px"></div>
  </body>
</html>
```

## CSS部分

``` css
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(black, black);
}

span {
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: yellow;
  border-radius: 50%;
  animation: big 1s;
}

@keyframes big {
  0% {
    width: 0px;
    height: 0px;
    opacity: 1;
  }

  100% {
    width: 40px;
    height: 40px;
    opacity: 0;
  }
}
```

## JS部分

```js
var pframe;
function frameLoad() {
  pframe = document.getElementById("frame");
  bindFrameClick(pframe, 0, 0);
}
function bindFrameClick(frame, bodyMarginleft, bodyMarginTop) {
  const frameRect = frame.getBoundingClientRect();
  const frameBody = frame.contentWindow.document.body;
  frameBody.addEventListener("click", function (e) {
    let x = e.clientX - this.offsetLeft + bodyMarginleft + frameRect.left;
    let y = e.clientY - this.offsetTop + bodyMarginTop + frameRect.top;
    console.log("x", x);
    console.log("y", y);

    let circle = document.createElement("span");
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    document.body.appendChild(circle);
    setInterval(function () {
      circle.remove();
    }, 1000);
  });
  const childFrames =
    frame.contentWindow.document.getElementsByTagName("iframe");
  if (childFrames.length > 0) {
    for (let i = 0; i < childFrames.length; i++) {
      const childFrame = childFrames[i];
      bindFrameClick(
        childFrame,
        bodyMarginleft + frameRect.left,
        bodyMarginTop + frameRect.top
      );
    }
  }
}

document.body.addEventListener("click", function (e) {
  let x = e.clientX - this.offsetLeft;
  let y = e.clientY - this.offsetTop;
  console.log("ax", x);
  console.log("ay", y);
  let circle = document.createElement("span");
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  document.body.appendChild(circle);

  setInterval(function () {
    circle.remove();
  }, 1000);
});

```
