<template>
  <PageBase :classes="{'onboarding-page': true}">
<!--    <template #simpleHeader>-->
<!--      <SimpleHeader :show-buton="false"/>-->
<!--    </template>-->


    <div class="flex w-full justify-center pt-0 md:pt-[35px]">
      <div class="onboarding-page__wrapper-content">
        <h2 class="common-title mx-auto text-center mb-[32px]">Mi Transferencia...</h2>
        <div>
          <button
            @click="goToReceiptPage"
            class="common-btn mt-4 mb-2">
            VER CONSTANCIA
          </button>
        </div>
      </div>
    </div>
  </PageBase>
</template>
<script setup lang="ts">
const goToReceiptPage = async () => {
  await navigateTo('/transactions/operation/1/congrats');
}
</script>
<style lang="scss" scoped>
</style>
