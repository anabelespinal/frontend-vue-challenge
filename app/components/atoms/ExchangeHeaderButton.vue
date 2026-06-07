<template>
  <button
    class="exchange-header-button"
    :class="{[active ? 'active' : 'inactive']: true}"
    @click="emit('toggleExchange')"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  active?: boolean;
  text: string;
}

withDefaults(defineProps<Props>(), {
  active: false,
})

const emit = defineEmits<{
  (e: 'toggleExchange'): void
}>();

</script>
<style lang="scss" scoped>
.exchange-header-button {
  @apply w-full bg-white text-center font-montserrat text-[14px] sm:text-[18px] font-bold text-k-gray-40 p-[10px] sm:p-[14px] border-k-gray-21 border-[1px] rounded-t-[6px];
  &.inactive {
    @apply backdrop-blur-[4px];
  }
  &.active {
    @apply backdrop-blur-[4px] border-k-secondary bg-k-secondary text-white;
  }
}
</style>