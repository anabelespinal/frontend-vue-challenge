import {AUTH_USER_KEY} from "~/constants";
import type {AuthUser} from "~/types";

export default defineNuxtPlugin(() => {
  const authStore = useAuthStore()
  const user:AuthUser = getLocalStorage(AUTH_USER_KEY);

  if (user) {
    authStore.setAuthUser(user);
  } else {
    authStore.completeInitialized()
  }
})