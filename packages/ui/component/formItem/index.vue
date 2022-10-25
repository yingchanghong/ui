<template>
  <div
    class="y-form-item"
    :class="
      validateState === 'success'
        ? 'success'
        : validateState === 'error'
        ? 'error'
        : ''
    "
  >
    <label class="y-form-item__label"></label>
    <div class="y-form-item__content">
      <slot />
      <div class="y-form-item__error">{{ validateMessage }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { FormValidateState, formItemProps } from "./index";

const props = defineProps(formItemProps);
const validateState = ref<FormValidateState>("");
const validateMessage = ref("校验失败");
</script>
