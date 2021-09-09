import { createModule, mutation } from "vuex-class-component";

const VuexModule = createModule({
  namespaced: "user",
  strict: false,
  target: "nuxt",
})

export class UserStore extends VuexModule {

  private firstname = "Michael";
  private lastname = "Olofinjana";
  specialty = "JavaScript";

  @mutation clearName() {
    this.firstname = "";
    this.lastname = "";
  }

  // @action async doSomethingAsync() { return 20 }

  // @action async doAnotherAsyncStuff(payload) {
  //   const number = await this.doSomethingAsyc();
  //   this.changeName({ firstname: "John", lastname: "Doe" });
  //   return payload + this.fullName;
  // }

  // Explicitly define a vuex getter using class getters.
  get fullname() {
    return this.firstname + " " + this.lastname;
  }

  // Define a mutation for the vuex getter.
  // NOTE this only works for getters.
  set fullname( name :string ) {
    const names = name.split( " " );
    this.firstname = names[ 0 ];
    this.lastname = names[ 1 ];
  }

  get bio() {
    return `Name: ${this.fullname} Specialty: ${this.specialty}`;
  }
}
