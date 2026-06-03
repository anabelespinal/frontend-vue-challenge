<template>
  <div class="login-page">
    <h3>LOGIN PAGE</h3>
    <!--    :class="{'login-page__wrapper-form': true}"-->
    <!--    outer-class="foo-bar"-->
    <FormKit type="form" submit-label="Login" @submit="handleLogin" form-class="login-page__wrapper-form">
      <FormKit
          type="email"
          name="email"
          label="Email Address"
          placeholder="example@mail.com"
          validation="required|email"
          validation-visibility="dirty"
      />

      <FormKit
          type="password"
          name="password"
          label="Password"
          validation="required|length:8"
          validation-visibility="dirty"
      />

    </FormKit>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'register',
})

const handleLogin = (formData) => {
  console.log('data', formData)
}
</script>
<style lang="scss" scoped>
.login-page {
  background-color: blue;

  &__wrapper-form {
    background-color: yellow;

    &:deep(> .formkit-messages) {
      background-color: red;
    }
  }
}
</style>