<template>
	<div class="loginPage">
		<h1 class="loginPage__title">로그인 페이지</h1>
		<login-form />
	</div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
export default {
	name: 'LoginPage',
	components: {
		LoginForm
	}
}
</script>

<style scoped>
.loginPage {
	background: rgba(243, 237, 237, 0.897);
	display: flex;
	flex-direction: column;
	align-items: center;
}

.loginPage__title {
	font-size: 50px;
	margin-bottom: 50px;
}
</style>
