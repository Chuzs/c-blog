import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    // "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    {
      text: "webpack",
      icon: "book",
      prefix: "webpack/",
      link: "webpack/",
      children: "structure",
    },
    {
      text: "Vue",
      icon: "book",
      prefix: "vue/",
      link: "vue/",
      children: "structure",
    },
    // "intro",
    // "slides",
  ],
});
