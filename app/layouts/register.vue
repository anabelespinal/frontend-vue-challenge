<template>
  <div class="flex min-h-screen min-w-full max-w-full flex-row items-center justify-between">
    <h1 class="sr-only">Kambista</h1>
    <div class="min-h-screen bg-k-blue-gradient w-1/2 hidden lg:flex flex-col items-center justify-center">
    <!--      TODO: add content here -->
    </div>
    <div class="min-h-screen bg-k-gray-20 w-full lg:w-1/2 flex flex-col items-center justify-center p-5">
      <slot/>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>