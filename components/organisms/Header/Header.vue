<template>
  <div>
    <p>logo: {{ logo }}</p>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Component, namespace, mixins, getModule  } from 'nuxt-property-decorator'
import Vue from 'vue';

import { vxm } from "~/store/store.vuex";

@Component({
  components: {

  },
  middleware: ['customMiddleware']
})
export default class HeaderComponent extends Vue{

  header = vxm.common.header;

  logo: string = this.header.logo;
}

</script>
