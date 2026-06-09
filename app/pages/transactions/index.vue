<template>
  <PageBase>
    <div class="flex flex-col items-center pt-0 md:pt-[35px] w-full">
      <div class="mb-[30px] max-w-full w-full sm:w-[520px]">
        <div
          class="detail_resume"
          v-for="t in transactionStore.getTransactions"
          :key="t.id">
          <div>
            <span class="font-montserrat text-[14px] font-bold text-k-secondary">{{ `Mi operación #${t.id}` }}</span>
          </div>
          <div>
            <button @click="goToTransaction(t.id)" class="common-btn">
             VER OPERACIÓN
            </button>
          </div>
        </div>
      </div>
    </div>
  </PageBase>
</template>
<script setup lang="ts">
const transactionStore = useTransactionStore();

const goToTransaction =  (id) => {
  navigateTo(`/transactions/operation/${id}`);
}

</script>
<style lang="scss" scoped>
.detail_resume {
  @apply px-[30px] pt-[35px] pb-[20px] bg-white rounded-[8px] w-full border-[1px] border-k-gray-23 flex flex-col items-center mb-4;
}
</style>
