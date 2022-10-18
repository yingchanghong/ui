import type { App } from "vue";
import WaterMark from "./index.vue";
WaterMark.install = (app: App) => {
  app.component("y-water-mark", WaterMark);
};

export default WaterMark;
