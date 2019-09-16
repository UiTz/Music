<template>
	<div id="container">
		<audio controls autoplay  ref="audio"  class="player">
			<!--<source :src="musicDetails.src" type="audio/mpg">-->
			您的浏览器不支持 audio 元素
		</audio>
		<span style="display: none;">{{ musicDetails.src }}</span>
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
				// eslint-disable-next-line no-mixed-spaces-and-tabs
				 src: '',
				//  pic: ''
				//}
			}
		},
		methods: {
			changeSrc () {
				// eslint-disable-next-line no-console
				// let src = this.musicDetails.src;
				// eslint-disable-next-line no-console
				// console.log(src);
				// eslint-disable-next-line no-console
				console.log(this.src);
				this.$refs.audio.src = this.src;
				// this.$refs.audio.play();
				// mp3.load();
			}
		},
		watch: {
			musicDetails() {
				this.changeSrc()
				// // eslint-disable-next-line no-console
				// let src = this.musicDetails.src;
				// // eslint-disable-next-line no-console
				// console.log(src);
				// // eslint-disable-next-line no-console
				// console.log(this.$refs.audio);
				// this.$refs.audio.src = src;
				// // this.$refs.audio.play();
        // // mp3.load();

			}
		},
		computed: {
			musicDetails() {
				// eslint-disable-next-line no-console
				console.log(this.$store.state.playMp3.src);
				// eslint-disable-next-line vue/no-side-effects-in-computed-properties
				this.src = this.$store.state.playMp3.src;
				return this.$store.state.playMp3.src;
			}
		}
	}
</script>

<style scoped lang="scss">
	#container {
		.player {
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}
</style>
