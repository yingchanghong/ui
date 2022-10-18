<template>
  <div class="y-water--wraper">
    <slot />
    <div ref="waterMark" class="y-water"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "水印",
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  xOffset: {
    type: Number,
    default: 20,
  },
  yOffset: {
    type: Number,
    default: 20,
  },
});
const waterMark = ref(null) as any;
const getSize = () => {
  if (props.fullscreen) {
    return [document.body.offsetWidth / 5, document.body.offsetHeight / 4];
  } else {
    return [waterMark.value.offsetWidth / 4, waterMark.value.offsetHeight / 2];
  }
};
function warter(txt: string) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d") as any;
  const [width, height] = getSize();
  canvas.width = width;
  canvas.height = height;
  context.fillStyle = "#9999995c";
  context.font = "20px";
  context.rotate(-0.3);
  context.fillText(txt, props.xOffset, props.yOffset);
  const img = canvas.toDataURL("image/png");
  const style = `background-image:url(${img})`;
  if (props.fullscreen) {
    document.body.setAttribute("style", style);
  } else {
    waterMark.value.setAttribute("style", style);
  }
}
onMounted(() => {
  warter(props.title);
});
</script>
