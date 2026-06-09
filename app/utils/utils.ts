import type {AMOUNT} from "~/types";
import {CurrencyTypes} from "~/types";
import {CURRENCY} from "~/constants";

export const getCleanNumber = (value: number | string): number => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return 0;
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

export const displayWithTwoDecimals = (value: number | string): string => {
  const num = getCleanNumber(value);
  return num.toFixed(2);
};

export const convertFormatWithComma = (n: AMOUNT) => n.toLocaleString('en-US')

export const formatAmountAndCurrency = (n: number, currency: keyof typeof CurrencyTypes) => {
  const currencySymbol = CURRENCY[`${currency}`].symbol;
  return `${currencySymbol} ${n.toLocaleString('es-PE', { minimumFractionDigits: 2 })}`
}