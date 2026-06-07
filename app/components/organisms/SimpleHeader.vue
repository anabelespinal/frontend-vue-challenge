<template>
  <div class="flex justify-between items-center w-full">
    <KambistaLogo/>
    <SimpleHeaderButton v-if="showButon"/>
  </div>
</template>

<script setup lang="ts">
interface Props {
  showButon?: boolean
}

withDefaults(defineProps<Props>(), {
  showButon: true,
})
</script>

<style scoped>
</style>