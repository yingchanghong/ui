<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="y-rate"></div>
</template>

<style scoped></style>
