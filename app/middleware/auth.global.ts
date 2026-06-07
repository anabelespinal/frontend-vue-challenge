export default defineNuxtRouteMiddleware(async (to, from) => {

    if (import.meta.server) return

    const authStore = useAuthStore()

    //Wait for localStorage sync plugin to finish populating Pinia
    if (!authStore.isInitialized) {
        await new Promise<void>((resolve) => {
            const unwatch = watch(
              () => authStore.isInitialized,
              (hydrated) => {
                  if (hydrated) {
                      unwatch()
                      resolve()
                  }
              },
              { immediate: true }
            )
        })
    }

    const pageRequiresAuth = !to.meta.noRequiresAuth;
    const isLogged = authStore.isAuthenticated;
    const isOnboardingCompleted = authStore.isOnboardingCompleted;

    if (from.path === '/login' && to.path === '/login') {
        if (isLogged) {
            return navigateTo('/');
        }
        return
    }

    if (pageRequiresAuth) {
        if (!isLogged) {
            return navigateTo('/login');
        } else if (isLogged && !isOnboardingCompleted) {
            if (to.path === '/onboarding') {
                return
            }
            return navigateTo('/onboarding');
        }
    }
})