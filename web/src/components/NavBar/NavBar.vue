<template>
	<div id="header">
		<!--<mt-header>-->
		<!--	<mt-button icon="zhengzaibofang" slot="right" @click.native="headerclickleft()">-->
		<!--	</mt-button>-->
		<!--</mt-header>-->
		<div class="headerContainer">
			<img class="leftIcon" :src="data.leftIcon" alt="">
			<router-link to="/search">
				<div class="myHeader">
					<img class="mediumIcon" :src="data.mediumIcon" alt="">
					<!--{{ data.title }}-->
					<span class="title" v-text="data.title"></span>
				</div>
			</router-link>
			<img class="rightIcon" :src="data.rightIcon" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		props: ['data'],
		name: "Header",
		data () {
			return {}
		},
		mounted () {
			// console.log(this.data);
		},
		methods: {
			headerclickleft () {
				this.$emit('left-click')
			}
		}
	}
</script>

<style scoped lang="scss">
	#header {

		height: 41px;


		.headerContainer {
			background-color: #D13334;
			height: 41px;
			position: fixed;
			width: 375px;
			/*height: 40px;*/
			left: 0;
			top: 0;


			.leftIcon {
				position: fixed;
				margin-left: 15px;
				top: 0;
				top: calc(6px + constant(safe-area-inset-top));
				top: calc(6px + env(safe-area-inset-top));
				height: 25px;
			}

			.rightIcon {
				position: fixed;
				right: 13px;
				top: 0;
				top: calc(6px + constant(safe-area-inset-top));
				top: calc(6px + env(safe-area-inset-top));
				height: 25px;
			}

			.myHeader {
				display: flex;
				align-items: center;
				justify-content: center;
				position: fixed;
				width: 260px;
				height: 27px;
				left: 54px;
				top: 0;
				top: calc(6px + constant(safe-area-inset-top));
				top: calc(6px + env(safe-area-inset-top));
				background: #ffffff;
				border-radius: 16px;
				z-index: 9999;
				color: #BFBEBF;

				.title {
					font-size: 14px;
				}

				.mediumIcon {
					height: 14px;
					margin-right: 8px;
				}

			}
		}


	}
</style>
