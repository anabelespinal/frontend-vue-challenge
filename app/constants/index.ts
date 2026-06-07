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

const CURRENCY = {
  USD: {
    key: 'USD',
    name: 'Dólares',
  },
  PEN: {
    key: 'PEN',
    name: 'Soles',
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
  ACCOUNT_TYPES
}