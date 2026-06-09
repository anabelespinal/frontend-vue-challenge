<template>
  <div class="flex justify-between items-center w-full flex-wrap">
    <KambistaLogo/>

    <div class="hidden md:block w-full md:max-w-[400px] lg:max-w-[600px]" v-if="showProgressBar">
      <ProgressBar :steps="PROGRESS_BAR_STEPS" :currentStep="currentStepIndex"/>
    </div>

    <SimpleHeaderButton v-if="showButon"/>
    <BackButton v-if="showBack" @click="handleBack" class="block"/>

    <div class="block md:hidden w-full px-9" v-if="showProgressBar">
      <ProgressBar :steps="PROGRESS_BAR_STEPS" :currentStep="currentStepIndex"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PROGRESS_BAR_STEPS} from "~/constants";

interface Props {
  showButon?: boolean
  showBack?: boolean
  backUrl?: string
  showProgressBar?: boolean
  currentStepIndex?: number
}

const props = withDefaults(defineProps<Props>(), {
  showButon: true,
  showBack: false,
  backUrl: '',
  showProgressBar: false,
});

const handleBack = () => {
  navigateTo(props.backUrl);
}
</script>

<style scoped>
</style>