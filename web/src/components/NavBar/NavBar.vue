<template>
	<div>
		<div class="headerContainer">
			<img :src="data.leftIcon" alt="" class="leftIcon">
			<div @click="$emit('touchSearchBar')" class="searchBar">
				<img :src="data.mediumIcon" alt="" class="mediumIcon" v-if="data.mediumIcon">
				<span class="title" v-text="data.midContent"></span>
			</div>
			<img :src="data.rightIcon" alt="" class="rightIcon">
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
		methods: {}
	}
</script>

<style lang="scss" scoped>


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

		.searchBar {
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


</style>
