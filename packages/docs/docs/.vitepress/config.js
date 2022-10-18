const sidebar = require("./configs/sidebar");
module.exports = {
  title: "yUI",
  description: "vue3 ui",
  themeConfig: {
    logo: "/logo/svg",
    nav: [
      { text: "指南", link: "/guide/install" },
      { text: "组件", link: "/document/" },
      { text: "关于", link: "/about/" },
    ],
    sidebar,
  },
};
