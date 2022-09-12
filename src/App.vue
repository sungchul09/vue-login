<template>
	<div id="app">
		<app-header />
		<router-view />
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'

export default {
	name: 'App',
	components: {
		AppHeader
	}
}
</script>

<style>
body {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
#app {
	display: grid;
	grid-template-rows: 1fr 9fr;
	height: 100vh;
}
</style>
