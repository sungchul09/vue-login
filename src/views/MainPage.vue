<template>
	<div class="mainPage">
		<h1 class="page-header">Today</h1>
		<loading-spinner v-if="isLoading"></loading-spinner>
		<ul v-else>
			<PostListItem
				v-for="postItem in postItems"
				:key="postItem._id"
				:postItem="postItem"
			></PostListItem>
		</ul>
	</div>
</template>

<script>
import PostListItem from '@/components/posts/PostLIstItem.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { fetchPosts } from '@/api/index'
export default {
	components: {
		PostListItem,
		LoadingSpinner
	},
	data() {
		return {
			postItems: [],
			isLoading: false
		}
	},
	methods: {
		async fetchData() {
			this.isLoading = true
			const { data } = await fetchPosts()
			this.isLoading = false
			this.postItems = data.posts
			console.log(this.postItems)
		}
	},
	created() {
		this.fetchData()
	}
}
</script>

<style></style>
