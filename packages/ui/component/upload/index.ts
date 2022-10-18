import type { App } from "vue";
import Upload from "./index.vue";
Upload.install = (app: App) => {
  app.component("y-upload", Upload);
};

export default Upload;
