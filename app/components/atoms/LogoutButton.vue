<template>
  <button class="simple-btn" v-bind="$attrs">
    <span class="mx-2">Cerrar sesión</span>
    <img
      :src="`/icons/log-out.png`"
      alt="Cerrar sesión Icono"
      class="w-[32px] flex-shrink-0 object-contain inline-flex"
    />
  </button>
</template>

<script setup lang="ts">
</script>