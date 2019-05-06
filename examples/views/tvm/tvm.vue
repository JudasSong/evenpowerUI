<template>
  <div class="header" style="background-color: #ff7766">
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
          name: '清洗规则管理',
        },
        {
          path: '/website2',
          name: '信用数据查询',
        },
        {
          path: '/website3',
          name: '清洗规则配置',
        },
        {
          path: '/website4',
          name: '比对规则应用配置',
        },
        {
          path: '/website5',
          name: '比对结果查询',
        },
        {
          path: '/website6',
          name: '异常登录数据查询',
        },
        {
          path: '/website7',
          name: '信用目录权限',
        },
        {
          path: '/website8',
          name: '数据项权限',
        },
        {
          path: '/website9',
          name: '发布信用目录',
        }
      ]
    };
  },
  created(){
    console.log(this.headMenuList);
  }
}

</script>
