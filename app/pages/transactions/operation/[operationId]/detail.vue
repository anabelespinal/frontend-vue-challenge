<template>
  <PageBase v-if="renderPage">
    <template #simpleHeader>
      <SimpleHeader
        :show-buton="false"
        show-back back-url="/"
        show-progress-bar
        :current-step-index="1"
      />
    </template>

    <div class="flex w-full justify-center">
      <div class="w-full sm:max-w-[535px] flex flex-col items-center">
        <h3 class="py-3 font-montserrat text-k-gray-60 font-medium text-[16px] text-center mb-4">
          El tipo de cambio podría actualizarse a las: <span class="font-bold text-[20px]">13:15</span>
        </h3>

        <div class="detail_resume">
          <img
            src="/images/transfer-to-k.png"
            alt="Transfiere a Kambista"
            class="w-[77px] flex-shrink-0 object-contain mb-[30px]"
          />

          <h2 class="common-title mx-auto text-center">Transfiere a Kambista</h2>
          <p class="font-montserrat text-k-secondary font-light text-[14px] text-center inline-block mt-[10px] mb-[15px] px-2">
            Transfiere desde tu app bancaria y guarda el <span class="underline font-bold">número o código de operación</span> para el siguiente paso.
          </p>

          <div class="detail_resume__box">
            <div class="detail_resume__row">
              <span class="detail_resume__label">Banco</span>
              <span class="detail_resume__value font-bold">{{ KAMBISTA_BANK_ACCOUNT.bank }}</span>
            </div>
            <div class="detail_resume__row">
              <span class="detail_resume__label">Monto</span>
              <span class="detail_resume__value font-bold">{{ formatAmountAndCurrency(parseFloat(`${transaction?.sendAmount}`), transaction?.sendCurrency ?? 'USD') }}</span>
            </div>
            <div class="detail_resume__row">
              <span class="detail_resume__label">Número de cuenta</span>
              <span class="detail_resume__value font-bold">{{ KAMBISTA_BANK_ACCOUNT.accountNumber }}</span>
            </div>
            <div class="detail_resume__row">
              <span class="detail_resume__label">RUC</span>
              <span class="detail_resume__value font-bold">{{ KAMBISTA_BANK_ACCOUNT.ruc }}</span>
            </div>
            <div class="detail_resume__row">
              <span class="detail_resume__label">Titular de la cuenta</span>
              <span class="detail_resume__value font-bold">{{ KAMBISTA_BANK_ACCOUNT.accountHolder }}</span>
            </div>
            <div class="detail_resume__row">
              <span class="detail_resume__label">Tipo de cuenta</span>
              <span class="detail_resume__value font-bold">{{ KAMBISTA_BANK_ACCOUNT.accountType }}</span>
            </div>
          </div>
        </div>

        <div class="mt-6 w-full">
          <button @click="handleContinue" class="common-btn">
            YA HICE MI TRANSFERENCIA
          </button>
        </div>
      </div>
    </div>
  </PageBase>
</template>
<script setup lang="ts">
import {KAMBISTA_BANK_ACCOUNT} from "~/constants";

definePageMeta({
  middleware: 'valid-transaction-id',
})

const route = useRoute();
const {getTransactionById, renderPage, transaction} = useTransaction();

const handleContinue = async () => {
  await navigateTo(`/transactions/operation/${transaction.value?.id}/receipt`);
}

onBeforeMount(async () => {
  await getTransactionById(route.params.operationId as string);
})

</script>
<style lang="scss" scoped>
.detail_resume {
  @apply px-[30px] pt-[35px] pb-[20px] bg-white rounded-[8px] w-full border-[1px] border-k-gray-23 flex flex-col items-center;
  &__row {
    @apply flex flex-row flex-wrap justify-between font-montserrat text-[12px] font-bold text-k-gray-60 mb-2;
    &.is-total {
      @apply border-t-[1px] border-k-gray-25 pt-3 mt-3;
    }
  }
  &__value {
    @apply text-[14px] text-k-secondary;
  }
  &__box {
    @apply p-[15px] rounded-[8px] w-full border-[1px] border-k-gray-30;
  }
}
</style>
