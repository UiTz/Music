<template>
	<!-- 搜索结果下方容器 -->
	<mt-tab-container v-model="selected" class="body_container">
		<mt-tab-container-item id="1">
			<single-search :searchResult="searchResult"></single-search>
		</mt-tab-container-item>
		<mt-tab-container-item id="2">
			歌手
		</mt-tab-container-item>
		<mt-tab-container-item id="3">
			专辑
		</mt-tab-container-item>
	</mt-tab-container>
</template>

<script>
	import SingleSearch from "./SingleSearch/SingleSearch";

	export default {
		components: { SingleSearch },
		props: {
			_selected: {
				type: String,
				default: '1'
			},
			searchResult: {
				type: Object
			}
		},
		name: "TabContainer",
		data () {
			return {
				selected: '1'
			}
		},
		watch: {
			_selected (index) {
				this.selected = index;
			},
		},
	}
</script>

<style scoped lang="scss">
</style>
