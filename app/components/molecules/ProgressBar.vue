<template>
  <div class="w-full py-6 px-4">
    <div class="relative flex items-center justify-between w-full">

      <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-gray-200 z-0 rounded-full"></div>

      <div
        class="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] bg-slate-900 z-0 transition-all duration-500 rounded-full"
        :style="{
          width: `${(currentStep / (steps.length - 1)) * 100}%`
        }"
      ></div>

      <div
        v-for="(step, index) in steps"
        :key="index"
        class="relative flex flex-col items-center z-10"
      >
        <div
          :class="[
            'w-4 h-4 rounded-full transition-colors duration-300',
            // If completed/active: Dark blue. If upcoming: Gray
            index <= currentStep ? 'bg-slate-900' : 'bg-gray-300'
          ]"
        ></div>

        <span
          :class="[
            'absolute top-6 whitespace-nowrap text-xs tracking-tight font-bold transition-colors duration-300',
            index <= currentStep ? 'text-slate-900' : 'text-gray-400'
          ]"
        >
          {{ step }}
        </span>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  steps: {
    type: Array,
    required: true // e.g., ['Cart', 'Shipping', 'Payment', 'Review']
  },
  currentStep: {
    type: Number,
    default: 0 // Zero-based index (0 is the first step)
  }
})
</script>