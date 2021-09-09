import { createModule } from "vuex-class-component";

const VuexModule = createModule({
  namespaced: "header",
  strict: false,
  target: "nuxt",
})

export class HeaderStore extends VuexModule {

  logo: string = "asset/banner/banner.jpg"

}
