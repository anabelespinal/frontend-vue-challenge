<template>
  <PageBase v-if="renderPage">
    <template #simpleHeader>
      <SimpleHeader
        :show-buton="false"
        show-back
        :back-url="backUrl"
        show-progress-bar
        :current-step-index="2"
      />
    </template>

    <div class="flex w-full justify-center">
      <div class="w-full sm:max-w-[535px] flex flex-col items-center">
        <FormKit
          type="form"
          form-class="max-w-full"
          @submit="handleSubmit"
          :actions="false"
          v-slot="{ state, value }">
          <div class="detail_resume">
            <img
              src="/images/receipt-k.png"
              alt="Transfiere a Kambista"
              class="w-[132px] flex-shrink-0 object-contain mb-[30px]"
            />

            <h2 class="common-title mx-auto text-center">Envía tu constancia</h2>
            <p class="font-montserrat text-k-secondary font-light text-[14px] text-center inline-block mt-[10px] mb-[15px] px-2 w-[90%]">
              Adjunta la constancia de tu transferencia para poder verificar tu operación.
            </p>

            <div class="detail_resume__box">
              <FormKit
                :value="state.valid ? 'VALID' : 'sel'"
                type="file"
                label="Sube el archivo de tu constancia"
                placeholder="Selecciona un archivo"
                help="*Tamaño máximo permitido del archivo 10 Mb"
                name="receiptFile"
                multiple="false"
                :accept="ALLOWED_FILES"
                :validation="`required|mime:${ALLOWED_MINE_FILES}|max:10485760`"
                :validation-messages="{
                  mime: 'Solo se permite imágenes, word y PDF',
                  required: 'Campo requerido',
                  max: 'El peso del archivo es mayor al permitido'
                }"
                validation-visibility="dirty"
                label-class="common-form-label text-k-secondary"
                input-class="hidden"
                messages-class="common-form-messages-container"
                message-class="common-form-error"
                help-class="common-form-help"
              >
                <template #prefix="{ node }">
                  <button
                    type="button"
                    @click="$el.querySelector('input[name=receiptFile]').click()"
                    class="common-form-input common-form-input--file"
                  >
                    <span class="inline-block truncate max-w-[90%]">
                      {{ (value.receiptFile && value.receiptFile[0]) ? value.receiptFile[0]?.name : 'Selecciona archivo' }}
                    </span>
                  </button>
                </template>
                <template #noFiles>
                  <div class="hidden"></div>
                </template>
                <template #fileName>
                  <div class="hidden"></div>
                </template>
                <template #fileList>
                  <div class="hidden"></div>
                </template>
              </FormKit>

            </div>
            <div>
              <span class="text-[14px] text-k-gray-40 font-medium">Recuerda:</span>
              <ul class="space-y-2 text-[14px] text-k-gray-40 font-medium">
                <li class="flex items-start gap-2 mb-[-5px]">
                  <span class="w-1 h-1 rounded-full bg-k-gray-40 flex-shrink-0 mt-2"></span>
                  <span>El voucher enviado debe tener el <strong class="font-extrabold">monto, datos del beneficiario, fecha y hora.</strong></span>
                </li>
                <li class="flex items-start gap-2 mb-[-5px]">
                  <span class="w-1 h-1 rounded-full bg-k-gray-40 flex-shrink-0 mt-2"></span>
                  <span>El voucher debe ser legible</span>
                </li>
                <li class="flex items-start gap-2 mb-[-5px]">
                  <span class="w-1 h-1 rounded-full bg-k-gray-40 flex-shrink-0 mt-2"></span>
                  <span>Archivos permitidos <strong class="font-extrabold">imágenes, word y PDF</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-6 w-full">
            <button
              type="submit"
              class="common-btn mt-4 mb-2"
              :disabled="!state.valid || loading">
              {{ loading ? 'CARGANDO...' : 'ENVIAR CONSTANCIA' }}
<!--              `${state.valid}`-->
            </button>
          </div>
        </FormKit>
      </div>
    </div>
  </PageBase>
</template>
<script setup lang="ts">
import {ALLOWED_FILES, ALLOWED_MINE_FILES} from "~/constants";

definePageMeta({
  middleware: 'valid-transaction-id',
})

const route = useRoute();
const {getTransactionById, renderPage, transaction, loading, completeTransaction} = useTransaction();

const backUrl = computed(() => `/transactions/operation/${transaction.value.id}/detail`);

const handleSubmit = () => {
  //TODO: update service to receive file
  completeTransaction(transaction.value?.id as string);
}

onBeforeMount(async () => {
  await getTransactionById(route.params.operationId as string);
})

</script>
<style lang="scss" scoped>
.detail_resume {
  @apply px-[30px] pt-[35px] pb-[20px] bg-white rounded-[8px] w-full border-[1px] border-k-gray-23 flex flex-col items-center;
  &__box {
    @apply p-[15px] rounded-[8px] w-full border-[1px] border-k-gray-30;
  }
  li {
    line-height: 16px;
    max-width: 85%;
  }
}
</style>
