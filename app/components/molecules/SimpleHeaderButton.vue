<template>
 <div>
   <BackButton @click="handleLogout" class="hidden md:block"/>
   <LogoutButton @click="handleLogout" class="block md:hidden"/>
 </div>
</template>

<script setup lang="ts">
const { logout } = useAuthService()

const handleLogout = async () => {
  await logout();
  await navigateTo('/login');
}

</script>