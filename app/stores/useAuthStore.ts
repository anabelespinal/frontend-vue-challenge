import { defineStore } from 'pinia'
import type {AuthUser} from "~/types";
import { AUTH_USER_KEY } from "~/constants";
import {removeLocalStorage} from "~/utils/localStorage";

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
    setAuthUser(payload: AuthUser) {
      if (!payload) {
        return;
      }

      this.user = payload;
      this.isInitialized = true;

      setLocalStorage(AUTH_USER_KEY, payload);
    },
    completeInitialized() {
      this.isInitialized = true;
    },
    clearAuthUser() {
      this.user = null;
      removeLocalStorage(AUTH_USER_KEY);
    },
  }
});