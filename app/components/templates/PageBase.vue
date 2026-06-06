<template>
  <div :class="baseClasses">

    <!--   START SIDEBAR  -->
    <AppSidebar
      v-if="!$slots.simpleHeader"
      :is-collapsed="isCollapsed"
      :is-mobile-menu-open="isMobileMenuOpen"
      @toggleSidebar="toggleSidebar"
      @closeMobileMenu="closeMobileMenu"
    />
    <!--   END SIDEBAR   -->

    <!--  START CONTENT WRAPPER  -->
    <div class="flex-1 flex flex-col min-w-0">

      <!--   START SIMPLE HEADER: Use it for onboarding or transaction page   -->
      <!--      todo: refactor it-->
      <header
        v-if="$slots.simpleHeader"
        class="simple-header">
        <slot name="simpleHeader" />
      </header>
      <!--   END SIMPLE HEADER   -->

      <!--   START APP HEADER  -->
      <AppHeader v-else @openMobileMenu="openMobileMenu"/>
      <!--   END APP HEADER   -->

      <!--   START CONTENT  -->
      <main class="flex px-[25px] py-[40px] max-w-7xl w-full mx-auto">
        <slot />
      </main>
      <!--   END CONTENT   -->
    </div>
    <!--  END CONTENT WRAPPER  -->
  </div>
</template>

<script setup lang="ts">
interface Props {
  classes: object
}

const props = defineProps<Props>()

const isCollapsed = ref<boolean>(false)
const isMobileMenuOpen = ref<boolean>(false)

const baseClasses = computed(() => {
  const defaultClasses = {
    'flex': true,
    'min-h-screen': true,
    'bg-k-gray-10': true,
    'overflow-x-hidden': true
  }

  return {
    ...defaultClasses,
    ...props.classes,
  }
})

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const openMobileMenu = () => {
  isMobileMenuOpen.value = true
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
