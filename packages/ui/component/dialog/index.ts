import type { App } from "vue";
import Dialog from "./index.vue";
Dialog.install = (app: App) => {
  app.component("y-dialog", Dialog);
};

export default Dialog;
