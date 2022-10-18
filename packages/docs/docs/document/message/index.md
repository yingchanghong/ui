<message />
<details>
<summary>查看代码</summary>

```vue
<template>
  <y-button @click="info">消息</y-button>
  <y-button @click="suc">成功</y-button>
  <y-button @click="fail">失败</y-button>
  <y-button @click="warn">警告</y-button>
</template>

<script lang="ts" setup>
import { YMessage } from "y_ui";
const info = () => {
  YMessage.info("this is info");
};
const suc = () => {
  YMessage.success("this in success");
};
const fail = () => {
  YMessage.error("this in success");
};
const warn = () => {
  YMessage.warning("this in warn");
};
</script>
```

</details>
