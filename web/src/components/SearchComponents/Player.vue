<template>
  <div id="container">
    <aplayer autoplay
             class="player"
             :music="musicdetails"
             disabled="true"
    />
  </div>
</template>

<script>
  import Aplayer from 'vue-aplayer'
  export default {
    name: "Player",
    components: {
      Aplayer,
    },
    data() {
      return {
        //musicdetails:{
        //  title: '',
        //  artist: '',
        //  src: '',
        //  pic: ''
        //}
      }
    },
    computed: {
      musicdetails() {
        let m = this.$store.state.playMp3;
        console.log(m);
        return m;
      }
    }
  }
</script>

<style scoped lang="scss">
  #container{
    .player{
      position:fixed;
      bottom: 0;
      width: 100%;
    }
  }
</style>
