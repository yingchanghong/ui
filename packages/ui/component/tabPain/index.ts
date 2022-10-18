import type { App } from "vue";
import TabPain from "./index.vue";
TabPain.install = (app: App) => {
  app.component("y-tab-pain", TabPain);
};

export default TabPain;
