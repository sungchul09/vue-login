import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/LoginPage.vue')
		},
		{
			path: '/signup',
			name: 'signup',
			component: () => import('@/views/SignupPage.vue')
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue')
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue')
		}
	]
})
