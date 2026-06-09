<template>
  <header class="app-header">
    <div class="app-header__content">
      <div class="flex items-center justify-between space-x-4 w-full">

        <h1 class="common-title hidden md:block">Inicio</h1>
        <img
          src="/images/logo-kambista.png"
          alt="Kambista"
          class="w-[117px] flex-shrink-0 object-contain block md:hidden"
        />

        <div class="app-header__desc hidden lg:block">
          Horario: Lunes a viernes 9:00 am a 7:00 pm
          Sábados de 09:00 am a 2:00 pm
        </div>
        <div class="items-center hidden xl:flex">
          <span class="font-montserrat text-k-secondary font-semibold text-[14px]">Tienes <strong class="font-bold">2500</strong> Koinks</span>
          <img
            src="/icons/coin.png"
            alt="Coin"
            class="flex-shrink-0 object-contain w-[20px] ml-2"
          />
        </div>
        <div class="hidden md:block">
          <HeaderSelect/>
        </div>
      </div>
      <button
        @click="emit('openMobileMenu')"
        class="block md:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600"
        title="Open Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">

const emit = defineEmits<{
  (e: 'openMobileMenu'): void
}>()

</script>

<style scoped lang="scss">
.app-header {
  @apply bg-transparent px-2 md:px-6 sticky top-0 z-20;
  &__content {
    @apply min-h-[66px] py-2 border-b-0 md:border-b border-k-gray-30 w-full flex items-center justify-between;
  }
  &__desc {
    @apply font-montserrat text-k-secondary font-medium text-[14px] max-w-[330px];
  }
}
</style>