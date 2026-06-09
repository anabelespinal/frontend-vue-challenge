<template>
  <PageBase v-if="renderPage">
    <div class="flex w-full justify-center pt-0 md:pt-[35px]">
      <div class="onboarding-page__wrapper-content">
        <h2 class="common-title mx-auto text-center mb-[32px]">{{ `Mi operación #${transaction.id}` }}</h2>
        <br>
        <div>Estado: {{transaction.completed ? 'Completado' : 'Inconpleto'}}</div>
        <div><strong>More Detail...</strong></div>
        <div>
          <button
            @click="goToStep"
            class="common-btn mt-4 mb-2">
            CONTINUAR
          </button>
        </div>
      </div>
    </div>
  </PageBase>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'valid-transaction-id',
})

const route = useRoute();
const {getTransactionById, renderPage, transaction} = useTransaction();

const goToStep = async () => {
  await navigateTo(`/transactions/operation/${transaction.value.id}/${transaction.value.completed ? 'congrats' : 'detail'}`);
}

onBeforeMount(async () => {
  await getTransactionById(route.params.operationId as string);
})
</script>
<style lang="scss" scoped>
</style>
