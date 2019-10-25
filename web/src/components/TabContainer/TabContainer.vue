<template>
	<mt-tab-container v-model="selected" swipeable>
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
	import Find from "./Find/Find";
	import MyMusic from "./MyMusic/MyMusic";
	import Friend from "./Friend/Friend";
	import Account from "./Account/Account";

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

</style>
