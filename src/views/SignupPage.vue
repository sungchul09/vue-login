<template>
	<div class="signupPage">
		<h1 class="signupPage__title">회원 가입 페이지</h1>
		<signup-form />
	</div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'
export default {
	components: {
		SignupForm
	}
}
</script>

<style scoped>
.signupPage {
	background: rgba(243, 237, 237, 0.897);
	display: flex;
	flex-direction: column;
	align-items: center;
}

.signupPage__title {
	font-size: 50px;
}
</style>
