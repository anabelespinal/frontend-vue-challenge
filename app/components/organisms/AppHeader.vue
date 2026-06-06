<template>
  <header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 sticky top-0 shadow-sm z-20">
    <div class="flex items-center space-x-4">
      <h1 class="text-lg font-semibold text-slate-800">Standard Workspace</h1>
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
  </header>
</template>

<script setup lang="ts">

const emit = defineEmits<{
  (e: 'openMobileMenu'): void
}>()

</script>

<style scoped>
</style>