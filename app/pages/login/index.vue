<template>
  <div class="login-page w-full lg:w-[342px]">
    <h2 class="login-page__title">Inicia Sesión</h2>
    <FormKit
      type="form"
      :actions="false" f
      @submit="handleLogin"
      form-class="login-page__wrapper-form"
      v-slot="{ state }">
      <FormKit
          type="email"
          name="email"
          label="Correo electrónico"
          placeholder="Escribe tu correo"
          validation="required|email"
          :validation-messages="{
            required: 'El correo es obligatorio',
            email: 'El campo debe ser un formato de email correcto'
          }"
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
          validation="required|length:6"
          :validation-messages="{
            required: 'El campo de contraseña es obligatorio',
            length: 'El campo debe ser de al menos 6 dígitos'
          }"
          validation-visibility="dirty"
          outer-class="common-form-field"
          label-class="common-form-label"
          input-class="common-form-input"
          messages-class="common-form-messages-container"
          message-class="common-form-error"
      />

      <div class="mx-auto my-[20px] flex justify-center" v-if="errorMessage">
        <span class="common-form-error">{{errorMessage}}</span>
      </div>

      <div class="mx-auto my-[20px] flex justify-center">
        <NuxtLink to="/" class="login-page__forgot-link">¿Olvidaste tu contraseña?</NuxtLink>
      </div>

      <button
        type="submit"
        class="common-btn mt-4 mb-2"
        :disabled="!state.valid || loading">

<!--        :class="{-->
<!--        'opacity-60': !state.valid || loading,-->
<!--        'cursor-not-allowed': !state.valid || loading-->
<!--        }"-->

        {{ loading ? 'INICIANDO SESIÓN' : 'INICIA SESIÓN' }}
      </button>

      <div class="mx-auto my-[20px] flex justify-center">
        <span class="login-page__register-link">¿No tienes cuenta? <NuxtLink to="/" class="underline">Registrate aquí</NuxtLink></span>
      </div>

    </FormKit>
  </div>
</template>

<script setup lang="ts">
import type {LoginRequest} from "~/types";

definePageMeta({
  layout: 'register',
  noRequiresAuth: true
})

const { login } = useAuthService()

const loading = ref<boolean>(false);
const errorMessage = ref<string | null >(null);

const handleLogin = async (formData:any) => {
  try {
    loading.value = true;
    errorMessage.value = null;

    const data:LoginRequest = {
      email: formData.email,
      password: formData.password,
    }

    await login(data);
    await navigateTo('/');

  } catch (error:any) {
    const errorData = error?.data;
    errorMessage.value = errorData?.data.message;
  } finally {
    loading.value = false;
  }
}
</script>
<style lang="scss" scoped>
.login-page {
  &__wrapper-form {
    &:deep(> .formkit-messages) {
      display: none;
    }
  }
  &__title {
    @apply font-montserrat text-black font-normal lg:font-bold mb-5 text-[24px] lg:text-[28px];
  }
  &__forgot-link {
    @apply font-montserrat text-k-gray-60 font-medium text-[12px] underline;
  }
  &__register-link {
    @apply font-montserrat text-k-gray-60 font-medium text-[14px];
  }
}
</style>