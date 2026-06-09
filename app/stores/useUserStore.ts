import { defineStore } from 'pinia'
import type {User} from "~/types";
import { USER_KEY } from "~/constants";

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    transactions: [] as object[], //TODO: Move transactions to its own store
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    setUser(payload: User) {
      if (!payload) {
        return;
      }

      this.user = payload;
      //NOTE: for now the user will be stored locally
      setLocalStorage(USER_KEY, payload);
    },
    clearUser() {
      this.user = null;
      //NOTE: for now the user object won't be removed from localStorage
      // removeLocalStorage(USER_KEY);
    },
  }
});