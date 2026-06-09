<template>
  <div
    v-if="isMobileMenuOpen"
    @click="emit('closeMobileMenu')"
    class="fixed inset-0 bg-white backdrop-blur-sm z-40 md:hidden"
  ></div>

  <aside
    class="bg-white text-black flex flex-col h-screen fixed md:sticky top-0 z-50  transition-all duration-300 ease-in-out left-0 border-r right-0 border-l"
    :class="[
      isCollapsed ? 'md:w-[80px]' : 'md:w-[320px]',
      isMobileMenuOpen ? 'w-full translate-x-0' : 'w-full translate-x-full md:translate-x-0'
      ]"
  >

    <div class="p-4 flex items-center h-16 justify-start relative" :class="isCollapsed ? 'md:justify-center' : 'md:justify-between'">
      <button @click="emit('closeMobileMenu')" class="block md:hidden p-1.5 bg-transparent text-k-secondary font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-[25px] w-[25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="flex justify-center w-[calc(100%-50px)] md:w-full">
        <img
          v-show="isCollapsed"
          src="/images/logo-k.png"
          alt="Kambista"
          class="w-[35px] flex-shrink-0 object-contain tracking-wider"
        />

        <img
          v-show="!isCollapsed"
          src="/images/logo-kambista.png"
          alt="Kambista"
          class="w-[160px] flex-shrink-0 object-contain tracking-wider"
        />
      </div>
      <button
        @click="emit('toggleSidebar')"
        class="hidden md:block bg-transparent toggle-sidebar-icon"
      >
        <img
          alt="Colapsar Sidebar"
          src="/icons/collapse-arrow.png"
          class="w-[7px] flex-shrink-0 object-contain"
          :class="{'reverse-icon': isCollapsed}"
        />
      </button>
    </div>

    <nav class="flex-1 py-3">
      <NuxtLink
        to="/"
        class="flex items-center p-[20px] hover:bg-k-gray-20 group"
        exact-active-class="bg-k-gray-20">
        <img
          alt="Inicio"
          src="/icons/regala-page-icon.png"
          class="w-[30px] flex-shrink-0 object-contain mr-4"
        />
        <span class="text-sidebar" :class="isCollapsed ? 'md:hidden' : 'block'">Inicio</span>
      </NuxtLink>
      <NuxtLink
        to="/transactions"
        class="flex items-center p-[20px] hover:bg-k-gray-20 group"
        exact-active-class="bg-k-gray-20">
        <img
          alt="Operaciones"
          src="/icons/regala-page-icon.png"
          class="w-[25px] flex-shrink-0 object-contain mr-4"
        />
        <span class="text-sidebar" :class="isCollapsed ? 'md:hidden' : 'block'">Historial de operaciones</span>
      </NuxtLink>
      <NuxtLink
        to="/bank-accounts"
        class="flex items-center p-[20px] hover:bg-k-gray-20 group"
        exact-active-class="bg-k-gray-20">
        <img
          alt="Cuentas"
          src="/icons/regala-page-icon.png"
          class="w-[25px] flex-shrink-0 object-contain mr-4"
        />
        <span class="text-sidebar" :class="isCollapsed ? 'md:hidden' : 'block'">Cuentas bancarias</span>
      </NuxtLink>
      <NuxtLink
        to="/help"
        class="flex items-center p-[20px] hover:bg-k-gray-20 group"
        exact-active-class="bg-k-gray-20">
        <img
          alt="Ayuda"
          src="/icons/regala-page-icon.png"
          class="w-[25px] flex-shrink-0 object-contain mr-4"
        />
        <span class="text-sidebar" :class="isCollapsed ? 'md:hidden' : 'block'">Ayuda</span>
      </NuxtLink>

      <button
        @click="handleLogout"
        class="items-center p-[20px] hover:bg-k-gray-20 group w-full flex md:hidden">
        Cerrar sesión
      </button>
    </nav>
  </aside>
</template>

<script setup lang="ts">

interface Props {
  isCollapsed: boolean
  isMobileMenuOpen: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'toggleSidebar'): void
  (e: 'closeMobileMenu'): void
}>()

const { logout } = useAuthService()

const handleLogout = async () => {
  await logout();
  await navigateTo('/login');
}

</script>

<style scoped lang="scss">
.toggle-sidebar-icon {
  background-image: url("/icons/collapse-sidebar-icon.png");
  @apply bg-no-repeat bg-contain bg-center w-[29px] p-[10px] absolute right-[-10px];
  .reverse-icon {
    @apply rotate-180;
  }
}
.text-sidebar {
  @apply font-montserrat text-k-secondary font-medium text-[14px]
}
</style>