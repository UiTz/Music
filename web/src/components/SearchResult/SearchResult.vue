<template>
	<!-- 搜索结果页面 -->
	<div>
		<nav-bar :searchContent="searchContent" :_selected="selected" @switchPage="switchPage"></nav-bar>
		<tab-container :searchContent="searchContent" :_selected="selected" @switchPage="switchPage"></tab-container>
	</div>
</template>

<script>
	import NavBar from "./NavBar/NavBar";
	import TabContainer from "./TabContainer/TabContainer";

	export default {
		components: { TabContainer, NavBar },
		props: {
			// searchResult: {
			// 	type: Object,
			// },
			searchContent: {
				type: String
			}
		},
		name: "SearchResult",
		data () {
			return {
				selected: '1'
			}
		},
		methods: {
			switchPage (index) {
				this.selected = index;
			}
		},
	}
</script>

<style scoped>

</style>
