<template>
  <div class="container-main">
    <div class="page-component-scroll ep-scrollbar">
      <div class="page-component page-container">
        <div class="aside-nav">
          <AsideMenu></AsideMenu>
        </div>
        <div class="container-right">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AsideMenu from './AsideMenu.vue';
export default {
  components: {
    AsideMenu
  }
}

</script>
<style lang="less">
.container-main {
  padding: 0;
  margin-top: 0;
  height: 100%;
  min-height: auto;

  .page-component-scroll {
  }

  .ep-scrollbar {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    padding-top: 80px;
    height: 100%;
  }

  .aside-nav {
    width: 240px;
    position: fixed;
    top: 80px;
    bottom: 0;
    overflow: auto;
    transition: padding-top .3s;
  }

  .container-right {
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }
}

</style>
