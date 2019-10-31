<template>
	<div>
		<nav-bar :_selected="selected" @switchPage="switchPage"></nav-bar>
		<tab-container :_selected="selected" :searchResult="searchResult"></tab-container>
	</div>
</template>

<script>
	import NavBar from "./NavBar/NavBar";
	import TabContainer from "./TabContainer/TabContainer";

	export default {
		components: { TabContainer, NavBar },
		props: {
			searchResult: {
				type: Object,
			},
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
