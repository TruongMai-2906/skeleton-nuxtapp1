<template>
  <div>
    <p>{{ $t('user.email') }}: {{ user.email }}</p>
    <p>{{ $t('user.password') }}: {{ user.password }}</p>
    <button @click="logout()">{{ $t('button.logout') }}</button>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Component, namespace, mixins, getModule  } from 'nuxt-property-decorator'
import Vue from 'vue';

import { ValidationObserver,ValidationProvider  } from 'vee-validate'

import { vxm } from "~/store/store.vuex";
import { User } from '~/interfaces/dtos/user.dto';

@Component({
  components: {
    ValidationObserver,
    ValidationProvider
  },
  middleware: ['customMiddleware']
})
export default class Profile extends Vue{

  user: User = {
    email: '',
    password:''
  }

  page = vxm.page;

  mounted() {
    this.user = JSON.parse((localStorage.getItem('user')) as string);
  }

  logout(){
    // this.$userService.login(this.user).then(resp => {
    //   console.log(resp);
    // });

    this.$cookies.remove("token");
    localStorage.removeItem('user');
    this.$router.push('/login')
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

