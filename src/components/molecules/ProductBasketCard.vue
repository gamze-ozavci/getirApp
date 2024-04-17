<template>
  <div
      class="product-card-container flex-col flex items-center gap-5 p-3"
      v-if="productList.length">
    <div
        class="product-card flex-row flex items-center gap-10"
        v-for="product in productList"
        :key="product.id">
      <router-link
          :to="{ path: `/products/${product.id}` }"
          class="flex items-center gap-2">
        <div class="content-container flex-row flex gap-3">
          <div class="product-image-container relative">
            <img
                class="product-image rounded-lg border-2 w-40"
                :src="`${ product.image }`">
          </div>
          <div class="sub-container flex-col flex justify-start items-start pt-1">
            <div class="product-title font-medium text-black text-sm	 text-left">
              {{ product.name }}
            </div>
            <div class="product-price-container gap-1 flex text-black text-lg">
              <div v-if="product.price !== product.originalPrice"
                   class="product-discount-price font-medium line-through">
                {{ product.price }}₺
              </div>
              <div class="product-price font-semibold text-lg">
                {{ product.originalPrice }}₺
              </div>
            </div>
          </div>
        </div>
      </router-link>
      <div class="quantity-container flex-col flex">
        <div
            class="increase-quantity quantity-button"
            @click="addProductToBasket(product.id)">+</div>
        <div class="product-quantity quantity-button">{{ product.quantity }}</div>
        <div
            class="decrease-quantity quantity-button"
            @click="removeProductFromBasket(product.id)">-</div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../../store/index.js';
export default {
  name: 'ProductBasketCard',
  props: [
    'productList'
  ],
  methods: {
    addProductToBasket(productId) {
      store.dispatch('addProductToBasket', productId);
    },
    removeProductFromBasket(productId) {
      store.dispatch('removeProductFromBasket', productId);
    }
  }
}
</script>

<style scoped>
  .product-card {
    box-shadow: 0px 1px 4px 0px #cbcbcb;
    padding: 3px;
    border-radius: 4px;
  }

  .quantity-button {
    border: 1px solid #a7b9a1;
    padding: 5px 6px;
    font-size: 15px;
    font-weight: 700;
    background-color: #d1eec752;
    line-height: 15px;
    color: #3779e5;
    box-shadow: 0px 1px 4px 0px #b9cabe;
  }

  .product-discount-price {
    color: #787878;
  }

  .product-price {
    color: #039ba7;
  }
</style>