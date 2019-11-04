<template>
	<!-- 发现页面 -->
	<div class="findContainer">
		<!-- 头部搜索栏组件 -->
		<nav-bar
						:data="headerData"
						@touchSearchBar="$emit('switchSearch',headerData.midContent)">
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
	</div>
</template>

<script>
	import NavBar from "../../components/NavBar/NavBar";
	import { getHotSearch } from "../../assets/js/apis/find.js";
	import Carousel from "../../components/Carousel/Carousel";
	import RoundButton from "../../components/RoundButton/RoundButton";


	export default {
		name: "Find",
		data () {
			return {
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
				isSearch: this.search
			}
		},
		async created () {
			// 获取热搜第一作为默认搜索
			let res = await getHotSearch();
			// console.log(res.data.data[0]);
			this.headerData.midContent = res.data[0].searchWord
		},
		methods: {
			// touchSearchBar () {
			// },
			buttonGroups (title) {
				console.log(title);
			}
		},
		components: {
			RoundButton,
			Carousel,
			NavBar
		}
	}
</script>

<style scoped lang="scss">


	.findContainer {

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

	}
</style>
