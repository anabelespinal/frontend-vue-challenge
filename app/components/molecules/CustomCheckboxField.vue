<template>
  <FormKit
    type="checkbox"
    :name="name"
    :label="label"
    :validation="validation"
    :validation-messages="validationMessages"
    validation-visibility="dirty"
    outer-class="mb-[10px]"
    label-class="common-form-checkbox-label"
    messages-class="common-form-messages-container"
    message-class="common-form-error"
    input-class="common-form-checkbox"
    :classes="{
      wrapper: 'flex items-start gap-3 cursor-pointer',
      inner: 'flex items-center shrink-0 mt-0.5',
    }"
  />
</template>

<script setup lang="ts">
interface Props {
  name: string;
  label: string;
  validation?: string;
  validationMessages?: Record<string, string>;
}

defineProps<Props>();
</script>