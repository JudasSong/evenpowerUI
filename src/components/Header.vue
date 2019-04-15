<template>
  <div class="headerWrapper">
    <header class="header">
      <div class="container">
        <div class="logoTitle">
          <!-- <img src="../assets/img/evenpowers.png"> -->
          <div class="title">Evenpower</div>
        </div>
        <ul class="headerNav">
          <li class="nav-item">
            <router-link :to="{ path: '/giud'}" class="">指南</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/install'}">组件</router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {},
  mounted() {

  },
}

</script>
<style lang="less" scoped>
@import "../assets/css/var.less";

.headerWrapper {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1500;
  height: 80px;
}

.header {
  height: 80px;
  background-color: #fff;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  position: relative;
}

.header .container {
  height: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdfe6;
}

.header {
  .logoTitle {
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: 400;
  }
}

.header {
  .headerNav {
    float: right;
    height: 100%;
    line-height: 80px;
    background: transparent;
    padding: 0;
    margin: 0;
  }
}

.header {
  .nav-item {
    margin: 0;
    float: left;
    list-style: none;
    position: relative;
    cursor: pointer;
  }
}

.header .nav-item {
  a {
    font-size: 16px;
    color: #1989fa;
    text-decoration: none;
    opacity: .5;
    display: block;
    padding: 0 22px;
  }
}

.header .nav-item a.active,
.header .nav-item a:hover {
  opacity: 1;
}

.logoTitle{
  .title{
    color: #1989fa;
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
