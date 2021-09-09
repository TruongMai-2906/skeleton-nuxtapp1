// import { getModule } from 'vuex-module-decorators'
import { Environment } from "~/environments/environment";
import HttpUtils from "~/utils/http";
import {User} from "~/interfaces/dtos/user.dto"
import { vxm } from "~/store/store.vuex";
// import {store} from '@/store'
// import { myModule } from "~/store";
// import MyModule from '~/store/mymodule'
class UserService {

  // myMod = getModule(MyModule)

  public login(user: User) {
    const slug = Environment.endpoint.systemEndpoint.careerEndpoint;
    console.log('slug:', slug);
    console.log('user:', user);

    return HttpUtils.doPost(slug, user);
  }

  public loginDummy(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getAllAction(slug: string): Promise<any>{

    console.log('environment:', Environment.endpoint.systemEndpoint.careerEndpoint);

    return HttpUtils.doGet(slug)
  }

  getDataStore(){
    // console.log('store:',store.state.myMod.someField);
    // console.log('store:', myModule.axles);
    // console.log('store:', this.myMod.getSomeField);
    // console.log('store:',store.state.);
    return vxm.user.fullname
  }

}

export default UserService
