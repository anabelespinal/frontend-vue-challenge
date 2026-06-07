<template>
<!--  NOTE: Only mount page if AuthStore is nitialized-->
  <div v-if="authStore.isInitialized">
    <NuxtRouteAnnouncer/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
  <div v-else></div>
</template>

<script setup lang="ts">
import { USER_KEY } from "~/constants";

const authStore = useAuthStore();
const userStore = useUserStore();

onMounted(async () => {
  console.log('APP MOUNTED');
  if (authStore.isInitialized &&
    authStore.isAuthenticated &&
    authStore.isOnboardingCompleted) {
    const storedUser = await getLocalStorage(USER_KEY);
    if (storedUser) {
      userStore.setUser(getLocalStorage(USER_KEY))
    }
  }
})
</script>
