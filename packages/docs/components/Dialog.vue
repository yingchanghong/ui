<template>
  <div class="dialog">
    <y-button @click="onOpen">open dialog</y-button>
    <y-dialog
      title="tip"
      :visible="state.visible"
      width="30%"
      @close="state.visible = false"
    >
      <span>This is dialog</span>
      <template #footer>
        <y-button @click="state.visible = false">close</y-button>
        <y-button @click="state.visible = false" type="primary">sure</y-button>
      </template>
    </y-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  visible: false,
});
const onOpen = () => {
  state.visible = true;
};
</script>

<style scoped>
.y-button {
  margin-left: 10px;
}
.y-dialog {
  color: #333;
}
</style>
