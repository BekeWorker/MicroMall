<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar-main :textColor="rootTextColor" ></tab-bar-main>
  </div>
</template>

<script>
  import TabBarMain from "components/content/tabbar/TabBarMain";
  export default {
    name: 'App',
    components: {
      TabBarMain
    },
    data () {
      return {
        path:'',
        rootTextColor: '#ee5253'
      }
    }
  }
</script>

<style>

</style>
