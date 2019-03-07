import Vue from 'vue'
import App from './App'
import icon from "@/static/icon/uni-icon.vue"
import vali from "@/utils/validate.js"
Vue.config.productionTip = false
Vue.component('v-icon', icon);
Vue.prototype.userUrl = "https://m.gjw.com";
Vue.prototype.vali = vali;
App.mpType = 'app'
console.log(vali)
const app = new Vue({
    ...App
})
app.$mount()
