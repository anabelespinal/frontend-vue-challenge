import type {AMOUNT} from "~/types";

export const convertFormatAmount = (n: AMOUNT) => n.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

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

