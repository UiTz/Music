<template>
	<mt-tabbar v-model="selected">
		<mt-tab-item id="发现音乐">
			<img alt="发现音乐" slot="icon" src="../../assets/home_seleted.png" v-if="selected === '发现音乐'">
			<img alt="发现音乐" slot="icon" src="../../assets/home.png" v-else>
			<span class="bfont">发现音乐</span>
		</mt-tab-item>
		<mt-tab-item id="我的音乐">
			<img alt="发现音乐" slot="icon" src="../../assets/myMusic_selected.png" v-if="selected === '我的音乐'">
			<img alt="发现音乐" slot="icon" src="../../assets/myMusic.png" v-else>
			<span class="bfont">我的音乐</span>
		</mt-tab-item>
		<mt-tab-item id="朋友">
			<img alt="发现音乐" slot="icon" src="../../assets/friend_selected.png" v-if="selected === '朋友'">
			<img alt="发现音乐" slot="icon" src="../../assets/friend.png" v-else>
			<span class="bfont">朋友</span>
		</mt-tab-item>
		<mt-tab-item id="账号">
			<img alt="发现音乐" slot="icon" src="../../assets/me_selected.png" v-if="selected === '账号'">
			<img alt="发现音乐" slot="icon" src="../../assets/me.png" v-else>
			<!--<img slot="icon" src="../assets/100x100.png">-->
			<span class="bfont">账号</span>
		</mt-tab-item>
	</mt-tabbar>
</template>

<script>
	export default {
		props: {
			active: {
				type: String,
				default: '发现音乐'
			},
		},
		name: "Tabbar",
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
	.mint-tabbar > .mint-tab-item.is-selected {
		background: none;
	}

	.mint-tabbar {
		background-color: rgba(20, 20, 20, .86);
		/* 未选中时文字颜色 */
		color: #999594;
	}

	/*选中时文字颜色*/
	.mint-tabbar > .mint-tab-item.is-selected {
		color: #eeeeee;
	}
</style>
