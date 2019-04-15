<template>
  <div id="app">
    <Header></Header>
    <Container></Container>
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Container from './components/Container.vue';
export default {
  name: 'App',
  components: {
    Header,
    Container
  }
}

</script>
<style lang="less">
#app {
  height: 100%;
  overflow-y: hidden;
}

</style>
