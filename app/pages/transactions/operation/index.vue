<template>
  <PageBase>
    <template #simpleHeader>
      <SimpleHeader
        :show-buton="false"
        show-back back-url="/"
        show-progress-bar
        :current-step-index="0"
      />
    </template>

    <div class="flex w-full justify-center pt-0 md:pt-[35px] px-3">
      <div class="max-w-full w-full sm:w-[445px]">
        <h2 class="common-title mx-auto text-center mb-[32px]">Completa los datos de tu operación</h2>
        <div class="px-5">
          <ExchangeResumeCard :exchange="exchange"/>
          <div class="mt-3">
            <CustomSelect
              label="¿Desde qué banco nos envías tu dinero?"
              placeholder="Selecciona"
              :options="bankOptions"
              v-model="selectedBank"
              classes="mb-0"
              :select-class="{'bg-white': true, '!border-k-gray-25': true}"
            />
          </div>
          <div class="mt-3">
            <CustomSelect
              label="¿En qué cuenta deseas recibir tu dinero?"
              placeholder="Selecciona"
              :options="accountOpts"
              v-model="selectedAccount"
              classes="mb-0"
              :select-class="{'bg-white': true, '!border-k-gray-25': true}"
            />
          </div>
          <div class="mt-3">
            <CustomSelect
              label="Origen de fondos?"
              placeholder="Selecciona"
              :options="fundOpts"
              v-model="selectedFund"
              classes="mb-0"
              :select-class="{'bg-white': true, '!border-k-gray-25': true}"
            />
          </div>
          <div class="mx-auto my-[20px] flex justify-center" v-if="errorMessage">
            <span class="common-form-error">{{errorMessage}}</span>
          </div>
          <div>
            <button
              @click="handleContinue"
              class="common-btn mt-4 mb-2"
              :disabled="!isValidForm || loading">
              {{ loading ? 'CARGANDO...' : 'CONTINUAR' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </PageBase>
</template>
<script setup lang="ts">
import mocksBanks from '~/mocks/bankAccounts.json';
import mocksFunds from '~/mocks/sourceFunds.json';
import type {Bank, BankAccount, SourceFund, Transaction} from "~/types";
import {FAKE_BANK_ACCOUNTS} from "~/constants";
import {useTransaction} from "~/composables/useTransaction";

definePageMeta({
  middleware: 'create-transaction',
})

const {createTransaction, errorMessage, loading} = useTransaction();
const transactionStore = useTransactionStore();

const banks: Bank[] = mocksBanks as Bank[];
const sourceFunds: SourceFund[] = mocksFunds as SourceFund[];

const selectedBank = ref<string | number | null>(null);

const selectedAccount = ref<string | number | null>(null);

const selectedFund = ref<string | number | null>(null);

const bankOptions = computed(() => banks.map(b => ({ value: b.id, label: b.alias })));
const accountOpts = computed(() => FAKE_BANK_ACCOUNTS.map(b => ({ value: b.id, label: b.alias })))
const fundOpts = computed(() => sourceFunds.map(b => ({ value: b._id, label: b.name })));

const exchange = computed(() => transactionStore.getCurrentTransaction);

const isValidForm = computed(() => exchange && selectedBank.value && selectedAccount.value && selectedFund.value);

async function getTransactionData() {

  const b:Bank = banks.find(b => b.id === selectedBank.value) as Bank;
  const a = FAKE_BANK_ACCOUNTS.find(a => a.id === selectedAccount.value) as BankAccount;
  const sf = sourceFunds.find(a => a._id === selectedFund.value) as SourceFund;

  const data = await {
    bank: b,
    account: a,
    sourceFund: sf,
  };

  return data as Partial<Transaction>
}

const handleContinue = async () => {
  const newData = await getTransactionData() as Partial<Transaction>;
  await createTransaction(newData);
}
</script>
<style lang="scss" scoped>
</style>
