# 快速开始

----

### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import EvenpowerUI from 'evenpowerui' // 引入组件库
import 'evenpowerui/package/theme-set/lib/index.css' // 引入样式库

Vue.use(EvenpowerUI)
```

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { EpTopviewMenu } from 'evenpowerui'

export default {
  components: {
    EpTopviewMenu
  }
}
```

在模板中，用 `<ep-topview-menu></ep-topview-menu>` 自定义标签的方式使用组件

```html
<template>
  <ep-topview-menu>这是一个自适应菜单栏</ep-topview-menu>
</template>
```

### 自定义主题

`UI` 基于less,可修改 `evenpowerui/packages/theme-set/src/var.less` 文件自定义主题
