import { App } from "vue";
import Btn from "./index.vue";
Btn.install = (app: App) => {
  app.component("y-button", Btn);
};

export default Btn;
