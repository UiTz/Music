<template>
	<!-- 专辑搜索组件 -->
	<div>
		<div class="singCell"
		     v-for="(item,index) in albums"
		     @click="touchSong(item)"
		     :key="index">
			<img :src="item.picUrl" width="95" height="95" alt="">
			<div class="leftInfo">
				<div class="title" v-text="item.name"></div>
				<div class="singer">
					<span v-cloak class="singerInfo" v-for="(item1,index1) in item.artists" :key="index1">
						{{ index1 === 0 ? item1.name : '/'+item1.name }}
					</span>
					-
					<span v-cloak>{{ item.publishTime | getDate }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { doSearch } from "../../../../assets/js/apis/search";

	export default {
		filters: {
			getDate: function (value) {
				let date = new Date(value);
				let Y = date.getFullYear() + '-';
				let M = date.getMonth() + 1 + '-';
				let D = date.getDate() + ' ';
				return Y + M + D;
			}
		},
		props: {
			searchContent: {
				type: String,
			},
		},
		name: "AlbumSearch",
		data () {
			return {
				albums: []
			}
		},
		created () {
			this.searchAlbum();
		},
		methods: {
			touchSong () {

			},
			async searchAlbum () {
				try {
					let res = await doSearch({ keywords: this.searchContent, type: 10 });
					console.log(res.result.albums);
					this.albums = res.result.albums;
				} catch (e) {
					if (e) throw e;
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.singCell {
		/*display: flex;*/
		/*justify-content: space-between;*/
		border-bottom: 1px solid #E2E2E3;
		height: 55px;
		/*vertical-align: center;*/
		/*align-items: center;*/

		img {
			margin-left: 9px;
			padding-top: 4px;
		}

		.leftInfo {
			margin-left: 70px;
			/*display: grid;*/
			/*width: 275px;*/
			/*height: 50px;*/

			.title {
				display: block;
				font-size: 16px;
				color: #527BAF;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				/*width: 275px;*/
			}

			.singer {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-size: 12px;
				color: #7D7D7F;
				/*width: 275px;*/
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

</style>
