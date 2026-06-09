<template>
  <PageBase v-if="renderPage">
    <template #simpleHeader>
      <SimpleHeader
        :show-buton="false"
      />
    </template>

    <div class="flex w-full justify-center">
      <div class="w-full sm:max-w-[480px] flex flex-col items-center">
        <div class="detail_resume">
          <img
            src="/images/congrtas.png"
            alt="Constancia enviada"
            class="w-[103px] flex-shrink-0 object-contain mb-[30px]"
          />
          <h2 class="common-title mx-auto text-center mb-7">¡Constancia enviada!</h2>

          <div class="detail_resume__row">
            <span class="detail_resume__label">Código Kambista</span>
            <span class="detail_resume__value font-bold">{{ transaction?.code ?? '-' }}</span>
          </div>
          <div class="font-montserrat text-k-gray-60 font-medium text-[12px] w-full text-left mb-2">
            <span>*Usa tu código para dar seguimiento a tu operación.</span>
          </div>
          <div class="detail_resume__row">
            <span class="detail_resume__label">Monto a recibir</span>
            <span class="detail_resume__value font-bold">{{ formatAmountAndCurrency(parseFloat(`${transaction?.receiveAmount}`), transaction?.receiveCurrency ?? 'USD') }}</span>
          </div>
          <div class="detail_resume__row">
            <span class="detail_resume__label">Tiempo estimado de espera</span>
            <span class="detail_resume__value font-bold">20h 15min</span>
          </div>
        </div>

        <div class="mt-6 w-full">
          <img
            src="/images/ad-congrats.png"
            alt="Constancia enviada"
            class="w-full flex-shrink-0 object-contain mb-4"
          />

          <p class="font-montserrat text-k-secondary font-light text-[14px] text-center inline-block mt-[10px] mb-[15px] px-2 w-[90%]">
            Adjunta la constancia de tu transferencia para poder verificar tu operación.
          </p>

          <button class="common-btn mt-4 mb-2" @click="handleContinue">VOLVER A INICIO</button>
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
const {getTransactionById, renderPage, transaction, loading, completeTransaction} = useTransaction();

const handleContinue = () => {
  navigateTo(`/`);
}

onBeforeMount(async () => {
  await getTransactionById(route.params.operationId as string);
})

</script>
<style lang="scss" scoped>
.detail_resume {
  @apply px-[30px] pt-[35px] pb-[20px] bg-white rounded-[8px] w-full border-[1px] border-k-gray-23 flex flex-col items-center;
  &__row {
    @apply flex flex-row flex-wrap justify-between font-montserrat text-[12px] font-bold text-k-gray-60 mb-2 w-full;
    &.is-total {
      @apply border-t-[1px] border-k-gray-25 pt-3 mt-3;
    }
  }
  &__value {
    @apply text-[14px] text-k-secondary;
  }
}
</style>
