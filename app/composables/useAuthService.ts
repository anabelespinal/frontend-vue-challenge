import {CREDENTIALS, LOGGED_CREDENTIALS} from '~/constants';
import type {AuthUser, LoginRequest, APIError} from "~/types";
import {APIErrorTypes} from "~/types";
import {useAuthStore} from "~/stores/useAuthStore";

export const useAuthService = () => {
  const authStore = useAuthStore();

  async function login(data:LoginRequest): Promise<void> {
    console.log('login service', data);

    try {
      //TODO: Call a real endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));

      const response:AuthUser = LOGGED_CREDENTIALS;

      if (data.email !== CREDENTIALS.email || data.password !== CREDENTIALS.password) {
        const error:APIError = {
          success: false,
          data: {
            name: APIErrorTypes.SERVER_ERROR,
            title: 'incorrect_credentials',
            message: 'Las credenciales son incorrectas, intenta otra vez.',
          }
        }

        throw { data: error }
      }

      authStore.setAuthUser(response);

    } catch (error) {
      throw error
    }
  }

  function logout() {
    try {
      authStore.clearAuthUser();
    } catch (error) {
      throw error
    }
  }

  return {
    login,
    logout
  }
}