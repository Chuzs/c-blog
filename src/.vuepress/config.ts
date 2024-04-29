import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
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
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
  },

  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as string,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
