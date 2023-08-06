import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  // "/",
  // "/demo/",
  {
    text: "Webpack",
    icon: "iconfont icon-webpack",
    prefix: "/webpack/",
    children: ["sourceCode", "interview"],
  },

  {
    text: "Vue",
    icon: "iconfont icon-vuejs",
    prefix: "/vue/",
    children: [
      {
        text: "Vue2",
        icon: "pen-to-square",
        prefix: "vue2/",
        children: ["sourceCode", "interview"],
      },
      {
        text: "Vue3",
        icon: "pen-to-square",
        prefix: "vue3/",
        children: ["sourceCode", "interview"],
      },
    ],
  },
  {
    text: "React",
    icon: "iconfont icon-react",
    prefix: "/react/",
    children: ["sourceCode", "interview"],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
