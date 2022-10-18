<script lang="ts" setup>
import { useSlots, h, render, ref } from "vue";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  name: String,
});
const slot = useSlots();
const renderButton = (name: string, tab: string, index: number) =>
  h(
    "div",
    {
      name: props.name,
      value: name,
      class: ["y-tab--item", currentTab.value === tab ? "y-tab--active" : ""],
      onClick: () => {
        currentTab.value = tab;
      },
    },
    h("div", { class: "y-tab--content" }, name)
  );

const renderTab = () =>
  h(
    "div",
    { class: "y-tab--list" },
    slot.default &&
      slot.default().map((item, index) => {
        return renderButton(item.props?.name, item.props?.tab, index);
      })
  );
// const renderTab = {
//   render() {
//     if (slot.default) {
//       return slot.default().map((component) => {
//         console.log(component.children.default());
//         return h(component);
//       });
//     }
//   },
// };

const currentTab = ref(props.value || "");
const renderContent = () => {
  return (
    slot.default &&
    slot.default().find((item) => {
      // 未传默认值，以以第一个为准
      if (currentTab.value === "") {
        return true;
      }
      return item.props?.tab === currentTab.value;
    })
  );
};
</script>
<template>
  <div class="y-tabs">
    <renderTab />
    <renderContent />
  </div>
</template>
