<template>
	<div class="container">
		<!--<tab-container @getActive="getActive" :active="active"></tab-container>-->
		<router-view></router-view>
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
			if (this.$route.params.active) this.active = this.$route.params.active
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
