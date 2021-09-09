<template>
  <div>
    <p> {{ name }} </p>
    <form>
      <input v-model="name" type="text">
    </form>
    <button @click="changeText(name)"> change text</button>


    <form>
      <input v-model="post.title" type="text">
      <input v-model="post.description" type="text">
    </form>
    <button @click="addPost"> add post</button>

    <ul>
      <li v-for="(item, index) in postList" :key="index">
        <a > {{ item.title }} </a>
        <a > {{ item.description }} </a>
      </li>
    </ul>

    <ValidationObserver ref="form" v-slot="{ invalid }">
      <form @submit.prevent="login()">
        <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
          <label for="email">Email</label>
          <input v-model="user.email" type="text">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="password" rules="required|minLen">
          <label for="password">Password</label>
          <input v-model="user.password" type="password">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <button :disabled="invalid">login</button>
      </form>
    </ValidationObserver>

    <NuxtLink  to="/">go homepage</NuxtLink >
  <button @click="doGoHomepage()" >go homepage</button>
  <button @click="showStoreValue()">show store value</button>
  <p>store image: {{ imageStore }}</p>
  <form>
      <input v-model="image" type="text">
  </form>
  <button @click="changeImage()">Change Image</button>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Component, namespace, mixins, getModule  } from 'nuxt-property-decorator'
import Vue from 'vue';

import { ValidationObserver,ValidationProvider  } from 'vee-validate'
import { Post } from '~/interfaces/dtos/post.dto';
import { vxm } from "~/store/store.vuex";

@Component({
  components: {
    ValidationObserver,
    ValidationProvider
  }
})
export default class MayFest extends Vue{
  name:string = 'default';
  image: string = '';
  post: Post = {title:'',description:''};
  user = {
    email: '',
    password: '',
  }

  user1 = vxm.user;
  page = vxm.page;
  imageStore = '';

  postList: Array<Post> = this.$postService.getPostList();

  changeText(){
    console.log(this.name);
  }

  addPost(){
    this.$postService.addPost(Object.assign({},this.post));
    console.log(this.postList);
  }

  login(){
    this.$userService.login(this.user).then(resp => {
      console.log(resp);
    });
  }

  doGoHomepage(){
    this.$router.push('/')
  }

  showStoreValue(){
    // console.log(store.state.myMod.someField);
    console.log(this.page.image);
  }

  changeImage(){
    vxm.page.changeImage(this.image);
    this.imageStore = this.page.image;
    localStorage.setItem('token',this.page.image)
    this.$cookies.set("token", this.page.image, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    });
    console.log(this.page.image);
  }

}
// --------------------------------------
// import Vue from 'vue'
// export default Vue.extend({
//   data() {
//     return {
//       name: '' as string,
//     }
//   },
//   methods:{
//     changeText(){
//       console.log(this.name);

//     }
//   }
// })


</script>

