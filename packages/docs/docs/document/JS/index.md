## 按钮类型

type 字段来定义按钮的类型

<y-button>按钮</y-button>
<y-button type="warn">按钮</y-button>
<y-button type="primary">按钮</y-button>
<y-button type="error">按钮</y-button>

<details>
<summary>查看代码</summary>

```vue
<template>
  <y-button type="warn">按钮</y-button>
  <y-button type="primary">按钮</y-button>
  <y-button type="error">按钮</y-button>
</template>
```

</details>

## 按钮尺寸

size 字段来修改按钮大小
<y-button type="primary">按钮</y-button>
<y-button type="primary" size="small">按钮</y-button>

<details>
<summary>查看代码</summary>

```vue
<template>
  <y-button type="primary">按钮</y-button>
  <y-button type="primary" size="small">按钮</y-button>
</template>
```

</details>

## 禁用状态

disabled 字段来控制按钮是否可用
<y-button disabled>按钮</y-button>
<y-button type="warn" disabled>按钮</y-button>
<y-button type="primary" disabled>按钮</y-button>
<y-button type="error" disabled>按钮</y-button>

<details>
<summary>查看代码</summary>

```vue
<template>
  <y-button disabled>按钮</y-button>
  <y-button type="warn" disabled>按钮</y-button>
  <y-button type="primary" disabled>按钮</y-button>
  <y-button type="error" disabled>按钮</y-button>
</template>
```

</details>

<!-- <GlobalComment/>
我是 js
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
::: -->
