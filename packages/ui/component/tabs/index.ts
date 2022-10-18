import type { App } from "vue";
import Tabs from "./index.vue";
Tabs.install = (app: App) => {
  app.component("y-tabs", Tabs);
};

export default Tabs;
