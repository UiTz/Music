<template>
	<!-- 首页圆形按钮组件	-->
	<div class="container">
		<div class="round">
			<img :src="styleData.img" alt="" class="icon">
			<p class="iconText" v-if="styleData.iconText" v-text="styleData.iconText"></p>
		</div>
		<p v-text="styleData.title" class="title"></p>
	</div>
</template>

<script>
	export default {
		name: "RoundButton",
		props: {
			styleData: {
				type: Object,
			},
		},
		data () {
			return {}
		},
	}
</script>

<style lang="scss" scoped>
	.container {

		width: fit-content;
		width: -moz-fit-content;

		.round {
			display: flex;
			width: 50px;
			height: 50px;
			border: 1px solid #C62328;
			border-radius: 50px;
			text-align: center;
			justify-content: center;
			vertical-align: center;
			/*background-color: #000000;*/
			align-items: center;

			.icon {
				width: 65%;
				height: 65%;
			}

			.iconText {
				padding-top: 6px;
				font-size: 14px;
				color: #C72426;
				float: left;
				margin: 0 auto;
				position: absolute;
			}
		}

		.title {
			margin-top: 8px;
			font-size: 12px;
			text-align: center;
			color: #262627;
		}
	}
</style>
