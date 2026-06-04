<template>
  <div class="login-page w-full lg:w-[342px]">
    <h2 class="font-montserrat text-black font-normal lg:font-bold mb-5 text-[24px] lg:text-[28px]">Inicia Sesión</h2>
    <FormKit type="form" :actions="false" form-class="login-page__wrapper-form">
      <FormKit
          type="email"
          name="email"
          label="Correo electrónico"
          placeholder="Escribe tu correo"
          validation="required|email"
          validation-visibility="dirty"
          outer-class="common-form-field"
          label-class="common-form-label"
          input-class="common-form-input"
          messages-class="common-form-messages-container"
          message-class="common-form-error"
      />

      <FormKit
          type="password"
          name="password"
          label="Contraseña"
          placeholder="Escribe tu contraseña"
          validation="required|length:8"
          validation-visibility="dirty"
          outer-class="common-form-field"
          label-class="common-form-label"
          input-class="common-form-input"
          messages-class="common-form-messages-container"
          message-class="common-form-error"
      />

      <div class="mx-auto my-[20px] mb-[40px] flex justify-center font-montserrat text-k-gray-60 font-medium text-[12px] underline">
        <NuxtLink to="/" class="">¿Olvidaste tu contraseña?</NuxtLink>
      </div>

      <button type="submit" class="common-btn" @click="handleLogin">INICIA SESIÓN</button>

    </FormKit>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'register',
})

const handleLogin = (formData) => {
  console.log('data ANA', formData)
}
</script>
<style lang="scss" scoped>
.login-page {
  &__wrapper-form {
    &:deep(> .formkit-messages) {
      display: none;
    }
  }
}
</style>