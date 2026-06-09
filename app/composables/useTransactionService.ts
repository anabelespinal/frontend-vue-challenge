import type {Transaction} from "~/types";

export const useTransactionService = () => {

  const transactionStore = useTransactionStore();

  async function createTransaction(data: Partial<Transaction>): Promise<Partial<Transaction>> {
    try {
      //TODO: Call a real endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));

      const id = transactionStore.getTransactions.length + 1;
      const exchange = transactionStore.getCurrentTransaction;
      const transaction = await {...exchange, ...data, ...{id: `${id}`}} as Partial<Transaction>;
      transactionStore.addTransaction(transaction as Transaction);
      return transaction as Partial<Transaction>;
    } catch (error) {
      throw error
    }
  }

  function deleteCurrentTransaction(): void {
    try {
      transactionStore.clearCurrentTransaction();
    } catch (error) {
      throw error
    }
  }

  async function completeTransaction(id: string): Promise<Partial<Transaction>> {
    try {
      //TODO: Call a real endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));

      await transactionStore.markTransactionAsCompleted(id);

      const transaction = await transactionStore.getTransactions.find(t => t.id === id);
      return transaction as Partial<Transaction>;
    } catch (error) {
      throw error
    }
  }

  async function getTransaction(id: string): Promise<Partial<Transaction> | null> {
    try {
      //TODO: Call a real endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));

      const transaction = await transactionStore.getTransactions.find(t => t.id === id);

      return transaction ? transaction as Partial<Transaction> : null;
    } catch (error) {
      throw error
    }
  }

  return {
    createTransaction,
    deleteCurrentTransaction,
    getTransaction,
    completeTransaction
  }
}