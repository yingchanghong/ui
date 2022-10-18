<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const classes = computed(() => {
  if (props.type) {
    return `y-button--${props.type}`;
  }
  return "";
});

const size = computed(() => {
  if (props.size) {
    return `y-button--${props.size}`;
  }
  return "";
});
const isDisabled = computed(() => {
  if (props.disabled) {
    return "is--disabled";
  }
});
</script>

<template>
  <button
    class="y-button"
    :class="[classes, size, isDisabled]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
