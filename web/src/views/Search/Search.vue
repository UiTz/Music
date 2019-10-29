<template>
	<div class="headerContainer">
		<div class="searchBar">
			<div class="ipt">
				<img alt="" class="zoom" src="../../assets/img/zoom.png">
				<input :placeholder="defaultSearchKeyWords" @keyup.enter="doSearch" type="text" v-model="searchContent"
				       v-focus>
				<span @click="searchContent = '' " class="clear" v-if="searchContent !== ''">x</span>
			</div>
			<button @click="$emit('switchSearch')" class="cancel">取消</button>
		</div>
		<!-- 搜索栏下方搜索结果 默认显示搜索历史记录，如果有输入则进行联想 -->

	</div>
</template>

<script>
	import { getSuggest, doSearch } from '../../assets/js/apis/search'

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
				searchContent: ''
			}
		},
		methods: {
			getActive (data) {
				this.active = data;
			},
			async doSearch () {
				if (this.searchContent === '') {
					let data = await doSearch({ keywords: this.defaultSearchKeyWords });
					console.log(`默认搜索结果:`, data);
				} else {
					let data = await doSearch({ keywords: this.searchContent });
					console.log(`指定搜索结果:`, data);
				}
			}
		},
		components: {},
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
