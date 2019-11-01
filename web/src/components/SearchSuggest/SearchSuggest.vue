<template>
	<!-- 搜索联想组件 -->
	<div class="searchContainer">
		<mt-cell
						:key="index"
						:title="item.keyword"
						@click.native="$emit('thinkSearch', item.keyword)"
						icon="sousuo"
						slot="right" v-for="(item,index) in searchSuggest">
		</mt-cell>
	</div>
</template>

<script>
	export default {
		props: {
			searchSuggest: {
				type: Array,
			},
		},
		name: "SearchSuggest",
		data () {
			return {}
		},
	}
</script>

<style scoped lang="scss">
	.searchContainer {
		padding-top: 41px;
		padding-bottom: 55px;
	}
</style>
