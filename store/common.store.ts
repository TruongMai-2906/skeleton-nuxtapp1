import { createModule, createSubModule } from "vuex-class-component";
import { HeaderStore } from "./common/header.store";

const VuexModule = createModule({
  namespaced: "common",
  strict: false,
  target: "nuxt",
})

export class CommonStore extends VuexModule {
  header = createSubModule( HeaderStore );
}
