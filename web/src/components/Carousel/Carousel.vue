<template>
	<!-- 轮播图组件 -->
	<mt-swipe :auto="0" class="carouselContainer">
		<mt-swipe-item class="carouselItem" v-for="(item,index) in carousel" :key="index">
			<div class="carouselImgContainer">
				<img class='carouselImg' :src="item.pic" alt="">
				<div :class="item.titleColor" class="badge" v-text="item.typeTitle"></div>
			</div>
		</mt-swipe-item>
	</mt-swipe>
</template>

<script>
	import { getCarousel } from "../../assets/js/apis/carousel";

	export default {
		name: "Carousel",
		data () {
			return {
				carousel: {}
			}
		},
		methods: {
			async getCarousel () {
				try {
					let res = await getCarousel({
						type: 2
					});
					this.carousel = res.banners;
				} catch (e) {
					this.getCarousel();
				}
			}
		},
		created () {
			this.getCarousel()
		}
	}
</script>

<style scoped lang="scss">

	.mint-swipe-indicator {
		opacity: 1;
		background: #6D6D6E;
	}

	.mint-swipe-indicators .is-active {
		background: #C62526;
	}

	.carouselContainer {
		height: 150px;

		.carouselItem {

			.carouselImgContainer {
				position: absolute;
				height: 150px;
				width: 100%;

				img {
					width: 100%;
					height: 100%;
				}

				.badge {
					width: fit-content;
					width: -moz-fit-content;
					float: right;
					display: block;
					position: relative;
					height: 20px;
					font-size: 12px;
					bottom: 33px;
					right: 0;
					padding: 0 10px;
					color: #F6EAE8;
					line-height: 20px;
					border-top-left-radius: 25px;
					border-bottom-left-radius: 25px;
				}

				.blue {
					background-color: #4B75CC;
				}

				.red {
					background-color: #C73635;
				}
			}

		}
	}

</style>
