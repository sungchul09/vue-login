<template>
	<div class="createForm">
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
			<button type="submit">Create</button>
		</form>
		<p class="log warning">{{ logMessage }}</p>
	</div>
</template>

<script>
import { createPost } from '@/api/index'

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
			try {
				const response = await createPost({
					title: this.title,
					contents: this.contents
				})
				console.log(response)
			} catch (error) {
				this.logMessage = error.response.data.message
				console.log(this.logMessage)
			}
		}
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
