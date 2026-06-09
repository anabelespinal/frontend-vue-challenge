export default defineNuxtRouteMiddleware( (to, from) => {
    const transactionStore = useTransactionStore();
    if(transactionStore && Object.hasOwn(transactionStore, 'hasCurrentTransaction')) {
        if (!transactionStore.hasCurrentTransaction) {
            return navigateTo('/');
        }

        return;
    }
})