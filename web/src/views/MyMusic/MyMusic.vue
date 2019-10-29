<template>
	<mt-header title="我的音乐">
		<router-link to="/" slot="left">
			<mt-button icon="yun">
			</mt-button>
		</router-link>
		<mt-button icon="zhengzaibofang1" slot="right"></mt-button>
	</mt-header>
</template>

<script>

	export default {
		name: "MyMusic",
		data () {
			return {}
		},
	}
</script>

<style scoped>
	.mint-header {
		background-color: #CF2835;
	}
</style>
