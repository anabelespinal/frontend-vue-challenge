import type {Transaction} from "~/types";
import {CONGRATS_PAGE_NAME} from "~/constants";

export const useTransaction = () => {

  const transactionService = useTransactionService()

  const loading = ref<boolean>(false);
  const renderPage = ref<boolean>(false);
  const errorMessage = ref<string | null>(null);

  const transaction = ref<Partial<Transaction> | null>(null);

  const createTransaction = async (data:Partial<Transaction>) => {
    try {
      loading.value = true;
      errorMessage.value = null;

      const resp = await transactionService.createTransaction(data);
      await navigateTo(`/transactions/operation/${resp.id}/detail`);

      transactionService.deleteCurrentTransaction();

    } catch (error:any) {
      const errorData = error?.data;
      errorMessage.value = errorData?.data.message;
    } finally {
      loading.value = false;
    }
  }

  const getTransactionById = async (id:string): Promise<void> => {
    if (!id) {
      await navigateTo(`/transactions`);
    }

    try {
      loading.value = true;
      errorMessage.value = null;

      const resp = await transactionService.getTransaction(id);

      if (!resp) {
        await navigateTo(`/transactions`);
      }

      const route = useRoute();
      if (!route || (route.name === CONGRATS_PAGE_NAME && resp?.completed !== true)) {
        await navigateTo(`/`);
        return;
      }

      transaction.value = resp;
      renderPage.value = true;

    } catch (error:any) {
      const errorData = error?.data;
      errorMessage.value = errorData?.data.message;
    } finally {
      loading.value = false;
    }
  }

  const completeTransaction = async (id:string) => {
    try {
      loading.value = true;
      errorMessage.value = null;

      await transactionService.completeTransaction(id);
      await navigateTo(`/transactions/operation/${id}/congrats`);

    } catch (error:any) {
      const errorData = error?.data;
      errorMessage.value = errorData?.data.message;
    } finally {
      loading.value = false;
    }
  }

  return {
    createTransaction,
    getTransactionById,
    completeTransaction,
    errorMessage,
    loading,
    renderPage,
    transaction
  }
}