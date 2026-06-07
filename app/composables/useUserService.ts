import {DUPLICATED_DNI_NUMBER} from '~/constants';
import type {User, APIError } from "~/types";
import {DocumentTypes, APIErrorTypes} from "~/types";
import {useUserStore} from "~/stores/useUserStore";

export const useUserService = () => {
  const userStore = useUserStore();

  async function updateUser(data:User): Promise<void> {
    try {
      //TODO: Call a real endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));

      const response:User = {...data};

      //NOTE: Handle duplicate dni error
      if (data.documentType === DocumentTypes.DNI && data.documentNumber === DUPLICATED_DNI_NUMBER) {
        const error:APIError = {
          success: false,
          data: {
            name: APIErrorTypes.DUPLICATE_DNI,
            title: 'dni_duplicate',
            message: 'El DNI ingresado ya se encuetra registrado.',
          }
        }

        throw { data: error }
      }

      userStore.setUser(response);

    } catch (error) {
      throw error
    }
  }

  return {
    updateUser
  }
}