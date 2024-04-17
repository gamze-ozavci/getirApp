<template>
  <div>
    <Title :title="'ADRES EKLE'"></Title>
    <form
        @submit.prevent="submitForm"
        v-if="!formSubmitted"
        class="submit-address flex flex-col w-80 p-6 gap-5">
      <input
          v-model="addressData.baslik"
          :class=" { 'text-warning': addressData.baslikWarning }"
          type="text"
          placeholder="Başlık *"
      />
      <input
          v-model="addressData.mahalle"
          :class=" { 'text-warning': addressData.mahalleWarning }"
          type="text"
          placeholder="Mahalle / Cadde / Sokak *"
      />
      <div class="sub-container flex justify-between">
        <input
            v-model="addressData.binaNo"
            :class=" { 'text-warning': addressData.binaWarning }"
            type="text"
            placeholder="Bina No *"
        />
        <input
            v-model="addressData.kat"
            type="text"
            placeholder="Kat"
        />
        <input
            v-model="addressData.daireNo"
            type="text"
            placeholder="Daire No"
        />
      </div>
      <input
          class="submit-button w-60 text-center p-3"
          type="submit"
          value="Adres Ekle"
      >
    </form>
  </div>
</template>

<script>
import Title from '@/components/molecules/Title.vue';
import store from '../../store/index.js';

export default {
  name: 'AddAddress',
  components: {
    Title
  },
  data() {
    return {
      addressData: {
        baslik: '',
        mahalle: '',
        binaNo: '',
        kat: '',
        daireNo: '',
      },
      warnings: {
        baslik: false,
        mahalle: false,
        bina: false
      },
      formSubmitted: false
    };
  },
  methods: {
    submitForm: function (event) {
      if (this.addressData.baslik && this.addressData.mahalle && this.addressData.binaNo) {
        this.formSubmitted = true;

        store.commit('addAddress', this.addressData);

        this.$router.push('/addresses');
      }

      this.addressData.baslikWarning = !this.addressData.baslik;
      this.addressData.mahalleWarning = !this.addressData.mahalle;
      this.addressData.binaWarning = !this.addressData.binaNo;

      event.preventDefault();
    }
  },
}
</script>

<style scoped>
.submit-address {
  margin: auto;
}

.submit-address input {
  padding: 10px;
  border: 1px solid #d7d5dd;
  border-radius: 5px;
  color: #424040;
  font-size: 14px;
}

.sub-container input {
  gap: 5px;
  width: 32%
}

.submit-button {
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
  background: #ff3d3d;
  color: #fff !important;
}

.text-warning {
  border: 1px solid red !important;
}

::placeholder {
  color: rgb(177, 177, 177);
  font-size: 14px;
  opacity: 1;
}
</style>