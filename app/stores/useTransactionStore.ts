import { defineStore } from 'pinia'
import type {Transaction} from "~/types";
import { FAKE_KAMBISTA_CODE } from "~/constants";

const FAKE_TRANSACTIONS = [
  {
    "sendAmount":50,
    "receiveAmount":"170.90",
    "exchangeRate":3.418,
    "sendCurrency":"USD",
    "receiveCurrency":"PEN",
    "coupon":"KLIMA2026",
    "savings":{
      "amount":2.56,
      "currency":"S/"
    },
    "bank":{
      "name":"BBVA Continental",
      "alias":"BBVA",
      "id":"3"
    },
    "account":{
      "id":"2",
      "bank":{
        "name":"Banco de Crédito del Perú",
        "alias":"BCP",
        "id":"1"
      },
      "type": "corriente",
      "number":"44444444444444444",
      "alias":"BCP Cuenta Corriente PEN",
      "currency":"PEN"
    },
    "sourceFund":{
      "_id":"3",
      "name":"Venta de bien mueble"
    },
    "id":"1"
  }
];

export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transactions: FAKE_TRANSACTIONS as Partial<Transaction>[],
    currentTransaction: null as Partial<Transaction> | null,
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
    clearCurrentTransaction() {
      this.currentTransaction = null;
    },
    addTransaction(payload: Partial<Transaction>) {
      this.transactions.push(payload);
    },
    async markTransactionAsCompleted(id: string) {
      await this.transactions.map( (t) => {
        if (t.id === id) {
          t.code = FAKE_KAMBISTA_CODE;
          t.completed = true;
        }

        return t;
      });
    },
  }
});