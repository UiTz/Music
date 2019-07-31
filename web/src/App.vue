<template>
  <div id="app">
    <h3>这里是vueapp</h3>
    <!--<div id="nav">-->
    <!--  <router-link to="/">Home</router-link> |-->
    <!--  <router-link to="/about">About</router-link>-->
    <!--</div>-->
    <!--<router-view/>-->
    <router-link to="/search">search</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
</style>
