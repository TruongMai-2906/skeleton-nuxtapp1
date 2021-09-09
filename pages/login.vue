<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ invalid }">
      <form @submit.prevent="login()">
        <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
          <label for="email">{{ $t('user.email') }}</label>
          <input v-model="user.email" type="text">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="password" rules="required|minLen">
          <label for="password">{{ $t('user.password') }}</label>
          <input v-model="user.password" type="password">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <button :disabled="invalid">{{ $t('button.login') }}</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Component, namespace, mixins, getModule  } from 'nuxt-property-decorator'
import Vue from 'vue';

import { ValidationObserver,ValidationProvider  } from 'vee-validate'

import { vxm } from "~/store/store.vuex";

@Component({
  components: {
    ValidationObserver,
    ValidationProvider
  }
})
export default class Login extends Vue{
  user = {
    email: '',
    password: '',
  }

  page = vxm.page;

  login(){
    // this.$userService.login(this.user).then(resp => {
    //   console.log(resp);
    // });
    this.$userService.loginDummy(this.user);
    this.$cookies.set("token", this.user.email, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    });

    this.$router.push('/profile')
  }


  // changeImage(){
  //   vxm.page.changeImage(this.image);
  //   this.imageStore = this.page.image;
  //   localStorage.setItem('token',this.page.image)
  //   this.$cookies.set("token", this.page.image, {
  //     path: "/",
  //     maxAge: 60 * 60 * 24 * 7
  //   });
  //   console.log(this.page.image);
  // }

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

