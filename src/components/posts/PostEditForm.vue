<template>
	<div class="createForm">
		<h2>Edit Post</h2>
		<form class="form" @submit.prevent="submitForm">
			<div class="box">
				<label class="box__label" for="title">Title: </label>
				<input class="box__input" id="title" type="text" v-model="title" />
			</div>
			<div class="box">
				<label class="box__label" for="contents">Contents: </label>
				<textarea
					class="box__textarea"
					id="contents"
					type="text"
					v-model="contents"
				/>
				<p v-if="!isContentsValid" class="validation-text warning">
					Text is Too Long
				</p>
			</div>
			<button type="submit">Edit</button>
		</form>
		<p class="log warning">{{ logMessage }}</p>
	</div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts'

export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: ''
		}
	},
	computed: {
		isContentsValid() {
			return this.contents.length < 200
		}
	},
	methods: {
		async submitForm() {
			const id = this.$route.params.id
			try {
				await editPost(id, {
					title: this.title,
					contents: this.contents
				})
				this.$router.push('/main')
			} catch (error) {
				console.log(error)
				this.logMessage = error
			}
		}
	},
	async created() {
		const id = this.$route.params.id
		const { data } = await fetchPost(id)
		console.log
		this.title = data.title
		this.contents = data.contents
	}
}
</script>

<style scoped>
.createForm {
	background: white;
	padding: 20px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.box {
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
}

.box__label {
	font-size: 20px;
}

.box__input {
	width: 500px;
	height: 40px;
	border-radius: 5px;
}

.box__textarea {
	height: 100px;
}

button {
	width: 200px;
	height: 40px;
	border-radius: 5px;
}

.validation-text {
	text-align: right;
}

.warning {
	color: red;
	font-weight: bold;
}
</style>
