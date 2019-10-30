<template>
	<div>
		<nav-bar
						:data="headerData"
						@touchSearchBar="$emit('switchSearch',headerData.midContent)">
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from "../../components/NavBar/NavBar";
	import { getHotSearch } from "../../assets/js/apis/find.js";


	export default {
		name: "Find",
		data () {
			return {
				headerData: {
					title: '',
					midContent: '',
					leftIcon: require('../../assets/img/mic.png'),
					mediumIcon: require('../../assets/img/zoom.png'),
					rightIcon: require('../../assets/img/playing.png')
				},
				isSearch: this.search
			}
		},
		async created () {
			// 获取热搜第一作为默认搜索
			let res = await getHotSearch();
			// console.log(res.data.data[0]);
			this.headerData.midContent = res.data[0].searchWord
		},
		methods: {
			// touchSearchBar () {
			// },
		},
		components: {
			NavBar
		}
	}
</script>

<style scoped>

</style>
