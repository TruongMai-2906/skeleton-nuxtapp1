// import { Plugin } from '@nuxt/types'
import Vue from 'vue'
import PostService from '~/services/post/post.service'
import UserService from '~/services/user/user.service'

declare module 'vue/types/vue' {
  interface Vue {
    $postService: PostService,
    $userService: UserService,
  }
}

Vue.prototype.$postService = new PostService
Vue.prototype.$userService = new UserService
