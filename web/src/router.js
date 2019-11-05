import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/Index/Index";
import Find from "./views/Find/Find";
import MyMusic from "./views/MyMusic/MyMusic";
import Friend from "./views/Friend/Friend";
import Account from "./views/Account/Account";
import Search from "./views/Search/Search";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index,
			redirect: '/find',
			children: [
				{
					path: 'find',
					component: Find,
				},
				{
					path: '/search',
					component: Search
				},
				{
					path: 'mymusic',
					component: MyMusic
				},
				{
					path: 'friend',
					component: Friend
				},
				{
					path: 'account',
					component: Account
				}
			]
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
