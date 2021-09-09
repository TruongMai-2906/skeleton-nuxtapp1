
import Vuex from 'vuex'
import { createProxy, extractVuexModule } from 'vuex-class-component'
import { CommonStore } from './common.store'
import { PageStore } from './page.store'
import { UserStore } from "./user.store"

// store.vuex.ts
export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule( UserStore ),
    ...extractVuexModule( PageStore ),
    ...extractVuexModule( CommonStore ),
  }
})

export const vxm = {
  user: createProxy( store, UserStore ),
  page: createProxy( store, PageStore ),
  common: createProxy( store, CommonStore ),
}
