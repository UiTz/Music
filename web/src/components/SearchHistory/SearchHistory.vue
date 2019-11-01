<template>
	<!-- 搜索历史 -->
	<div class="historyContainer">
		<mt-cell
						v-for="(item,index) in searchHistory"
						:key="index" :title="item"
						@click.native="$emit('historySearch', item)"
						icon="shijian" slot="right">
			<span class="btn" style="" @click.stop="$emit('delHistory',index)">&#10005;</span>
		</mt-cell>
		<mt-button
						v-if="searchHistory.length !== 0"
						type="danger" size="large"
						@click.stop="$emit('delAllHistory')">
			清空搜索历史
		</mt-button>
	</div>
</template>

<script>
	export default {
		props: {
			searchHistory: {
				type: Array,
			},
		},
		name: "SearchHistory",
		data () {
			return {}
		},
		methods: {},
	}
</script>

<style scoped lang="scss">
	.historyContainer {
		padding-top: 41px;
		padding-bottom: 55px;
	}

	.btn {
		font-size: 18px;
		margin: 10px;
	}

	.mint-cell-text {
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		/*width: 80%;*/
	}

	.mint-cell-title {
		overflow: hidden;
	}

	.mint-button--danger {
		background-color: #D13334;
	}
</style>
