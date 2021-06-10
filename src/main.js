import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, { // 注意：此项一定要写在new Vue（{}）之前，否则会报错：[Vue warn]: Failed to resolve directive: lazy
  preload: 1.3, // 预加载高度比例
  error: '', // 图片路径出错时加载图片 此处
  loading: '', // 预加载图片
  attempt: 6, // 尝试加载图片数量
  observer: true,
  observerOptions: {
      rootMargin: '0px',
      threshold: 0.1
  }
})
Vue.prototype.$axios = axios
 
axios.defaults.baseURL = '请求地址';//后端开发环境地址
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头信息。
axios.defaults.headers.common['accessToken'] = 'FA4C308D5E8F6409E01344ADDAEB4C71';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
