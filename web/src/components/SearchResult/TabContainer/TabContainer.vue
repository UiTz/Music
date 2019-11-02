<template>
	<!-- 搜索结果下方容器 -->
	<mt-tab-container v-model="selected" class="body_container" swipeable>
		<mt-tab-container-item id="1">
			<single-search
							v-if="selected === '1'"
							:searchContent="searchContent">
			</single-search>
		</mt-tab-container-item>
		<mt-tab-container-item id="2">
			<singer-search
							v-if="selected === '2'"
							:searchContent="searchContent">
			</singer-search>
		</mt-tab-container-item>
		<mt-tab-container-item id="3">
			<album-search
							v-if="selected === '3'"
							:searchContent="searchContent">
			</album-search>
		</mt-tab-container-item>
	</mt-tab-container>
</template>

<script>
	import SingleSearch from "./SingleSearch/SingleSearch";
	import SingerSearch from "./SingerSearch/SingerSearch";
	import AlbumSearch from "./AlbumSearch/AlbumSearch";

	export default {
		components: { AlbumSearch, SingerSearch, SingleSearch },
		props: {
			_selected: {
				type: String,
				default: '1'
			},
			searchContent: {
				type: String
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
			selected (index) {
				this.$emit('switchPage', index);
			},
		},
	}
</script>

<style scoped lang="scss">
	.body_container {
		padding-top: 90px;
		padding-bottom: 56px;
		background-color: #FFFFFF;
	}
</style>
