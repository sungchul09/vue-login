<template>
	<header class="header">
		<div class="header__title">
			<router-link class="header__title--link" to="/"
				>🎫 Login Test Page</router-link
			>
		</div>
		<div class="header__menu">
			<template v-if="$store.getters.isLogin">
				<span class="header__menu--username">{{ $store.state.username }}</span>
				<a href="javascript:;" @click="logoutUser">Logout</a>
			</template>
			<template v-else>
				<router-link to="/login" class="header__menu--link">Login</router-link>
				<router-link to="/signup" class="header__menu--link"
					>SignupPage</router-link
				>
			</template>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin
		}
	},
	methods: {
		logoutUser() {
			this.$store.commit('clearUsername')
			this.$router.push('/')
		}
	}
}
</script>

<style scpoed>
.header {
	background: rgb(17, 170, 127);
	font-size: 25px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
}

.header__title--link {
	text-decoration: none;
	font-weight: bold;
	font-size: 40px;
	color: rgb(255, 255, 255);
}

.header__menu--username {
	margin-right: 20px;
	color: white;
}

.header__menu--link {
	color: white;
	text-decoration: none;
	font-weight: bold;
}

.router-link-exact-active {
	color: rgb(37, 103, 92);
	font-weight: bold;
}

.header a {
	text-decoration: none;
	margin-right: 20px;
}
</style>
