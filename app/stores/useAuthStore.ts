import { defineStore } from 'pinia'
import type {AuthUser} from "~/types";
import { AUTH_USER_KEY } from "~/constants";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as AuthUser | null,
    isInitialized: false,
  }),
  getters: {
    getUser: (state) => state.user,
    isAuthenticated: (state) => !!state.user,
    isOnboardingCompleted: (state) => !!state.user?.onboarding,
  },
  actions: {
    setAuthUser(payload: AuthUser, addToLS: boolean = true) {
      if (!payload) {
        return;
      }

      this.user = payload;
      this.isInitialized = true;

      setLocalStorage(AUTH_USER_KEY, payload);
    },
    completeInitialized() {
      this.isInitialized = true;
    }
  }
});