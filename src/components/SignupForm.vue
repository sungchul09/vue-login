<template>
	<div class="signupForm">
		<form class="signupForm__form" @submit.prevent="submitForm">
			<div class="box">
				<label class="box__label" for="username">id: </label>
				<input
					class="box__input"
					id="username"
					type="text"
					v-model="username"
				/>
			</div>
			<div class="box">
				<label class="box__label" for="password">pw: </label>
				<input
					class="box__input"
					id="password"
					type="text"
					v-model="password"
				/>
			</div>
			<div class="box">
				<label class="box__label" for="nickname">nickname: </label>
				<input
					class="box__input"
					id="nickname"
					type="text"
					v-model="nickname"
				/>
			</div>
			<button :disabled="!isUsernameValid || !password" type="submit">
				회원 가입
			</button>
			<p>{{ logMessage }}</p>
		</form>
	</div>
</template>

<script>
import { registerUser } from '@/api/auth'
import { validateEmail } from '@/utils/validation'

export default {
	data() {
		return {
			// form Values
			username: '',
			password: '',
			nickname: '',
			// log
			logMessage: ''
		}
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username)
		}
	},
	methods: {
		async submitForm() {
			console.log('form submit')
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname
			}
			const { data } = await registerUser(userData)
			console.log(data.username)
			this.logMessage = `${data.username}님이 가입되었습니다.`
			this.initForm()
		},
		initForm() {
			this.username = ''
			this.password = ''
			this.nickname = ''
		}
	}
}
</script>

<style>
.signupForm {
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

button {
	width: 200px;
	height: 40px;
	border-radius: 5px;
}
</style>
