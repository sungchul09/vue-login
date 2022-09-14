<template>
	<li>
		<div class="post-title">{{ postItem.title }}</div>
		<div class="post-contents">{{ postItem.contents }}</div>
		<div class="post-time">
			{{ postItem.createdAt }}
			<span class="icon" @click="routeEditPage">✏️</span>
			<span class="icon" @click="deleteItem">🗑</span>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts'

export default {
	props: {
		postItem: {
			type: Object,
			required: true
		}
	},
	methods: {
		async deleteItem() {
			if (confirm('You want to delte it?')) {
				await deletePost(this.postItem._id)
				this.$emit('refresh')
			}
		},
		routeEditPage() {
			const id = this.postItem._id
			this.$router.push(`/post/${id}`)
		}
	}
}
</script>

<style>
li {
	list-style: none;
	border-radius: 15px;
	width: 450px;
	height: 250px;
	background: rgb(234, 234, 234);
	margin: 25px;
	position: relative;
	padding: 20px;
}

.post-title {
	font-size: 30px;
	text-align: left;
	font-weight: bold;
	margin-bottom: 10px;
}

.post-contents {
	font-size: 15px;
	text-align: left;
}
.post-time {
	color: grey;
	position: absolute;
	bottom: 20px;
	right: 20px;
}

.icon {
	margin-right: 5px;
}

.icon:hover {
	cursor: pointer;
	font-size: 20px;
}
</style>
