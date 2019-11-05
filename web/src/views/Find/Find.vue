<template>
	<!-- 发现页面 -->
	<div class="findContainer">
		<!-- 头部搜索栏组件 -->
		<nav-bar
						class="searchBar"
						:data="headerData"
						@click.native="$router.push({path:'/search'})">
		</nav-bar>
		<!-- 首页轮播图组件 -->
		<carousel class="carousel">
		</carousel>
		<!-- 首页按钮组	-->
		<div class="buttonGroup">
			<round-button
							@click.native="buttonGroups(item.title)"
							v-for="(item, index) in buttonGroup"
							:key="index"
							:styleData="item">
			</round-button>
		</div>
		<!-- 首页推荐歌单	-->
		<div class="recommendTitle" @click.native="console.log('推荐歌单')">
			<span>推荐歌单</span>
		</div>
		<div class="recommendContainer">
			<mini-muzikland
							class="child"
							v-for="(item, index) in miniMuzikland"
							:muzikland="item"
							:key="index">
			</mini-muzikland>
		</div>
	</div>
</template>

<script>
	import { getMiniMuzikland } from "../../assets/js/apis/find";
	import { getHotSearch } from "../../assets/js/apis/search";
	import NavBar from "../../components/NavBar/NavBar";
	import Carousel from "../../components/Carousel/Carousel";
	import RoundButton from "../../components/RoundButton/RoundButton";
	import MiniMuzikland from "../../components/MiniMuzikland/MiniMuzikland";


	export default {
		name: "Find",
		data () {
			return {
				miniMuzikland: [],
				headerData: {
					title: '',
					midContent: '',
					leftIcon: require('../../assets/img/mic.png'),
					mediumIcon: require('../../assets/img/zoom.png'),
					rightIcon: require('../../assets/img/playing.png')
				},
				buttonGroup: [
					{
						img: require('../../assets/img/FM.png'),
						title: '私人FM'
					},
					{
						img: require('../../assets/img/calendar.png'),
						title: '每日推荐',
						iconText: new Date().getDate()
					},
					{
						img: require('../../assets/img/muzikland.png'),
						title: '歌单'
					},
					{
						img: require('../../assets/img/topList.png'),
						title: '排行榜'
					},
				],
				isSearch: this.search,
			}
		},
		async created () {
			try {
				// 获取热搜第一作为默认搜索
				let res = await getHotSearch();
				this.headerData.midContent = res.data[0].searchWord;
				// 获取首页推荐歌单
				let res1 = await getMiniMuzikland(6);
				// console.log(res1);
				this.miniMuzikland = res1;
			} catch (e) {
				if (e) throw e;
			}
		},
		methods: {
			buttonGroups (title) {
				console.log(title);
			}
		},
		components: {
			MiniMuzikland,
			RoundButton,
			Carousel,
			NavBar
		}
	}
</script>

<style scoped lang="scss">


	.findContainer {

		padding-bottom: 55px;

		.searchBar {
			z-index: 3;
		}

		.carousel {
			margin-top: 41px;
			/*height: 150px;*/
		}

		.buttonGroup {
			display: flex;
			justify-content: space-between;
			padding: 18px 22px;
			border-bottom: .5px solid #DFDFE0;
		}

		.recommendContainer {

		}

		.recommendTitle {
			padding-top: 20px;
			width: 375px;
			font-size: 18px;
			padding-bottom: 15px;

			span {
				padding-left: 9px;
				border-left: 3px solid #A82021;
			}

			span::after {
				content: '〉';
				margin-left: 10px;
				color: #535353;
			}
		}

		.recommendContainer {
			word-break: break-all;
			max-width: 375px;


			&::after {
				content: '';
				display: block;
				clear: both;
			}

			.child {
				float: left;
				margin-bottom: 20px;


				&:not(:first-child):not(:nth-child(4)) {
					margin-left: 3px;
				}
			}

		}

	}
</style>
