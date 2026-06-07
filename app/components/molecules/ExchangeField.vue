<template>
  <div class="exchange-field">
    <div class="exchange-field__content">
      <span class="exchange-field__label">{{ labelField }}</span>
      <input
        type="text"
        :value="defaultAmount"
        class="exchange-field__input"
        inputmode="decimal"
        @keydown="blockNonDigits"
        @input="onChangeValue"
      />
    </div>
    <div class="exchange-field__currency">
      <span>{{ currencyName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {CURRENCY} from '~/constants';
import type {AMOUNT} from "~/types";

interface Props {
  labelField?: string;
  currentCurrencyId?: string;
  defaultAmount: AMOUNT | null | string;
  isSendField?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  labelField: '¿Cuánto envías?',
  currentCurrencyId: CURRENCY.USD.key,
  isSendField:true,
});

const emit = defineEmits<{
  (e: 'onChangeInput', event:string): void
}>();

const blockNonDigits = (event: KeyboardEvent) => {
  const target = event.target as HTMLInputElement
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight']
  if (allowedKeys.includes(event.key) || event.ctrlKey || event.metaKey) {
    return
  }
  if (event.key === '.') {
    if (target.value.includes('.')) {
      event.preventDefault();
    }
    return
  }
  if (!/^[0-9]$/.test(event.key)) {
    event.preventDefault();
  }
}
const onChangeValue = (event:Event) => {
  let val = ((event.target as HTMLInputElement).value) || '';
  emit('onChangeInput', val);
}

const currencyName = computed(() => {
  if(props.currentCurrencyId === CURRENCY.USD.key) {
    return props.isSendField ? CURRENCY.USD.name : CURRENCY.PEN.name;
  } else {
    return props.isSendField ? CURRENCY.PEN.name : CURRENCY.USD.name;
  }
})

</script>
<style lang="scss" scoped>
.exchange-field {
  @apply w-full bg-transparent flex flex-row font-montserrat justify-between;
  &__content {
    @apply flex flex-col rounded-l-[8px] py-[10px] sm:py-[16px] px-[19px] sm:px-[25px] bg-k-gray-25;
    //width: calc(100% - 160px);
  }
  &__label {
    @apply text-[14px] font-semibold text-k-secondary;
  }
  &__input {
    @apply text-[20px] font-bold text-k-secondary bg-transparent pl-2 focus:outline-none w-full;
  }
  &__currency {
    @apply flex flex-wrap items-center justify-center bg-k-secondary text-[16px] sm:text-[20px] font-extrabold text-white rounded-r-[8px] w-[115px] sm:w-[160px];
  }
}
</style>