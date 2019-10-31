<template>
	<!-- 搜索结果上方导航 -->
	<mt-navbar v-model="selected" class="navbar">
		<mt-tab-item id="1">单曲</mt-tab-item>
		<mt-tab-item id="2">歌手</mt-tab-item>
		<mt-tab-item id="3">专辑</mt-tab-item>
	</mt-navbar>
</template>

<script>
	export default {
		props: {
			_selected: {
				type: String
			},
		},
		name: "NavBar",
		data () {
			return {
				selected: '1',
			}
		},
		watch: {
			_selected (index) {
				this.selected = index;
			},
			selected (index) {
				this.$emit('switchPage', index);
			}
		},
	}
</script>

<style scoped lang="scss">
	.navbar {
		position: fixed;
		width: 100%;
		top: 40px;
		z-index: 999;

		&::after {
			content: '';
			display: block;
			clear: both;
		}

	}

	.mint-navbar .mint-tab-item.is-selected {
		color: #D03132;
		border-bottom-color: #D03132;
	}
</style>

