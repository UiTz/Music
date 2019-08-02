<template>
  <div id="container">
    <search-bar></search-bar>
    <music-list @getdata="doPlay"></music-list>
    <player></player>
  </div>
</template>

<script>
  import MusicList from "../components/SearchComponents/MusicList";
  import SearchBar from "../components/SearchComponents/SearchBar";
  import Player from "../components/SearchComponents/Player";
  export default {
    name: "Index",
    data() {
      return {
        isPlay: false
      }
    },
    methods: {
      doPlay(val) {
        this.isPlay = val;
      }
    },
    computed: {},
    components: {
      //eslint-disable-next-line vue/no-unused-components
      MusicList,
      //eslint-disable-next-line vue/no-unused-components
      SearchBar,
      //eslint-disable-next-line vue/no-unused-components
      Player
    },
  }
</script>

<style scoped lang="scss">

</style>
