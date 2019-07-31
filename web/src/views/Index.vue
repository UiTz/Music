<template>
  <div id="container">
    <search-bar></search-bar>
    <music-list></music-list>
    <player></player>
  </div>
</template>

<script>
  import MusicList from "../components/SearchComponents/MusicList";
  import SearchBar from "../components/SearchComponents/SearchBar";
  import Player from "../components/SearchComponents/Player";
  export default {
    name: "Index",
    components: {
      //eslint-disable-next-line vue/no-unused-components
      MusicList,
      //eslint-disable-next-line vue/no-unused-components
      SearchBar,
      //eslint-disable-next-line vue/no-unused-components
      Player
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">

</style>
