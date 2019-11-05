<template>
	<div>
		<mt-tabbar fixed id="tabbbar" v-model="selected">
			<mt-tab-item @click.native="goTo" id="find">
				<img alt="发现音乐" slot="icon" src="../../assets/img/home_seleted.png" v-if="selected === 'find'">
				<img alt="发现音乐" slot="icon" src="../../assets/img/home.png" v-else>
				<span class="bfont">发现音乐</span>
			</mt-tab-item>
			<mt-tab-item @click.native="goTo" id="mymusic">
				<img alt="发现音乐" slot="icon" src="../../assets/img/myMusic_selected.png" v-if="selected === 'myMusic'">
				<img alt="发现音乐" slot="icon" src="../../assets/img/myMusic.png" v-else>
				<span class="bfont">我的音乐</span>
			</mt-tab-item>
			<mt-tab-item @click.native="goTo" id="friend">
				<img alt="发现音乐" slot="icon" src="../../assets/img/friend_selected.png" v-if="selected === 'friend'">
				<img alt="发现音乐" slot="icon" src="../../assets/img/friend.png" v-else>
				<span class="bfont">朋友</span>
			</mt-tab-item>
			<mt-tab-item @click.native="goTo" id="account">
				<img alt="账号" slot="icon" src="../../assets/img/me_selected.png" v-if="selected === 'account'">
				<img alt="账号" slot="icon" src="../../assets/img/me.png" v-else>
				<span class="bfont">账号</span>
			</mt-tab-item>
		</mt-tabbar>
		<div class="bg-blur"></div>
	</div>
</template>

<script>
	export default {
		// props: {
		// 	active: {
		// 		type: String,
		// 		default: 'find'
		// 	},
		// },
		name: "TabBar",
		data () {
			return {
				selected: 'find'
			}
		},
		created () {
			let path = this.$route.path;
			path = path.slice(1);
			console.log(path);
			if ((path !== '') && path === ('find' || "mymusic" || "account" || "friend")) this.active = path;
		},
		methods: {
			goTo () {
				this.$router.push({ path: '/' + this.selected })
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
		background-color: rgba(20, 20, 20, .99);
		/*filter: blur(1px);*/
		/* 未选中时文字颜色 */
		color: #999594;
	}


	/*选中时文字颜色*/
	.mint-tabbar > .mint-tab-item.is-selected {
		color: #eeeeee;
	}
</style>
