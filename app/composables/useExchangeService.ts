import {FETCH_RATE_ENDPOINT, CALCULATE_ENDPOINT} from '~/constants';
import type { CurrentRateResponse, FetchRateHttpResponse, CurrencyTypes, AMOUNT, CalculateExchangeResponse} from "~/types";

export const useExchangeService = () => {

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