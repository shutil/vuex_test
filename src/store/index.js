import Vue from 'vue'
import Vuex from 'vuex'
import HomePageStore from '../HomePageStore/store/index';
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    'home_page_store':HomePageStore
  }
})
