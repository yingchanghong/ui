import type { App } from "vue";
import Table from "./index.vue";
Table.install = (app: App) => {
  app.component("y-table", Table);
};

export default Table;
