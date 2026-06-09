import {type Bank, BankAccountTypes, CurrencyTypes} from "~/types";

const CREDENTIALS = {
  email: 'yorlanaespinal@gmail.com',
  password: '123456'
};

const DUPLICATED_DNI_NUMBER = '12345678';

const LOGGED_CREDENTIALS = {
  email: 'yorlanaespinal@gmail.com',
  onboarding: false
};

const AUTH_USER_KEY = 'logged_user';
const USER_KEY = 'stored_user';
const FAKE_KAMBISTA_CODE = '  km20ttfff';

const CURRENCY = {
  USD: {
    key: 'USD',
    name: 'Dólares',
    symbol: '$',
  },
  PEN: {
    key: 'PEN',
    name: 'Soles',
    symbol: 'S/',
  },
};

const FETCH_RATE_ENDPOINT = 'https://api.kambista.com/v1/exchange/kambista/current';
const CALCULATE_ENDPOINT = 'https://api.kambista.com/v1/exchange/calculates';

const DEFAULT_BUY_RATE = 3.68
const DEFAULT_SELL_RATE = 3.72
const DEFAULT_SEND_AMOUNT = 50

const ACCOUNT_TYPES = {
  AHORROS: {
    key: 'ahorros',
    name: 'Ahorros',
  },
  CORRIENTE: {
    key: 'corriente',
    name: 'Corriente',
  },
};

const FAKE_BANK_ACCOUNTS = [
  {
    id: "1",
    bank: {
      "name": "Banco de Crédito del Perú",
      "alias": "BCP",
      "id": "1"
    },
    type: 'ahorros',
    number: '44444444444444444',
    alias: 'BCP Cuenta Ahorros PEN',
    currency: CURRENCY.PEN.key,
  },
  {
    id: "2",
    bank: {
      "name": "Banco de Crédito del Perú",
      "alias": "BCP",
      "id": "1"
    },
    type: 'corriente',
    number: '44444444444444444',
    alias: 'BCP Cuenta Corriente PEN',
    currency: CURRENCY.PEN.key,
  },
  {
    id: "3",
    bank: {
      "name": "Scotiabank",
      "alias": "Scotiabank",
      "id": "4"
    },
    type: 'corriente',
    number: '44444444444444444',
    alias: 'Scotiabank - Corriente PEN',
    currency: CURRENCY.PEN.key,
  }
];

const KAMBISTA_BANK_ACCOUNT = {
  bank: 'Interbank',
  accountNumber: '201010000000000',
  ruc: '20601708141',
  accountHolder: 'Kambista SAC',
  accountType: 'Corriente',
}

const ALLOWED_FILES = '.jpg,.jpeg,.png,.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';
const ALLOWED_MINE_FILES = 'image/jpeg,image/png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

const CONGRATS_PAGE_NAME = "transactions-operation-operationId-congrats";

const PROGRESS_BAR_STEPS = ['Completa', 'Transfiere', 'Envía constancia'];

export {
  CREDENTIALS,
  LOGGED_CREDENTIALS,
  AUTH_USER_KEY,
  DUPLICATED_DNI_NUMBER,
  USER_KEY,
  CURRENCY,
  FETCH_RATE_ENDPOINT,
  CALCULATE_ENDPOINT,
  DEFAULT_BUY_RATE,
  DEFAULT_SELL_RATE,
  DEFAULT_SEND_AMOUNT,
  ACCOUNT_TYPES,
  FAKE_BANK_ACCOUNTS,
  KAMBISTA_BANK_ACCOUNT,
  ALLOWED_FILES,
  ALLOWED_MINE_FILES,
  FAKE_KAMBISTA_CODE,
  CONGRATS_PAGE_NAME,
  PROGRESS_BAR_STEPS
}