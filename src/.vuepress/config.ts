import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "前端小站",
      description: "Chuzs的博客",
    },
    "/en/": {
      lang: "en-US",
      title: "C-Blog",
      description: "A blog of Chuzs",
    },
  },

  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
