import type { App } from "vue";
import Rate from "./index.vue";
Rate.install = (app: App) => {
  app.component("y-rate", Rate);
};

export default Rate;
