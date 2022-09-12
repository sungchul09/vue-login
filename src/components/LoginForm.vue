<template>
	<div class="loginForm">
		<form class="loginForm__form" @submit.prevent="submitForm">
			<div class="box">
				<label class="box__label" for="username">id:</label>
				<input
					id="username"
					class="box__input"
					type="text"
					v-model="username"
				/>
			</div>
			<div class="box">
				<label class="box__label" for="password">pw:</label>
				<input
					id="password"
					class="box__input"
					type="text"
					v-model="password"
				/>
			</div>
			<button :disabled="!isUsernameValid || !password" type="submit">
				로그인
			</button>
		</form>
		<p>{{ logMessage }}</p>
	</div>
</template>

<script>
import { loginUser } from '@/api/index'
import { validateEmail } from '@/utils/validation'

export default {
	data() {
		return {
			username: '',
			password: '',
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
			try {
				// business 로직
				const userData = {
					username: this.username,
					password: this.password
				}
				const { data } = await loginUser(userData)
				console.log(data.user.username)
				this.$store.commit('setUsername', data.user.username)
				this.logMessage = `${data.user.username} 님 환영합니다`
				this.$router.push('/main')
			} catch (error) {
				// error 핸들링 로직
				console.log(error.response.data)
				this.logMessage = error.response.data
				this.initForm()
			}
		},
		initForm() {
			this.username = ''
			this.password = ''
		}
	}
}
</script>

<style scoped>
.loginForm {
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
