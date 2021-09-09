import { createModule, mutation } from "vuex-class-component";

const VuexModule = createModule({
  namespaced: "page",
  strict: false,
  target: "nuxt",
})

export class PageStore extends VuexModule {

  image: string = '';

  @mutation changeImage(value: string){
    this.image = value;
  }

  $subscribe = {
    changeImage( payload: string ) {
      console.log( `changeImage was called with payload: ${payload}`)
    }
  }
}
