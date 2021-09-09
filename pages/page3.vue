<template>
  <div>
    <HeaderComponent />
    <form>
      <input v-model="slug" type="text">
    </form>
    <button @click="printText"> fecth api</button>

  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Component, namespace, mixins  } from 'nuxt-property-decorator'
import Vue from 'vue';
import HeaderComponent from '~/components/organisms/Header/Header.vue'
@Component({
  components: {
    HeaderComponent
  },
})
export default class Page3 extends Vue{

  slug: string = '';
  data!: any;
  message: string = '';

  printText(){
    this.$userService.getAllAction(this.slug).then((resp: any) => {
      this.data = resp;
      console.log('this is prinText method:', this.data);
      // this.data2 = this.counterModule.getTest()
    }).catch(() => {
      console.log('something went wrong');
      this.message = 'something went wrong';
    })
  }
}
</script>

