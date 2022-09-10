<template>
	<div>
		<header>
			<router-link to="/login">Login</router-link> |
			<router-link to="/signup">SignupPage</router-link> |
		</header>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
}
</script>

<style></style>
