<template>
	<div class="container">
		<tab-container @getActive="getActive" :active="active"></tab-container>
		<tab-bar @getActive="getActive" :active="active"></tab-bar>
	</div>
</template>

<script>
	import TabBar from "../../components/TabBar/TabBar";
	import TabContainer from "../../components/TabContainer/TabContainer";

	export default {
		name: "Index",
		data () {
			return {
				isPlay: false,
				active: 'find',
			}
		},
		created () {
			// let page = this.$route.params.page;
			// if(page !== '') this.active = page;
		},
		methods: {
			getActive (data) {
				this.active = data;
			},
		},
		components: {
			TabContainer,
			TabBar,
		},
	}
</script>

<style scoped lang="scss">

</style>
