import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "博客",
      description: "Chuzs的博客",
    },
    "/en/": {
      lang: "en-US",
      title: "C-Blog",
      description: "A blog of Chuzs",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
