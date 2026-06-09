<template>
  <div class="relative" ref="selectContainer">
    <button
      type="button"
      @click="toggleDropdown"
      @keydown.escape="closeDropdown"
      class="inline-flex items-center justify-between bg-transparent"
      :class="selectClasses"
    >
      <span class="font-montserrat text-k-gray-60 font-semibold text-[14px] uppercase flex items-center">
        <img
          src="/icons/profile-icon.png"
          alt="profile icon"
          class="flex-shrink-0 object-contain w-[30px] mr-2"
        />
        <span>{{ userStore.getUser?.fullName.split(' ')[0] }}</span>
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-slate-400 transition-transform duration-200 mt-[-2px] ml-2"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#686868"
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
        <li @click="handleLogout"
          class="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer">
          <span>Cerrar sesión</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">

import {useUserStore} from "~/stores/useUserStore";

interface Props {
  selectClass?: object | undefined
}

const props = withDefaults(defineProps<Props>(), {
  selectClass: undefined,
})

const userStore = useUserStore();
const { logout } = useAuthService()


const isOpen = ref(false)
const selectContainer = ref<HTMLElement | null>(null)

const selectClasses = computed(() => {
  const c = {'border-k-gray-24': isOpen}
  if (props.selectClass) {
    return {...c, ...props.selectClass}
  }
  return c;
})

const toggleDropdown = () => (isOpen.value = !isOpen.value)
const closeDropdown = () => (isOpen.value = false)

const handleLogout = async () => {
  await logout();
  await navigateTo('/login');
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