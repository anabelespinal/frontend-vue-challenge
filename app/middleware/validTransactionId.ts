export default defineNuxtRouteMiddleware( (to, from) => {
    const id = to.params.operationId;

    const isInvalidId = isNaN(Number(id))

    if (isInvalidId) {
        return navigateTo('/transactions')
    }
})