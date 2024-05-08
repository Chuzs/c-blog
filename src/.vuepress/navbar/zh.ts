import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  // "/",
  // "/demo/",
  {
    text: "Webpack",
    icon: "iconfont icon-webpack",
    prefix: "/webpack/",
    children: ["sourceCode", "interview", "principle/"],
  },

  {
    text: "Vue",
    icon: "iconfont icon-vuejs",
    prefix: "/vue/",
    children: ["vue2/", "vue3/"],
  },
  {
    text: "React",
    icon: "iconfont icon-react",
    prefix: "/react/",
    children: ["sourceCode", "interview"],
  },
  {
    text: "大数据",
    icon: "iconfont icon-react",
    prefix: "/bigdata/",
    children: ["machineLearnAlgorithms/"],
  },
  // {
  //   text: "通信工程师中级",
  //   icon: "iconfont icon-add_lan-01",
  //   prefix: "/communicationEngineer/",
  //   children: [
  //     {
  //       text: "通信专业务实--互联网技术",
  //       icon: "pen-to-square",
  //       prefix: "internetTechnology/",
  //       children: ["computerNetworksProtocols", "lan", "internet"],
  //     },
  //     {
  //       text: "通信专业综合能力",
  //       icon: "pen-to-square",
  //       prefix: "comprehensiveAbility/",
  //       children: ["sourceCode", "interview"],
  //     },
  //   ],
  // },
  // {
  //   text: "JS",
  //   icon: "iconfont icon-react",
  //   prefix: "/js/",
  //   children: ["mouseClick"],
  // },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
