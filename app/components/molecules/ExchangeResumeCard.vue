<template>
  <div class="exchange_resume" v-if="exchange">
    <div class="exchange_resume__row">
      <span class="exchange_resume__label">Tú envías</span>
      <span class="exchange_resume__value font-bold">{{ formatAmountAndCurrency(parseFloat(`${exchange.sendAmount}`), exchange.sendCurrency ?? 'USD') }}</span>
    </div>
    <div class="exchange_resume__row">
      <span class="exchange_resume__label">Tú recibes</span>
      <span class="exchange_resume__value font-bold">{{ formatAmountAndCurrency(parseFloat(`${exchange.receiveAmount}`), exchange.receiveCurrency ?? 'USD') }}</span>
    </div>
    <div class="exchange_resume__row">
      <span class="exchange_resume__label">Cupón aplicado</span>
      <span class="exchange_resume__value font-bold">{{ exchange.coupon }}</span>
    </div>
    <div class="exchange_resume__row is-total">
      <span class="exchange_resume__label font-bold">Tipo de cambio utilizado</span>
      <span class="exchange_resume__value font-bold">
        <span class="text-k-red mr-3">{{ exchange.exchangeRate?.toFixed(2) }}</span>
        <span>{{ ((exchange.exchangeRate ?? 0) + 0.1).toFixed(2) }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Transaction} from "~/types";

interface Props {
  exchange: Partial<Transaction> | null
}

defineProps<Props>();

</script>
<style lang="scss" scoped>
.exchange_resume {
  @apply p-[15px] bg-white rounded-[8px];
  &__row {
    @apply flex flex-row flex-wrap justify-between font-montserrat text-[14px] font-normal text-k-secondary;
    &.is-total {
      @apply border-t-[1px] border-k-gray-25 pt-3 mt-3;
    }
  }
}
</style>
