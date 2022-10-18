import type { App } from "vue";
import YCarousel from "./index.vue";
YCarousel.install = (app: App) => {
  app.component("y-carousel", YCarousel);
};

export default YCarousel;
