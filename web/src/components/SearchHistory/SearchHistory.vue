<template>
	<div>
		<mt-cell
						v-for="(item,index) in searchHistory"
						:key="index" :title="item"
						@click.native="$emit('historySearch', item)"
						icon="shijian" slot="right">
			<button class="btn" style="" @click.stop="$emit('delHistory',index)">&#10005;</button>
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
