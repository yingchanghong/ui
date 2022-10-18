<script setup lang="ts">
import { computed, ref, onMounted } from "vue";

const types = ["info", "success", "warning", "error"];
const props = defineProps({
  type: {
    type: String,
    default: "info",
  },
  top: {
    type: Number,
    default: 20,
  },
  message: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 3000,
  },
  onDestory: Function,
  onClose: Function,
});
const visible = ref(false);
const messageStyle = computed(() => `y-message--${props.type}`);
const close = () => {
  visible.value = false;
  setTimeout(() => {
    props.onClose && props.onClose();
    props.onDestory && props.onDestory();
  }, props.duration);
};
onMounted(() => {
  visible.value = true;
});
setTimeout(() => {
  close();
}, props.duration);
</script>

<template>
  <transition @before-leave="onClose" @after-leave="onDestory" name="fade">
    <div
      v-show="visible"
      class="y-message"
      :class="messageStyle"
      :style="{ top: `${top}px` }"
    >
      <span>{{ message }}</span>
    </div>
  </transition>
</template>

<style scoped></style>
