module.exports = {
  "/guide/": getGuideSidebar(),
  "/document/": getcomponentsSidebar(),
};

function getcomponentsSidebar() {
  return [
    {
      text: "Basic 基础组件",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "Button", link: "/document/JS/" },
        { text: "Border", link: "/document/JS/NE" },
      ],
    },
    {
      text: "Form 表单组件",
      collapsible: true,
      collapsed: true,
      items: [{ text: "html基础", link: "/document/HTML" }],
    },
    {
      text: "反馈组件",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "dialog 弹窗", link: "/document/dialog/" },
        { text: "rate 评分", link: "/document/Rate/" },
        { text: "message 提示", link: "/document/message/" },
        { text: "tabs 切换", link: "/document/tabs/" },
        { text: "water 水印", link: "/document/waterMark/" },
        { text: "carousel 轮播图", link: "/document/carousel/" },
      ],
    },
    {
      text: "菜单组件",
      collapsible: true,
      collapsed: true,
      items: [{ text: "tabs 切换", link: "/document/tabs/" }],
    },
    {
      text: "数据组件",
      collapsible: true,
      collapsed: true,
      items: [{ text: "table 表格", link: "/document/table/" }],
    },
  ];
}

function getGuideSidebar() {
  return [
    {
      text: "基础",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "安装", link: "/guide/install" },
        { text: "快速开始", link: "/guide/start" },
      ],
    },
  ];
}
