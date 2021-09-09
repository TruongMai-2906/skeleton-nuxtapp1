import { Middleware } from '@nuxt/types'

const customMiddleware: Middleware = (context) => {
  // Use context

  // if (!localStorage.getItem('image')) {
  //   context.redirect({ name: '/' })
  // }
  console.log('server:',context.app.$cookies.get('token'));
  if (!context.app.$cookies.get('token')) {
    return context.redirect('/login')
  }

}

export default customMiddleware
