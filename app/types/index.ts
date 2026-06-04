export interface LoginRequest {
  email: string
  password: string
}

export interface AuthUser {
  email: string
  name: string
  onboarding: boolean
}

export interface APIError {
  success: false
  data: {
    name: 'DUPLICATE_DNI' | 'INVALID_PHONE' | 'SERVER_ERROR'
    title: string
    message: string
  }
}