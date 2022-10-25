import type { App } from "vue";
import Form from "./index.vue";
Form.install = (app: App) => {
  app.component("y-form", Form);
};

export default Form;
