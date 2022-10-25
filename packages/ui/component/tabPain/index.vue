<script lang="ts" setup>
defineProps({
  tab: String,
  name: String,
});
</script>
<template>
  <div class="y-tab--pain"><slot /></div>
</template>
