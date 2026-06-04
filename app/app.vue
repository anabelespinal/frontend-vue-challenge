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
const authStore = useAuthStore()
</script>
