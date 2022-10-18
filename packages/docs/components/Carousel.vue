<template>
  <y-carousel :list="state.list" autoPlay />
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  list: [
    {
      imgUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668481735&t=bb9a1ac35d631ad77604a88202e5f9f7",
    },
    {
      imgUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F5453005f74be2.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668481998&t=2daa2777367e030b9002209bb0d4b67e",
    },
    {
      imgUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-05-10%2F5af3b902e5d67.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668481998&t=d20029fbbbe5165cf1e05efbd8d5a5be",
    },
  ],
});
</script>
