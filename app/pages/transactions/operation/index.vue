<template>
  <PageBase :classes="{'onboarding-page': true}">
    <template #simpleHeader>
      <SimpleHeader :show-buton="false"/>
    </template>

    <div class="flex w-full justify-center pt-0 md:pt-[35px] px-3">
      <div class="max-w-full w-full sm:w-[445px]">
        <h2 class="common-title mx-auto text-center mb-[32px]">Completa los datos de tu operación</h2>
        <div></div>
      </div>
    </div>
  </PageBase>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'create-transaction',
})

const transactionStore = useTransactionStore();

onMounted(() => {
  console.log('urrentTransaction', transactionStore.getCurrentTransaction);
})
</script>
<style lang="scss" scoped>
</style>
