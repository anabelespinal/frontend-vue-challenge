export interface LoginRequest {
  email: string
  password: string
}

export interface AuthUser {
  email: string
  onboarding: boolean
}

export enum DocumentTypes {
  DNI = 'dni',
  CCE = 'cce',
  PASSPORT = 'passport',
}

export interface User {
  fullName: string
  documentType: DocumentTypes
  documentNumber: string
  phoneNumber: string
  birthdate: string
}

export enum APIErrorTypes {
  DUPLICATE_DNI = 'DUPLICATE_DNI',
  INVALID_PHONE = 'INVALID_PHONE',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface APIError {
  success: false
  data: {
    name: APIErrorTypes
    title: string
    message: string
  }
}

export enum CurrencyTypes {
  USD = 'USD',
  PEN = 'PEN',
}

export type AMOUNT = number;

export interface Savings {
  amount: AMOUNT | string
  currency: string
}

export interface FetchRateHttpResponse {
  bid: AMOUNT
  bidChange: AMOUNT
  ask: AMOUNT
  askChange: AMOUNT
  date: string
  author: string
  created: string
}

export interface CalculateExchangeResponse {
  rate: AMOUNT
  exchange: AMOUNT
  tc: { bid: AMOUNT; ask: AMOUNT }
  data: { operate: boolean; msg: string }
  savings: Savings
}

export interface CurrentRateResponse {
  bid: AMOUNT
  ask: AMOUNT
}

export interface Bank {
  id: number | string
  name: string
  alias: string
}

export enum BankAccountTypes {
  AHORROS = 'ahorros',
  CORRIENTE = 'corriente',
}

export interface BankAccount {
  id: string
  bank: Bank
  type: BankAccountTypes
  number: string
  alias: string
  currency: CurrencyTypes
}

export interface SourceFund {
  _id: number
  name: string
}

export interface Transaction {
  id?: string
  sendAmount: number | string
  receiveAmount: number | string
  exchangeRate: number
  sendCurrency: CurrencyTypes
  receiveCurrency: CurrencyTypes
  coupon?: string
  bank?: Bank
  account?: BankAccount
  sourceFund?: SourceFund
  code?: string
  savings?: Savings
}