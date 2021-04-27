<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>

    <button @click="handleClick">触发组件MyToast</button>
    <my-toast ref="myToast" />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick() {
      this.$nextTick(() => {
        this.$refs.myToast.toastPlugin('触发组件MyToast', 2000)
      })
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
