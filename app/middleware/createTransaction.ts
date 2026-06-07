export default defineNuxtRouteMiddleware( (to, from) => {
    const transactionStore = useTransactionStore();

    if (!transactionStore.hasCurrentTransaction) {
        return navigateTo('/');
    }

    return;
})