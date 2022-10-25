<script lang="ts" setup>
import { useSlots, h, render, ref, watch, onMounted, nextTick } from "vue";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  name: String,
});
const slot = useSlots();
const renderButton = (name: string, tab: string, index: number) => [
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
  ),
];

const renderTab = () =>
  h("div", { class: "y-tab--list", ref: "yTab" }, [
    slot.default &&
      slot.default().map((item, index) => {
        return renderButton(item.props?.name, item.props?.tab, index);
      }),
    h("div", {
      class: "y-tab--line",
      style: `width:${tabWidth.value};transform:translate(${tabLeft.value}px);position:absolute;`,
    }),
  ]);
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
const tabWidth = ref("0px");
const tabLeft = ref(0);
const currentTab = ref(props.value || "");
const yTab = ref(null);
const getWidth = () => {
  nextTick(() => {
    const name = document.querySelector(".y-tab--list") as any;
    for (let i = 0; i < name.children.length; i++) {
      if (name.children[i].getAttribute("class")?.includes("y-tab--active")) {
        tabWidth.value =
          Number(
            window.getComputedStyle(name.children[i]).width.replace("px", "")
          ) -
          Number(
            window
              .getComputedStyle(name.children[i])
              .paddingLeft.replace("px", "")
          ) +
          "px";
        tabLeft.value =
          name.children[i].offsetLeft -
          name.offsetLeft +
          Number(
            window
              .getComputedStyle(name.children[i])
              .paddingLeft.replace("px", "")
          );
      }
    }
  });
};
watch(currentTab, (val) => {
  getWidth();
});
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

onMounted(() => {
  getWidth();
});
</script>
<template>
  <div class="y-tabs">
    <renderTab />
    <renderContent />
  </div>
</template>
