<template>
	<mt-tab-container v-model="selected">
		<mt-tab-container-item id="发现音乐">
			<find></find>
		</mt-tab-container-item>
		<mt-tab-container-item id="我的音乐">
			<my-music></my-music>
		</mt-tab-container-item>
		<mt-tab-container-item id="朋友">
			<friend></friend>
		</mt-tab-container-item>
		<mt-tab-container-item id="账号">
			<account></account>
		</mt-tab-container-item>
	</mt-tab-container>
</template>

<script>
	import Find from "../../views/Find/Find";
	import MyMusic from "../../views/MyMusic/MyMusic";
	import Friend from "../../views/Friend/Friend";
	import Account from "../../views/Account/Account";

	export default {
		components: { Account, Friend, MyMusic, Find },
		props: {
			active: {
				type: String,
				default: '发现音乐'
			},
		},
		name: "TabContainer",
		data () {
			return {
				selected: this.active
			}
		},
		watch: {
			active (val) {
				// console.log(this.selected);
				this.selected = val;
			},
			selected (val) {
				this.$emit('getActive', val)
			}
		},
	}
</script>

<style scoped>
	.mint-tab-container {
		font-size: 24px;
	}
</style>
