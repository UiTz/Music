import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from "vue-axios";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import "./assets/style/font.css"
import 'lib-flexible/flexible.js'

Vue.use(ElementUI);
Vue.use(MintUI);
Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://liujiaxin.co:3000';
// axios.defaults.baseURL = 'http://127.0.0.1:3000';
Vue.config.productionTip = false;

//eslint-disable-next-line no-unused-vars
const vm = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
