<template>
	<!-- 单曲搜索结果页面	-->
	<div
					class="cellContainer"
					:infinite-scroll-disabled="isLoading"
					infinite-scroll-distance="30"
					v-infinite-scroll="loadMore">
		<div class="singCell"
		     v-for="(item,index) in searchResult"
		     @click="touchSong(item)"
		     :key="index">
			<div class="leftInfo">
				<div class="title" v-text="item.name"></div>
				<div class="singer">
					<span v-cloak class="singerInfo" v-for="(item1,index1) in item.artists" :key="index1">
						{{ index1 === 0 ? item1.name : '/'+item1.name }}
					</span>
					-
					<span v-text="item.album.name"></span>
				</div>
			</div>
			<div>
				<img @click.stop="touchMore(item)" class="more" src="./img/more.png" alt="">
			</div>
		</div>
		<div v-if="noMore" class="noMore">没有更多了...</div>
	</div>
</template>

<script>
	import { doSearch } from "../../../../assets/js/apis/search";

	export default {
		props: {
			searchContent: {
				type: String
			}
		},
		name: "SingleSearch",
		data () {
			return {
				isLoading: false,
				pages: 0,
				noMore: false,
				searchResult: [],
			}
		},
		created () {
			this.loadMore();
		},
		methods: {
			touchMore (item) {
				console.log('单击更多按钮', item);
			},
			// 单击歌曲事件
			touchSong (item) {
				console.log('单击了歌曲', item);
			},
			// 加载更多
			async loadMore () {
				if (this.isLoading || this.noMore) return;
				this.pages += 1;
				this.isLoading = true;
				// 分页偏移
				let pages = (this.pages - 1) * 30;
				let _songs = this.searchResult;
				try {
					let res = await doSearch({
						keywords: this.searchContent,
						offset: pages
					});
					console.log(res);
					if (res.code === 200 && res.result.songs === undefined) {
						this.noMore = true;
						return;
					}
					let songs = res.result.songs;
					this.searchResult = [..._songs, ...songs];
					this.isLoading = false;
				} catch (e) {
					this.pages -= 1;
					this.isLoading = false;
					this.$toast('加载失败...')
				}
				// setTimeout(() => {
				// 	console.log('加载完成');
				// 	this.isLoading = false;
				// }, 1000)
			}
		},
	}
</script>

<style scoped lang="scss">
	.cellContainer {
		margin-top: 90px;
		padding-bottom: 56px;
	}

	.singCell {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #E2E2E3;
		height: 55px;
		vertical-align: center;
		align-items: center;

		.leftInfo {
			margin-left: 9px;
			/*display: grid;*/
			width: 275px;
			height: 50px;

			.title {
				display: block;
				font-size: 16px;
				color: #527BAF;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				width: 275px;
			}

			.singer {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-size: 12px;
				color: #7D7D7F;
				width: 275px;
				padding-top: 3px;

				.singerInfo {
					padding-right: -2px;
					display: inline-block;
				}

			}

			.alias {
				font-size: 14px;
				color: #7D7D7F;
			}

		}

	}

	.noMore {
		margin: 10px auto;
		text-align: center;
		font-size: 18px;
		color: #7D7D7F;
	}

	.more {
		width: 25px;
		/*float: right;*/
		margin-top: 12.5px;
		margin-right: 14px;
	}
</style>
