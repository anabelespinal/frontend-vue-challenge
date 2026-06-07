import { defineStore } from 'pinia'
import type {Transaction} from "~/types";
import { USER_KEY } from "~/constants";
// import {removeLocalStorage} from "~/utils/localStorage";

const FAKE_TRANSACTION = {
  "sendAmount":"300",
  "receiveAmount":"1030.50",
  "exchangeRate":3.435,
  "sendCurrency":"USD",
  "receiveCurrency":"PEN",
  "coupon":"KLIMA2026",
  "savings":{"amount":15.46,"currency":"S/"}
};

export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transactions: [] as Partial<Transaction>[],
    currentTransaction: FAKE_TRANSACTION as Partial<Transaction> | null,
  }),
  getters: {
    getTransactions: (state) => state.transactions,
    getCurrentTransaction: (state) => state.currentTransaction,
    hasCurrentTransaction: (state) => !!state.currentTransaction,
  },
  actions: {
    setTransaction(payload:  Partial<Transaction>) {
      if (!payload) {
        return;
      }

      this.currentTransaction = payload;
    },
    clearTransaction() {
      this.currentTransaction = null;
    },
    addTransaction(payload: Transaction) {
      this.transactions.push(payload);
    },
  }
});