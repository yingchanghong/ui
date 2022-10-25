<template>
  <transition name="dialog-fade">
    <div v-if="visible" class="y-dialog">
      <div class="y-dialog_box" :style="style">
        <div class="y-dialog_header">
          <span class="y-dialog_title">{{ title }}</span>
          <i v-if="showClose" class="y-dialog_close" @click="onClose"></i>
        </div>
        <div class="y-dialog_body">
          <slot></slot>
        </div>
        <div class="y-dialog_footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, watch } from "vue";

const emit = defineEmits(["close"]);
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  top: {
    type: String,
    default: "30vh",
  },
  width: String,
  visible: {
    type: Boolean,
    default: false,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
});
type Style = {
  width?: String;
  top?: String;
};
const style = computed(() => {
  const style: Style = {};
  if (props.width) {
    style.width = props.width;
  }
  if (props.top) {
    style.top = props.top;
  }
  return style;
});
watch(
  () => props.visible,
  (news) => {
    if (news) {
      document.body.classList.add("y-popup-body");
    } else {
      document.body.classList.remove("y-popup-body");
    }
  }
);
const onClose = () => {
  emit("close");
};
</script>
