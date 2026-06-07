import {FETCH_RATE_ENDPOINT, CALCULATE_ENDPOINT} from '~/constants';
import type {User, APIError, CurrentRateResponse, FetchRateHttpResponse, CurrencyTypes, AMOUNT, CalculateExchangeResponse} from "~/types";
import {DocumentTypes, APIErrorTypes} from "~/types";
// import {useUserStore} from "~/stores/useUserStore";

export const useExchangeService = () => {
  // const userStore = useUserStore();

  async function fetchCurrentRateService(): Promise<CurrentRateResponse> {
    try {
      const res = await $fetch<FetchRateHttpResponse>(FETCH_RATE_ENDPOINT);
      return res as CurrentRateResponse;

    } catch (error) {
      throw error
    }
  }

  async function calculateExchangeService(
    sendCurrency:CurrencyTypes,
    receiveCurrency:CurrencyTypes,
    amount:AMOUNT
  ): Promise<CalculateExchangeResponse> {
    try {
      console.log("fetchCurrentRateService called", sendCurrency, receiveCurrency, amount);
      const url = `${CALCULATE_ENDPOINT}?originCurrency=${sendCurrency ?? 0}&destinationCurrency=${receiveCurrency ?? 0}&amount=${amount}&active=S`
      const res:CalculateExchangeResponse = await $fetch<CalculateExchangeResponse>(url)
      return res;

    } catch (error) {
      throw error
    }
  }

  return {
    fetchCurrentRateService,
    calculateExchangeService
  }
}