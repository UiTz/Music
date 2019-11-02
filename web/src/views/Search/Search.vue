<template>
	<!-- 搜索页面 -->
	<div class="headerContainer">
		<div class="searchBar">
			<div class="ipt">
				<img alt="" class="zoom" src="../../assets/img/zoom.png">
				<input
								:placeholder="defaultSearchKeyWords"
								@input="getSuggest"
								@keyup.enter="doSearch"
								@click="TapSearchBar"
								type="text"
								v-focus
								v-model="searchContent">
				<span @click="searchContent = '' " class="clear" v-if="searchContent !== ''">x</span>
			</div>
			<span @click="$emit('switchSearch')" class="cancel">取消</span>
		</div>
		<!-- 搜索栏下方搜索结果 默认显示搜索历史记录，如果有输入则进行联想 -->
		<div>
			<div v-show="!isShowSearchResult">
				<search-history
								:search-history="searchHistory"
								@delAllHistory="delAllHistory"
								@delHistory="delHistory"
								@historySearch="keywordsSearch"
								v-show="searchContent === ''">
				</search-history>
				<search-think
								:searchSuggest="searchSuggest"
								@thinkSearch="keywordsSearch"
								v-show="searchContent !== ''">
				</search-think>
			</div>
			<search-result
							:searchContent="searchContent"
							v-if="isShowSearchResult">
			</search-result>
		</div>
	</div>
</template>

<script>
	import { getSuggest } from '../../assets/js/apis/search'
	import SearchHistory from "../../components/SearchHistory/SearchHistory";
	import SearchThink from "../../components/SearchSuggest/SearchSuggest";
	import SearchResult from "../../components/SearchResult/SearchResult";

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
				// searchResult: {},
				searchSuggest: [],
				isShowSearchResult: false,
			}
		},
		created () {
			// 组件创建时获取本地历史记录
			this.getSearchHistory();
		},
		methods: {
			// 触摸搜索栏的时，隐藏搜索结果页面并重新匹配关键词
			TapSearchBar () {
				this.isShowSearchResult = false;
				this.searchSuggest = [];
				this.getSuggest();
			},
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
				// this.doSearch();
				this.isShowSearchResult = true;
			},
			// 进行搜索
			async doSearch () {
				if (this.searchContent === '') {
					this.searchContent = this.defaultSearchKeyWords;
					// let data = await doSearch({ keywords: this.defaultSearchKeyWords });
					// console.log(`默认搜索结果:`, data.result);
					// this.searchResult = data.result;
					this.addHistory(this.defaultSearchKeyWords);
					this.isShowSearchResult = true;
				} else {
					// let data = await doSearch({ keywords: this.searchContent });
					// console.log(`指定搜索结果:`, data.result);
					// this.searchResult = data.result;
					this.addHistory(this.searchContent);
					this.isShowSearchResult = true;
				}
			}
		},
		components: { SearchResult, SearchThink, SearchHistory },
	}
</script>

<style lang="scss" scoped>

	.headerContainer {
		background-color: #f6f6f6;
		position: relative;
		width: 375px;
		/*height: 100vh;*/

		.searchBar {
			position: fixed;
			background-color: #D13334;
			width: 375px;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 41px;
			z-index: 1;

			&::after {
				content: '';
				display: block;
				clear: both;
			}


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
					background-color: transparent;
					font-size: 16px;
					border: none;
					width: 90%;
					outline: none;

					&::placeholder {
						color: #BFBEBF;
					}

				}

				.clear {
					position: relative;
					text-align: center;
					height: 15px;
					width: 15px;
					line-height: 12px;
					font-size: 15px;
					background-color: #C1C1C1;
					margin-right: 8px;
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
