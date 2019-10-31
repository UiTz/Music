<template>
	<!-- 单曲搜索结果页面	-->
	<div
					class="cellContainer"
					infinite-scroll-disabled="loading"
					infinite-scroll-distance="30"
					v-infinite-scroll="loadMore">
		<div class="singCell"
		     v-for="(item,index) in searchResult.songs"
		     :key="index">
			<div class="leftInfo">
				<div class="title" v-text="item.name"></div>
				<div class="singer">
					<span class="singerInfo" v-for="(item1,index1) in item.artists" :key="index1">
						{{ index1 === 0 ? item1.name : '/'+item1.name }}
					</span>
				</div>
			</div>
			<div>
				<img class="more" src="./img/more.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			searchResult: {
				type: Object,
			},
		},
		name: "SingleSearch",
		data () {
			return {}
		},
		created () {
			console.log(this.searchResult);
		},
		methods: {
			loadMore () {
				console.log('加载更多');
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

	.more {
		width: 25px;
		/*float: right;*/
		margin-top: 12.5px;
		margin-right: 14px;
	}
</style>
