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