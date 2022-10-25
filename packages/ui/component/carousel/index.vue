<template>
  <div class="y-carousel" @mouseenter="stop()" @mouseleave="start()">
    <div class="y-carousel-body">
      <div
        class="y-carousel-item"
        :class="curIndex === index ? 'activeImg' : ''"
        v-for="(item, index) in list"
        :key="index"
      >
        <img
          class="y-carousel-item--img"
          :src="imgValue ? item[imgValue] : item.imgUrl"
        />
      </div>
      <a href="javascript:;" class="y-carousel-btn prev" @click="toggle(-1)"
        >&lt;</a
      >
      <a href="javascript:;" class="y-carousel-btn next" @click="toggle(1)"
        >&gt;</a
      >
      <div class="y-carousel-dote">
        <span
          class="y-carousel-dote--item"
          :class="curIndex === index ? 'y-carousel-dote--active' : ''"
          v-for="(item, index) in list"
          @click="curIndex = index"
          :key="index"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, onMounted } from "vue";

const props = defineProps({
  list: {
    type: Array as any,
    default: [],
  },
  imgValue: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 3,
  },
  autoPlay: {
    type: Boolean,
    default: false,
  },
});
const curIndex = ref(0) as any;
let timer = null as any;
const autoPlay = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    curIndex.value++;
    if (curIndex.value >= props.list.length) {
      curIndex.value = 0;
    }
  }, props.duration * 1000);
};
const stop = () => {
  if (timer) clearInterval(timer);
};
const start = () => {
  if (props.list.length && props.autoPlay) {
    autoPlay();
  }
};
const toggle = (step: number) => {
  curIndex.value += step;
  // 确定右侧临界值
  if (curIndex.value >= props.list.length) {
    curIndex.value = 0;
    return;
  }
  // 确定左侧临界值
  if (curIndex.value < 0) {
    curIndex.value = props.list.length - 1;
  }
};
onMounted(() => {
  if (props.autoPlay) {
    autoPlay();
  }
});
onUnmounted(() => {
  clearInterval(timer);
});
</script>
