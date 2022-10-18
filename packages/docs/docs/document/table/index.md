# 基本用法

border：控制边框的显示隐藏。showNum：是否展示序号

<Table />
<details>
<summary>查看代码</summary>

```vue
<template>
  <y-table :columns="state.columns" :dataSource="state.dataSource">
    <template #age="row">
      <a>{{ row.rowData.age }}</a>
    </template>
    <template #row="row">
      <y-button @click="getDetail(row.rowData)">详情</y-button>
    </template>
  </y-table>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = {
  columns: [
    { title: "name", key: "name" },
    { title: "age", key: "age", slots: "age" },
    { title: "oparate", key: "op", slots: "row" },
  ],
  dataSource: [
    { name: "lisi", age: 12, sex: "男" },
    { name: "wangwu", age: 22, sex: "女" },
  ],
};
const getDetail = (value) => {
  console.log(value);
};
</script>
```

</details>
