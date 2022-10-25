import { App } from "vue";
import "../assets/index.ts";

import yButton from "../component/button/index";
import yDialog from "../component/dialog/index";
import yRate from "../component/rate/index";
import YMessage from "../component/message/index";
import YTabs from "../component/tabs/index";
import YTabPane from "../component/tabPain/index";
import YUpload from "../component/upload/index";
import YTable from "../component/table/index";
import YWaterMark from "../component/waterMark/index";
import YCarousel from "../component/carousel/index";
import YForm from "../component/form/index";
import YFormItem from "../component/formItem/index";
// const components = [yButton];
const install = (app: App) => {
  app.component("y-button", yButton);
  app.component("y-dialog", yDialog);
  app.component("y-rate", yRate);
  app.component("y-tabs", YTabs);
  app.component("y-tab-pane", YTabPane);
  app.component("y-upload", YUpload);
  app.component("y-table", YTable);
  app.component("y-water-mark", YWaterMark);
  app.component("y-carousel", YCarousel);
  app.component("y-form-item", YFormItem);
  app.component("y-form", YForm);
  app.component("y-message");
  // components.forEach((component) => {
  //   app.component("y-button", component);
  // });
};

// 局部注册
export {
  yButton,
  yDialog,
  yRate,
  install,
  YMessage,
  YUpload,
  YTabPane,
  YTable,
  YWaterMark,
  YCarousel,
  YForm,
  YFormItem,
};
export default {
  install,
  "y-button": yButton,
  "y-dialog": yDialog,
  "y-rate": yRate,
  YMessage,
  YTabs,
  YUpload,
  YTabPane,
  YTable,
  YWaterMark,
  YCarousel,
  YForm,
  YFormItem,
};
