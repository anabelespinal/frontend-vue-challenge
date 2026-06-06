<template>
  <button class="simple-btn" v-bind="$attrs">
    <img
      :src="`/icons/arrow-back.png`"
      alt="Icono Volver"
      class="w-[20px] flex-shrink-0 object-contain inline-flex"
    />
    <span class="mx-2">Volver</span>
  </button>
</template>

<script setup lang="ts">
</script>