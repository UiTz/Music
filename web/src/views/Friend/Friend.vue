<template>
	<div>
		<mt-header title="动态">
			<router-link to="/" slot="left">
				<mt-button icon="tianjiahaoyou">
				</mt-button>
			</router-link>
			<mt-button icon="zhengzaibofang1" slot="right"></mt-button>
		</mt-header>
	</div>
</template>

<script>

	export default {
		name: "Friend",
		data () {
			return {}
		}
	}
</script>

<style scoped>
	.mint-header {
		background-color: #CF2835;
	}
</style>
