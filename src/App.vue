<template>
  <div id="app">
    <Header></Header>
    <!-- <Container></Container> -->
    <Content></Content>
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Container from './components/Container.vue';
import Content from './components/Content.vue';
export default {
  name: 'App',
  components: {
    Header,
    Container,
    Content
  }
}

</script>
<style lang="less">
#app {
  height: 100%;
  overflow-y: hidden;
}

</style>
