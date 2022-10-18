import DefaultTheme from "vitepress/theme";
import Global from "../../../components/GlobalComponent.vue";
import Dialog from "../../../components/Dialog.vue";
import Rate from "../../../components/Rate.vue";
import Tabs from "../../../components/Tabs.vue";
import Message from "../../../components/Message.vue";
import Table from "../../../components/Table.vue";
import WaterMark from "../../../components/WaterMark.vue";
import Carousel from "../../../components/Carousel.vue";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("GlobalComment", Global);
    app.component("Dialog", Dialog);
    app.component("Rate", Rate);
    app.component("Tabs", Tabs);
    app.component("Message", Message);
    app.component("Table", Table);
    app.component("WaterMark", WaterMark);
    app.component("Carousel", Carousel);
    import("y_ui").then((module) => {
      app.use(module);
    });
  },
};
