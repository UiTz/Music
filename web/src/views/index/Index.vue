<template>
	<!--<div id="container">-->
	<!--  <search-bar></search-bar>-->
	<!--  <music-list @getdata="doPlay"></music-list>-->
	<!--  <player></player>-->
	<!--</div>-->
	<div class="container">
		<!--<nav-bar :data="headerData" @left-click="leftClick"></nav-bar>-->
		<tab-container @getActive="getActive" :active="active"></tab-container>
		<tab-bar @getActive="getActive" :active="active"></tab-bar>
	</div>
</template>

<script>
	import TabBar from "../../components/TabBar/TabBar";
	import TabContainer from "../../components/TabContainer/TabContainer";
	// import NavBar from "../../components/NavBar/NavBar";

	export default {
		name: "Index",
		data () {
			return {
				isPlay: false,
				active: '发现音乐',
				headerData: {
					title: 'C-BlOCK',
					midContent: '',
					leftIcon: require('../../assets/img/mic.png'),
					mediumIcon: require('../../assets/img/zoom.png'),
					rightIcon: require('../../assets/img/playing.png')
				}
			}
		},
		methods: {
			// doPlay(val) {
			//   this.isPlay = val;
			// },
			// 获取tabcontainer数据
			getActive (data) {
				this.active = data;
			},

			// 获取tabbar数据
			// getSeleted(data) {
			//   this.active = data;
			// }
		},
		components: {
			// NavBar,
			TabContainer,
			TabBar,
		},
	}
</script>

<style scoped lang="scss">

</style>
