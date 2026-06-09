<template>
  <div class="flex min-h-screen min-w-full max-w-full flex-row items-center justify-between">
    <h1 class="sr-only">Kambista</h1>
    <div class="min-h-screen bg-k-blue-gradient w-1/2 hidden lg:flex flex-col items-center justify-center px-3">
      <img
        src="/images/logo-login.png"
        alt="Kambista"
        class="w-[310px] flex-shrink-0 object-contain mb-[80px]"
      />
      <img
        src="/images/login-content.png"
        alt="Contenido"
        class="w-[545px] flex-shrink-0 object-contain"
      />
    </div>
    <div class="min-h-screen bg-k-gray-20 w-full lg:w-1/2 flex flex-col items-center justify-center p-5">

      <img
        src="/images/logo-login-mobile.png"
        alt="Kambista"
        class="w-[138px] flex-shrink-0 object-contain block lg:hidden mb-[44px]"
      />

      <slot/>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>