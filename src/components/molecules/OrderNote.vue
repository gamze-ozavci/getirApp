<template>
  <div class="order-container flex flex-col gap-2">
    <div class="title text-left text-sm">
      Not Ekle
    </div>
    <input
        v-model="orderData.orderNote"
        type="text"
        placeholder="Sipariş notunuzu buraya yazabilirsiniz."
        class="w-96 order-note p-4"
    />
    <div class="flex text-sm">
      <input
          type="checkbox"
          v-model="orderData.leftDoor"
          value="true"
      />
      <label class="m-2">Siparişi Kapıya Bırak</label>
      <input
          type="checkbox"
          v-model="orderData.ringBell"
          value="true"
      />
      <label class="m-2">Zili Çalma</label>
    </div>
  </div>
</template>

<script>

import Title from '@/components/molecules/Title.vue';

export default {
  name: 'OrderNote',
  components: {
    Title
  },
  data() {
    return {
      orderData: {
        orderNote: '',
        leftDoor: false,
        ringBell: false
      },
    };
  },
}
</script>

<style>
.order-container {
  margin: 5px auto;
}
.title , label {
  color: #787878;
}

.order-note {
  border-radius: 5px;
}

::placeholder {
  color: rgb(177, 177, 177);
  font-size: 14px;
}

.order-container input[type=checkbox] {
  width: 20px;
}
</style>