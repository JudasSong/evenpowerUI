# TopViewMenu 适配导航菜单

----
- 主要是适用于页面顶部的菜单栏。

### 基础用法

- UI 注册了一个`EpTopviewMenu`指令用于调用。

:::demo

```html
<template>
  <div class="headerWrap">
    <ep-topview-menu :menuList="headMenuList"></ep-topview-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headMenuList: [{
          path: '/creditcont',
          name: '企业管理',
        },
        {
          path: '/website',
          name: '企业网站', 
        },
        {
          path: '/website1',
          name: '企业职位',
        },
        {
          path: '/website2',
          name: '企业招聘',
        },
        {
          path: '/website3',
          name: '项目案例',
        },
        {
          path: '/website4',
          name: '联系我们',
        },
        {
          path: '/website5',
          name: '研发团队',
        },
        {
          path: '/website6',
          name: '发展历程',
        },
        {
          path: '/website7',
          name: '公司特色',
        },
        {
          path: '/website8',
          name: '文化理念',
        },
        {
          path: '/website9',
          name: '关于企业',
        }
      ]
    };
  },
  created(){
    console.log(this.headMenuList);
  }
}
</script>
```
:::

