export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Navigation from: ', from.path, ' to ', to.path)
})
  