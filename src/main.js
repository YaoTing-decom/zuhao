import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//1.引入mint-ui组件库中所有组件
import MintUI from "mint-ui";
//2.单独引入mint-ui组件库中样式文件
import "mint-ui/lib/style.css";
//3.注册MinUI对象
Vue.use(MintUI);

// rem适配
import './rem'

// 导入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 懒加载
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload);

//引入axios
import axios from "axios";
//配置访问服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:4000/"
//配置session
axios.defaults.withCredentials=true;
//注册
console.log(axios)
Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
