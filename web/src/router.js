import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/Index/Index";
import Search from "./views/Search/Search";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'rootIndex',
			redirect: '/Index',
		},
		{
			path: '/Index',
			name: 'index',
			component: Index,
		},
		{
			path: '/Search',
			name: 'search',
			component: Search
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
