import {DEFAULT_SELL_RATE, DEFAULT_SEND_AMOUNT} from '~/constants';
import type {Savings, AMOUNT, CalculateExchangeResponse} from "~/types";
import {CurrencyTypes} from "~/types";

export const useExchange = () => {

  const { fetchCurrentRateService, calculateExchangeService } = useExchangeService()

  const loading = ref(false)
  const error = ref<string | null>(null)

  const buyRate = ref<AMOUNT>(0)
  const sellRate = ref<AMOUNT>(0)

  const sendAmount = ref<AMOUNT|null|string>(DEFAULT_SEND_AMOUNT)
  const receiveAmount = ref<AMOUNT|null|string>(0)

  const sendCurrency = ref<CurrencyTypes>(CurrencyTypes.USD)
  const receiveCurrency = ref<CurrencyTypes>(CurrencyTypes.PEN)

  const savings = ref<Savings | null>(null)

  const isBuyingUSD = computed(() => sendCurrency.value === CurrencyTypes.USD)

  const activeRate = computed(() => isBuyingUSD.value ? buyRate.value : sellRate.value)

  const coins = computed(() => {
    const sa = sendAmount.value ? parseFloat(sendAmount.value as string) : 0
    const value = isBuyingUSD.value ? sa : sa / (sellRate.value || DEFAULT_SELL_RATE)
    return Math.floor(value)
  })


  const fetchRate = async () => {
    const res = await fetchCurrentRateService();

    buyRate.value  = res.bid
    sellRate.value = res.ask
  }

  const calculateExchange = async (onlySavings=false) => {
    const sa = sendAmount.value ? parseFloat(sendAmount.value as string) : 0

    try {
      loading.value = true
      error.value = null

      const res:CalculateExchangeResponse = await calculateExchangeService(sendCurrency.value, receiveCurrency.value, sa);

      if (onlySavings) {
        savings.value = {...res.savings, ...{amount: parseFloat(res.savings.amount as string ?? '0')}} as Savings;
      } else {
        receiveAmount.value = displayWithTwoDecimals(res.exchange ?? 0)
        savings.value = {...res.savings, ...{amount: parseFloat(res.savings.amount as string ?? '0')}} as Savings;

        if (res.tc.bid) buyRate.value  = res.tc.bid;
        if (res.tc.ask) sellRate.value = res.tc.ask;
      }
    } catch {
      if (onlySavings) {
        savings.value = {...savings.value, ...{amount: 0}} as Savings;
      } else {
        const rate = isBuyingUSD.value ? buyRate.value : sellRate.value;

        receiveAmount.value = isBuyingUSD.value
          ? parseFloat((sa * rate).toFixed(2))
          : parseFloat((sa / rate).toFixed(2))

        savings.value = {...savings.value, ...{amount: 0}} as Savings;
      }
    } finally {
      loading.value = false
    }
  }

  const changeExchangeType = async () => {
    sendCurrency.value = isBuyingUSD.value ? CurrencyTypes.PEN : CurrencyTypes.USD;
    receiveCurrency.value = isBuyingUSD.value ? CurrencyTypes.PEN : CurrencyTypes.USD;

    await calculateExchange();
  };

  return {
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
  }
}