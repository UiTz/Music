<template>
	<div>
		<nav-bar :data="headerData" @left-click="leftClick"></nav-bar>
	</div>
</template>

<script>
	import NavBar from "../../components/NavBar/NavBar";


	export default {
		name: "Find",
		data () {
			return {
				headerData: {
					title: 'C-BlOCK',
					midContent: '',
					leftIcon: require('../../assets/img/mic.png'),
					mediumIcon: require('../../assets/img/zoom.png'),
					rightIcon: require('../../assets/img/playing.png')
				}
			}
		},
		async created () {
			let res = await this.axios.get('search/hot/detail');
			// console.log(res.data.data[0]);
			this.headerData.title = res.data.data[0].searchWord
		},
		methods: {
			leftClick () {
				// console.log(11111111)
			},
		},
		components: {
			NavBar
		}
	}
</script>

<style scoped>

</style>
