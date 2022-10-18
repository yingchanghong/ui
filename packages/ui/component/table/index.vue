<template>
  <table
    :class="['y-table', border ? 'y-table-border' : 'y-table-bottom']"
    cellpadding="0"
    cellspacing="0"
  >
    <thead class="y-table-header">
      <tr>
        <th v-if="showNum" class="y-table-number">序号</th>
        <th v-for="item in columns" :key="item.key">{{ item.title }}</th>
      </tr>
    </thead>
    <tbody class="y-table-body">
      <tr
        v-for="(dataItem, dataIndex) in dataSource"
        :key="dataIndex"
        :class="stripe ? 'y-table-stripe' : ''"
      >
        <td v-if="showNum">{{ (dataIndex as number) + 1 }}</td>
        <td v-for="columnItem in columns" :key="columnItem.key">
          <slot v-if="!columnItem.slots">{{ dataItem[columnItem.key] }}</slot>
          <slot v-else :name="columnItem.slots" :rowData="dataItem"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
const props = defineProps({
  columns: {
    type: Array as () => Array<any>,
    default: () => [],
  },
  dataSource: {
    type: Array as () => Array<any>,
    default: () => [],
  },
  border: {
    type: Boolean,
    default: false,
  },
  showNum: {
    type: Boolean,
    default: false,
  },
  stripe: {
    type: Boolean,
    default: false,
  },
});
</script>
