<template>
  <PageBase :classes="{'onboarding-page': true}">

    <template #simpleHeader>
      <SimpleHeader :show-buton="false"/>
    </template>

    <div class="flex flex-col w-full justify-center items-center pt-0 md:pt-[35px]">
      <div class="max-w-[397px] flex flex-col w-full justify-center items-center">
        <img
          :src="`/images/phone.png`"
          alt="Phone"
          class="w-[126px] flex-shrink-0 object-contain mb-[30px]"
        />
        <h2 class="common-title mx-auto text-center mb-[30px]">
          ¡Felicitaciones {{ userStore.getUser.fullName }}, tu perfil ha sido creado!
        </h2>
        <p class="common-paragraph text-center mx-auto mb-[64px]">
          Ya puedes empezar a Kambiar con la mejor tasa del mercado
        </p>

        <button
          class="common-btn mt-4 mb-2"
          @click="goToHome"
        >
          CONTINUAR
        </button>

      </div>
    </div>
  </PageBase>
</template>
<script setup lang="ts">
const userStore = useUserStore()

const goToHome = async () => {
  await navigateTo('/');
}

</script>
<style lang="scss" scoped>
</style>
