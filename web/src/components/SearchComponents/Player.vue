<template>
  <div id="container">
    <audio controls autoplay class="player">
      <source :src="musicdetails.src" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
  //import Aplayer from 'vue-aplayer'
  export default {
    name: "Player",
    components: {
      //Aplayer,
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
        let m = this.$store.getters.getPlayMp3;
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
