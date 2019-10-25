<template>
	<!--<div id="container">-->
	<!--  <search-bar></search-bar>-->
	<!--  <music-list @getdata="doPlay"></music-list>-->
	<!--  <player></player>-->
	<!--</div>-->
	<div class="container">
		<header></header>
		<tab-container @getActive="getActive" :active="active"></tab-container>
		<tabbar @getActive="getActive" :active="active"></tabbar>
	</div>
</template>

<script>
	import Tabbar from "../components/Tabbar/Tabbar";
	import TabContainer from "../components/TabContainer/TabContainer";
	// import Header from "../components/Header/Header";

	export default {
		name: "Index",
		data () {
			return {
				isPlay: false,
				active: '发现音乐'
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
			// Header,
			TabContainer,
			Tabbar,
		},
	}
</script>

<style scoped lang="scss">

</style>
