<template>
	<div class="headerContainer">
		<div class="searchBar">
			<div class="ipt">
				<img alt="" class="zoom" src="../../assets/img/zoom.png">
				<input
								:placeholder="defaultSearchKeyWords"
								@input="getSuggest"
								@keyup.enter="doSearch"
								type="text"
								v-focus
								v-model="searchContent">
				<span @click="searchContent = '' " class="clear" v-if="searchContent !== ''">x</span>
			</div>
			<button @click="$emit('switchSearch')" class="cancel">取消</button>
		</div>
		<!-- 搜索栏下方搜索结果 默认显示搜索历史记录，如果有输入则进行联想 -->
		<div v-if="!isShowSearchResult">
			<search-history
							:search-history="searchHistory"
							@delAllHistory="delAllHistory"
							@delHistory="delHistory"
							@historySearch="keywordsSearch"
							v-if="searchContent === ''">
			</search-history>
			<search-think
							:searchSuggest="searchSuggest"
							@thinkSearch="keywordsSearch"
							v-else>
			</search-think>
		</div>
		<div v-else>

		</div>
	</div>
</template>

<script>
	import { getSuggest, doSearch } from '../../assets/js/apis/search'
	import SearchHistory from "../../components/SearchHistory/SearchHistory";
	import SearchThink from "../../components/SearchSuggest/SearchSuggest";

	export default {
		// 使用自定义指令，使input 自动获取焦点
		directives: {
			focus: {
				// 指令的定义
				inserted: function (el) {
					el.focus()
				}
			}
		},
		name: "search",
		props: {
			defaultSearchKeyWords: {
				type: String,
				default: ''
			},
		},
		data () {
			return {
				active: 'find',
				searchContent: '',
				searchHistory: [],
				// 搜索联想防抖
				antiShake: null,
				// 搜索结果
				searchResult: {},
				searchSuggest: [],
				isShowSearchResult: false,
			}
		},
		created () {
			// 组件创建时获取本地历史记录
			this.getSearchHistory();
		},
		methods: {
			// 获取搜索建议 使用定时器防抖
			getSuggest () {
				let that = this;
				clearTimeout(that.antiShake);
				that.antiShake = setTimeout(async () => {
					if (that.searchContent !== '') {
						let suggest = await getSuggest(that.searchContent);
						console.log('搜索建议', suggest);
						if (suggest.code === 200) {
							that.searchSuggest = suggest.result.allMatch;
						}
					}
				}, 350);
			},
			// 获取localStorage中的搜索历史记录
			getSearchHistory () {
				this.searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
			},
			// 保存搜索历史记录到本地
			saveSearchHistory () {
				localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
			},
			// 暂存搜索历史记录到数组中，并进行判断
			addHistory (keywords) {
				let arr = this.searchHistory;

				if (arr.indexOf(keywords) !== - 1) return;
				if (arr.length === 10) {
					arr.splice(- 1);
					arr.unshift(keywords);
				} else {
					arr.unshift(keywords);
				}

				this.saveSearchHistory();
			},
			// 从历史记录中删除一条
			delHistory (i) {
				let arr = this.searchHistory;
				arr.splice(i, 1);
				this.saveSearchHistory();
			},
			// 清除所有历史记录
			delAllHistory () {
				this.searchHistory = [];
				this.saveSearchHistory();
				this.$toast('删除成功');
			},
			getActive (data) {
				this.active = data;
			},
			// 使用选中的关键词搜索
			keywordsSearch (keywords) {
				this.searchContent = keywords;
				this.doSearch();
			},
			// 进行搜索
			async doSearch () {
				if (this.searchContent === '') {
					let data = await doSearch({ keywords: this.defaultSearchKeyWords });
					console.log(`默认搜索结果:`, data.result);
					this.searchResult = data.result;
					this.addHistory(this.defaultSearchKeyWords)
				} else {
					let data = await doSearch({ keywords: this.searchContent });
					console.log(`指定搜索结果:`, data.result);
					this.searchResult = data.result;
					this.addHistory(this.searchContent)
				}
			}
		},
		components: { SearchThink, SearchHistory },
	}
</script>

<style lang="scss" scoped>
	.headerContainer {
		background-color: #f6f6f6;
		position: fixed;
		width: 375px;
		height: 100vh;
		left: 0;
		top: 0;

		.searchBar {
			background-color: #D13334;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 41px;

			.ipt {
				background-color: #f6f6f6;
				width: 315px;
				border-radius: 25px;
				height: 27px;
				line-height: 30px;
				align-items: center;
				display: flex;


				img {
					display: block;
					height: 20px;
					margin-left: 5px;
					float: left;
				}

				input {
					float: left;
					display: block;
					/*vertical-align: middle;*/
					/*display: inline-block;*/
					font-size: 16px;
					border: none;
					width: 90%;
					/*height: 20px;*/
					outline: none;

					&::placeholder {
						color: #BFBEBF;
					}

				}

				span {
					position: fixed;
					text-align: center;
					height: 15px;
					width: 15px;
					line-height: 12px;
					font-size: 15px;
					background-color: #C1C1C1;
					top: 13px;
					right: 58px;
					color: #eeeeee;
					border-radius: 10px;
				}

			}

		}

		.mint-cell {
			background-color: rgba(0, 0, 0, 0);
		}

	}

	.mediumIcon {
		height: 14px;
		margin-right: 8px;
	}

	.cancel {
		font-size: 18px;
		color: #FFFFFF;
		margin-left: 5px;
	}

</style>
