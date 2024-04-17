<template>
  <router-link
      :to="{ path: routerLink }"
      class="go-to-checkout flex items-center gap-2 text-white w-96 rounded-lg shadow-xl font-semibold">
    <div class="continue-button w-60 text-center p-3">{{ buttonText }}</div>
    <div class="total-basket-price font-semibold text-xl w-40">
      {{ getTotalCartAmount }} ₺
    </div>
  </router-link>
</template>

<script>
import store from '@/store/index.js';

export default {
  props: [
    'buttonText',
    'routerLink',
  ],
  computed: {
    getTotalCartAmount() {
      return store.getters.getTotalCartAmount;
    }
  }
}

</script>

<style scoped>
.go-to-checkout {
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
}

.continue-button {
  background: #ff3d3d;
}

.total-basket-price {
  color: #039ba7;
  padding: 0 8px;
}
</style>