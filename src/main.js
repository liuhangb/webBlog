import Vue from 'vue'
import App from './App.vue'
import { getParamsFormUrl } from './utils/tools'

import VueI18n from 'vue-i18n'
import messages from './i18n'
import router from '@/router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

Vue.use(VueI18n);
if(sessionStorage.getItem('lang')){
  window.lang = sessionStorage.getItem('lang');
}else{
  window.lang = getParamsFormUrl().lang || 'en';
}

const i18n = new VueI18n({
  locale: window.lang,
  messages
});

new Vue({
  router,
  render: h => h(App),
  i18n,
}).$mount('#app')
