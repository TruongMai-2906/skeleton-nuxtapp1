import Vue from 'vue'
import { ValidationObserver,ValidationProvider,extend  } from 'vee-validate'
import { required, email,min } from 'vee-validate/dist/rules'

Vue.component('ValidationObserver',ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('email', {
  ...email,
  message: 'email is incorrect'
});

extend('min', {
  ...min,
  message: 'too short'
});

extend('minLen', (value: string) => {
  if (value.length >= 5){
    return true;
  }

  return 'too short';
});

