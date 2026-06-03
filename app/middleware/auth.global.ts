export default defineNuxtRouteMiddleware((to, from) => {
    const pageRequiresAuth = !!to.meta.requiresAuth;

    //TODO: change it to use an auth store
    const isLogged = false;
    const completeOnboarding = false;

    if (from.path === '/login' && to.path === '/login') {
        return
    }

    if (pageRequiresAuth) {
        if (!isLogged) {
            return navigateTo('/login');
        } else if (isLogged && !completeOnboarding) {
            if (to.path === '/onboarding') {
                return
            }
            return navigateTo('/onboarding');
        }
    }
})