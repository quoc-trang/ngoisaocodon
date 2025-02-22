export default defineNuxtRouteMiddleware((to, _) => {
  if (import.meta.server) {
    const userAgent = useRequestHeaders(['user-agent'])['user-agent']
    const isMobile = userAgent?.toLowerCase().includes('mobile')

    if (to.path === '/') {
      if (isMobile) {
        return navigateTo('/sd/home')
      }
      else {
        return navigateTo('/pc/home')
      }
    }
  }
})
