<template>
  <PageBase :classes="{'onboarding-page': true}">

    <template #simpleHeader>
      <SimpleHeader/>
    </template>

    <div class="flex w-full justify-center pt-0 md:pt-[35px]">
      <div class="onboarding-page__wrapper-content">
        <h2 class="common-title mx-auto text-center mb-[32px]">Completa tus datos</h2>
        <FormKit
          type="form"
          :actions="false" f
          @submit="handleLogin"
          form-class="onboarding-page__wrapper-form"
          v-slot="{ state }">
          <FormKit
            type="text"
            name="fullname"
            label="Nombres completos"
            placeholder="Escribe tus nombres y apellidos"
            validation="required|alphaSpacesOnly|length:2"
            :validation-rules="{ alphaSpacesOnly }"
            :validation-messages="{
              required: 'El nombre es obligatorio',
              alphaSpacesOnly: 'Formato inválido',
              length: 'Debe tener al menos 2 letras.',
            }"
            validation-visibility="dirty"
            outer-class="common-form-field"
            label-class="common-form-label"
            input-class="common-form-input"
            messages-class="common-form-messages-container"
            message-class="common-form-error"
          />

          <div class="flex">
            <div class="w-1/2 mr-1">
              <CustomSelect
                label="Documento"
                placeholder="Tipo"
                :options="DOCUMENT_TYPES_OPTS"
                v-model="selectedDocumentType"
                @onSelectOption="onSelectDocumentType"
                classes="mb-0"
              />
              <div v-if="isDocumentRequired" class="common-form-messages-container">
                <span class="common-form-error">Campo obligatorio</span>
              </div>
            </div>
            <div class="w-1/2 ml-1">
              <FormKit
                type="text"
                name="documentNumber"
                label="N° de documento"
                placeholder="N° de documento"
                :validation="documentNumValidations"
                :validation-messages="{
                  required: 'El campo es obligatorio',
                  matches: 'Formato incorrecto',
                  length: documentNumLengthError
                }"
                validation-visibility="dirty"
                outer-class="common-form-field"
                label-class="common-form-label invisible"
                input-class="common-form-input"
                messages-class="common-form-messages-container"
                message-class="common-form-error"
                @input="handleDocumentNumChange"
              />
            </div>
          </div>
<!--          TODO: Add alert -->
          <div></div>

          <FormKit
            type="text"
            name="phoneNumber"
            label="Celular"
            placeholder="N° de celular"
            validation="required|matches:/^\d{9}$/"
            :validation-messages="{
              required: 'El campo es obligatorio',
              matches: 'El campo debe ser solo de 9 dígitos'
            }"
            validation-visibility="dirty"
            outer-class="common-form-field"
            label-class="common-form-label"
            input-class="common-form-input"
            messages-class="common-form-messages-container"
            message-class="common-form-error"
          />

          <FormKit
            type="date"
            name="birthdate"
            label="Date of Birth"
            placeholder="DD/MM/YYYY"
            format="DD/MM/YYYY"
            :validation="`required|date_before:${eighteenYearsAgo}`"
            :validation-messages="{
              required: 'Campo requerido',
              date_before: 'Debes ser mayor de edad'
            }"
            validation-visibility="dirty"
            outer-class="common-form-field"
            label-class="common-form-label"
            input-class="common-form-input common-form-input--date"
            messages-class="common-form-messages-container"
            message-class="common-form-error"
          />

          <!--    TODO: Improve checkbox component to accept html for label prop      -->
          <CustomCheckboxField
            name="terms"
            label="He leído y acepto lod Términos y condiciones"
            validation="accepted"
            :validation-messages="{
              accepted: 'Campo requerido'
            }"
          />

          <CustomCheckboxField
            name="privacy"
            label="Acepto de manera expresa e informada la Política de Tratamiento de datos personales de Kambista"
            validation="accepted"
            :validation-messages="{
              accepted: 'Campo requerido'
            }"
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
            :disabled="!state.valid || loading"
            :class="{
              'opacity-60': !state.valid || loading,
              'cursor-not-allowed': !state.valid || loading
            }">
            {{ loading ? 'INICIANDO SESIÓN' : 'INICIA SESIÓN' }}
          </button>

          <div class="mx-auto my-[20px] flex justify-center">
            <span class="login-page__register-link">¿No tienes cuenta? <NuxtLink to="/" class="underline">Registrate aquí</NuxtLink></span>
          </div>

        </FormKit>
      </div>
    </div>
  </PageBase>
</template>
<script setup lang="ts">
import {DocumentTypes} from "~/types";
import {alphaSpacesOnly} from "~/utils/validations";
// import {n} from "vue-router/dist/index-BQLwgiyK";

definePageMeta({
  requiresAuth: true
})
const selectedDocumentType = ref<string | number | null>(null);
const loading = ref<boolean>(false);
const errorMessage = ref<string | null >(null);
const isDocumentRequired = ref<boolean>(false);

const DOCUMENT_TYPES_OPTS = [
  {value: DocumentTypes.DNI, label: 'DNI'},
  {value: DocumentTypes.CCE, label: 'CCE'},
  {value: DocumentTypes.PASSPORT, label: 'Pasaporte'},
];

//TODO: rename and move it to new utils files
const eighteenYearsAgo = computed(() => {
  const date = new Date()
  date.setFullYear(date.getFullYear() - 18)
  return date.toISOString().split('T')[0]
});

const isDocumentDNI = computed(() => {
  return selectedDocumentType.value === DocumentTypes.DNI;
});

const isDocumentCCE = computed(() => {
  return selectedDocumentType.value === DocumentTypes.CCE;
});

const isDocumentPassport = computed(() => {
  return selectedDocumentType.value === DocumentTypes.PASSPORT;
});

// TODO: Improve it to change validatios and messages on document type change, use watch
const documentNumValidations = computed(() => {
  const baseRules = 'required|matches:/^\\d+$/';

  if (isDocumentDNI.value) {
    return `${baseRules}|length:8,8`;
  }
  if (isDocumentCCE.value) {
    return `${baseRules}|length:9,9`;
  }
  if (isDocumentPassport.value) {
    // matches:/^[A-Za-z0-9]+$/;
    return `${baseRules}|length:8,15`;
  }

  return baseRules;
});

const documentNumLengthError = computed(() => {
  if (isDocumentDNI.value) return 'El DNI debe tener 8 dígitos.';
  if (isDocumentCCE.value) return 'El CCE debe tener 9 dígitos.';
  if (isDocumentPassport.value) return 'El pasaporte debe tener entre 8 y 15 caracteres.';

  return 'Longitud de caracteres inválida.'
});

const handleDocumentNumChange = () => {
  console.log('handleDocumentNumChange');
  if(!selectedDocumentType.value) {
    isDocumentRequired.value = true;
  }

}

const onSelectDocumentType = () => {
  isDocumentRequired.value = false;
}

const handleLogin = async (formData:any) => {
  console.log('formData ONBOARDING', formData);
};

</script>
<style lang="scss" scoped>
.onboarding-page {
  &__wrapper-content {
    @apply bg-transparent md:bg-white p-0 md:px-[64px] md:py-[40px] rounded-[16px] border-[1px] border-k-gray-21 w-full md:max-w-[525px];
  }
  &__wrapper-form {
    &:deep(> .formkit-messages) {
      display: none;
    }
  }
}
</style>
