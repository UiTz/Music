import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/index/Index";
import search from "./views/search/search";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'rootIndex',
			redirect: '/index',
		},
		{
			path: '/index',
			name: 'index',
			component: Index,
		},
		{
			path: '/search',
			name: 'search',
			component: search
		},
		//{
		//  path: '/about',
		//  name: 'about',
		//  // route level code-splitting
		//  // this generates a separate chunk (about.[hash].js) for this route
		//  // which is lazy-loaded when the route is visited.
		//  component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		//}
	]
})
