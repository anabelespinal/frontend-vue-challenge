<template>
  <div class="exchange-simulator">
    <div class="exchange-simulator__header">
      <div class="w-1/2">
        <ExchangeHeaderButton
          :active="isBuyingUSD"
          :text="`Compra ${buyRate}`"
          @toggle-exchange="changeExchangeType"
        />
      </div>
      <div class="w-1/2">
        <ExchangeHeaderButton
          :active="!isBuyingUSD"
          :text="`Venta ${sellRate}`"
          @toggle-exchange="changeExchangeType"
        />
      </div>
    </div>
    <div class="exchange-simulator__body">
      <ExchangeField
        @onChangeInput="onChangeSendAmountInput"
        :default-amount="sendAmount"
        :current-currency-id="sendCurrency"
      />
      <button>change</button>
      <ExchangeField
        label-field="Entonces recibes"
        @onChangeInput="onChangeReceiveAmountInput"
        :default-amount="receiveAmount"
        :is-send-field="false"
        :current-currency-id="sendCurrency"
      />

      <div class="flex flex-row justify-between mt-5">
        <div class="text-left flex flex-col font-montserrat text-[14px] font-k-secondary">
          <span class="font-medium">Ahorro estimado:</span>
          <span class="font-bold" v-if="savings">{{ savings?.currency }} {{ savings?.amount }}</span>
        </div>
        <div class="text-right flex flex-col font-montserrat text-[14px] font-k-secondary">
          <span class="font-medium">Koinks:</span>
          <div class="flex justify-end items-center">
            <span class="font-bold mr-2">{{ convertFormatWithComma(coins) }}</span>
            <img
              src="/icons/coin.png"
              alt="Coin"
              class="flex-shrink-0 object-contain w-[20px]"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center mt-8">
        <img
          src="/images/placeholder-1.png"
          alt="Placeholder"
          class="flex-shrink-0 object-contain mb-[30px]"
        />
        <img
          src="/images/placeholder-2.png"
          alt="Placeholder"
          class="flex-shrink-0 object-contain mb-[30px]"
        />
      </div>
    </div>

    <div class="w-full mt-4">
      <button
        @click="startTransaction"
        class="common-btn mt-4 mb-2"
        :disabled="!parseFloat(`${sendAmount}`) || !parseFloat(`${receiveAmount}`)"
      >
        INICIAR OPERACIÓN
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

// import {convertFormatWithComma} from "~/utils/utils";
import type {Transaction} from "~/types";

const transactionStore = useTransactionStore();


const {
  buyRate,
  sellRate,
  coins,
  sendAmount,
  receiveAmount,
  isBuyingUSD,
  sendCurrency,
  savings,
  activeRate,
  receiveCurrency,
  fetchRate,
  calculateExchange,
  changeExchangeType
} = useExchange();

async function onChangeSendAmountInput(val: string) {
  console.log('onChangeSendAmountInput', val);
  sendAmount.value = val;
  await calculateExchange();
}

async function onChangeReceiveAmountInput(val: string) {
  const value = parseFloat(val) ?? 0;
  const send = isBuyingUSD.value ? (value / buyRate.value) : (value * sellRate.value);
  sendAmount.value = displayWithTwoDecimals(send);
  await calculateExchange(true);
}

async function getTransactionData() {
  const data = await {
    sendAmount: sendAmount.value,
    receiveAmount: receiveAmount.value,
    exchangeRate: activeRate.value,
    sendCurrency: sendCurrency.value,
    receiveCurrency: receiveCurrency.value,
    coupon: 'KLIMA2026',
    savings: savings.value,
  };

  return data as Partial<Transaction>
}

const startTransaction = async () => {
  transactionStore.clearTransaction();

  const data = await getTransactionData();
  transactionStore.setTransaction(data as Partial<Transaction>);

  await navigateTo('/transactions/operation');
}

defineExpose({
  getTransactionData
})

onMounted(async () => {
  await fetchRate();
  await calculateExchange();
  console.log('buyRate', buyRate.value, sellRate.value, coins.value)
})

</script>

<style scoped lang="scss">
.exchange-simulator {
  @apply w-full;
  &__header {
    @apply flex items-center justify-center text-[18px] text-k-gray-60;
  }
  &__body {
    @apply px-[15px] sm:px-[50px] py-[32px] bg-white rounded-b-[8px];
  }
}
</style>