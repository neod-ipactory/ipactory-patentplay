<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <side-bar>hi</side-bar>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';

export default {
  components: {
    SideBar,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
}
</style>
