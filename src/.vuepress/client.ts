import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/left-blog-info.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {
    setupRunningTimeFooter(
      new Date("2023-08-01"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
        "/en/":
          "Running time: :day days :hour hours :minute minutes :second seconds",
      },
      true
    );
  },
  rootComponents: [],
});
