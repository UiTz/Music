<template>
	<!-- 歌手搜索组件 -->
	<div>
		<mt-cell
						:title="item.name"
						v-for="(item,index) in singers"
						:key="index"
						@click.native="touchSinger(item)">
			<span style="font-size: 24px" v-if="item.accountId">已入住</span>
			<img slot="icon" :src="item.img1v1Url" width="90" height="90" alt="">
		</mt-cell>
	</div>
</template>

<script>
	import { doSearch } from "../../../../assets/js/apis/search";

	export default {
		props: {
			searchContent: {
				type: String,
			},
		},
		name: "SingerSearch",
		data () {
			return {
				singers: []
			}
		},
		created () {
			this.singerSearch();
		},
		methods: {
			touchSinger (data) {
				console.log(data);
			},
			async singerSearch () {
				try {
					let res = await doSearch({ keywords: this.searchContent, type: 100 });
					console.log(res);
					this.singers = res.result.artists;
				} catch (e) {
					if (e) throw e;
				}
			}
		},
	}
</script>

<style scoped>

</style>
