<template>
  <div
    v-if="isMobileMenuOpen"
    @click="emit('closeMobileMenu')"
    class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
  ></div>

  <aside class="bg-slate-900 text-slate-200 flex flex-col h-screen fixed md:sticky top-0 z-50 shadow-xl border-slate-800 transition-all duration-300 ease-in-out"
    :class="[
        'left-0 border-r',
        'right-0 border-l',
        isCollapsed ? 'md:w-20' : 'md:w-64',
        isMobileMenuOpen ? 'w-full translate-x-0' : 'w-full translate-x-full md:translate-x-0'
      ]"
  >
    <div class="p-4 flex items-center border-b border-slate-800 h-16 justify-between" :class="isCollapsed ? 'md:justify-center' : 'md:justify-between'">
      <button @click="emit('closeMobileMenu')" class="block md:hidden p-1.5 rounded-lg bg-slate-800 text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <span class="font-bold text-xl tracking-wider text-emerald-400" :class="isCollapsed ? 'md:hidden' : 'block'">
          NUXT_APP
        </span>
      <span class="font-bold text-xl text-emerald-400 hidden" :class="isCollapsed ? 'md:block' : 'hidden'">N</span>

      <button v-if="!isCollapsed" @click="emit('toggleSidebar')" class="hidden md:block p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </button>

      <button v-else @click="emit('toggleSidebar')" class="hidden md:block p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
      </button>
    </div>

    <nav class="flex-1 p-3 space-y-2">
      <a href="#" class="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-800 group">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400 group-hover:text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <span class="whitespace-nowrap font-medium text-sm" :class="isCollapsed ? 'md:hidden' : 'block'">Dashboard</span>
      </a>
    </nav>
  </aside>

<!--  <aside-->
<!--    class="bg-slate-900 text-slate-200 flex flex-col h-screen fixed md:sticky top-0 left-0 z-50 shadow-xl border-r border-slate-800 transition-all duration-300 ease-in-out"-->
<!--    :class="[-->
<!--        isCollapsed ? 'md:w-20' : 'md:w-64',-->
<!--        isMobileMenuOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full md:translate-x-0'-->
<!--      ]"-->
<!--  >-->
<!--    <div class="p-4 flex items-center border-b border-slate-800 h-16 justify-between" :class="isCollapsed ? 'md:justify-center' : 'md:justify-between'">-->
<!--        <span class="font-bold text-xl tracking-wider text-emerald-400" :class="isCollapsed ? 'md:hidden' : 'block'">-->
<!--          NUXT_APP-->
<!--        </span>-->
<!--      <span class="font-bold text-xl text-emerald-400 hidden" :class="isCollapsed ? 'md:block' : 'hidden'">N</span>-->

<!--      <button v-if="!isCollapsed" @click="emit('toggleSidebar')" class="hidden md:block p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />-->
<!--        </svg>-->
<!--      </button>-->
<!--      <button v-else @click="emit('toggleSidebar')" class="hidden md:block p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>-->
<!--      </button>-->

<!--      <button @click="emit('closeMobileMenu')" class="block md:hidden p-1.5 rounded-lg bg-slate-800 text-slate-400">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />-->
<!--        </svg>-->
<!--      </button>-->
<!--    </div>-->

<!--    <nav class="flex-1 p-3 space-y-2">-->
<!--      <a href="#" class="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-800 group">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400 group-hover:text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>-->
<!--        <span class="whitespace-nowrap font-medium text-sm transition-opacity duration-200" :class="isCollapsed ? 'md:hidden' : 'block'">Dashboard</span>-->
<!--      </a>-->
<!--    </nav>-->
<!--  </aside>-->
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
</script>

<style scoped>
</style>