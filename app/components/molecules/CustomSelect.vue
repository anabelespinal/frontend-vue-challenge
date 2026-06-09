<template>
  <div class="relative common-form-field mt-[3px]" :class="classes" ref="selectContainer">
    <span v-if="label" class="block common-form-label">
      {{ label }}
    </span>

    <button
      type="button"
      @click="toggleDropdown"
      @keydown.escape="closeDropdown"
      class="common-form-input inline-flex items-center justify-between bg-white"
      :class="selectClasses"
    >
      <span :class="{ 'text-slate-400': !modelValue }">
        {{ selectedLabel || placeholder }}
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-slate-400 transition-transform duration-200"
        :class="{ 'rotate-180 text-emerald-500': isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0 -translate-y-2"
      enter-to-class="transform scale-100 opacity-100 translate-y-0"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100 translate-y-0"
      leave-to-class="transform scale-95 opacity-0 -translate-y-2"
    >
      <ul
        v-if="isOpen"
        class="absolute z-50 mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-xl max-h-60 overflow-y-auto p-1.5 space-y-1 focus:outline-none"
      >
        <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option.value)"
          class="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer"
          :class="[
            modelValue === option.value
              ? 'bg-emerald-50 text-emerald-900 font-semibold'
              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
          ]"
        >
          <span>{{ option.label }}</span>

          <svg
            v-if="modelValue === option.value"
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-emerald-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">

interface Option {
  value: string | number
  label: string
}

interface Props {
  modelValue: string | number | null
  options: Option[]
  label?: string
  placeholder?: string
  classes?: string
  selectClass?: object | undefined
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Seleccionar',
  selectClass: undefined,
})

const emit = defineEmits(['update:modelValue', 'onSelectOption'])

const isOpen = ref(false)
const selectContainer = ref<HTMLElement | null>(null)

const selectedLabel = computed(() => {
  const matched = props.options.find(opt => opt.value === props.modelValue);
  return matched ? matched.label : '';
})

const selectClasses = computed(() => {
  const c = {'border-k-gray-24': isOpen}
  if (props.selectClass) {
    return {...c, ...props.selectClass}
  }
  return c;
})

const toggleDropdown = () => (isOpen.value = !isOpen.value)
const closeDropdown = () => (isOpen.value = false)

const selectOption = (val: string | number) => {
  emit('update:modelValue', val);
  emit('onSelectOption', val);
  closeDropdown();
}

// NOTE: This
const handleClickOutside = (event: MouseEvent) => {
  if (selectContainer.value && !selectContainer.value.contains(event.target as Node)) {
    closeDropdown()
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>