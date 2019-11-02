<template>
	<mt-tab-container v-model="selected">
		<mt-tab-container-item id="find">
			<find @switchSearch="switchSearch" v-if="!isSearch"></find>
			<search
							class="search"
							v-if="isSearch"
							:defaultSearchKeyWords="searchKeyWords"
							@switchSearch="switchSearch">
			</search>
		</mt-tab-container-item>
		<mt-tab-container-item id="myMusic">
			<my-music></my-music>
		</mt-tab-container-item>
		<mt-tab-container-item id="friend">
			<friend></friend>
		</mt-tab-container-item>
		<mt-tab-container-item id="account">
			<account></account>
		</mt-tab-container-item>
	</mt-tab-container>
</template>

<script>
	import Find from "../../views/Find/Find";
	import MyMusic from "../../views/MyMusic/MyMusic";
	import Friend from "../../views/Friend/Friend";
	import Account from "../../views/Account/Account";
	import Search from "../../views/Search/Search";

	export default {
		components: { Search, Account, Friend, MyMusic, Find },
		props: {
			active: {
				type: String,
				default: '发现音乐'
			},
		},
		name: "TabContainer",
		data () {
			return {
				selected: this.active,
				isSearch: false,
				searchKeyWords: ''
			}
		},
		methods: {
			// 切换搜索状态
			switchSearch (keyWords) {
				this.isSearch = !this.isSearch;
				if (keyWords) this.searchKeyWords = keyWords;
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

<style scoped lang="scss">
	.mint-tab-container {
		font-size: 24px;
	}

</style>
