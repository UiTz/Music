<template>
	<mt-header title="我的音乐">
		<router-link to="/" slot="left">
			<mt-button icon="back">返回</mt-button>
		</router-link>
		<mt-button icon="more" slot="right"></mt-button>
	</mt-header>
</template>

<script>
	// import NavBar from "../../components/NavBar/NavBar";

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
