<template>
  <Title :title="'ÜRÜN DETAY'"></Title>
  <div class="product-card-container flex items-center justify-center">
    <div class="product-card flex flex-col gap-7 p-7">
      <div class="product-image-container relative">
        <img
            class="product-image rounded-lg border-2 w-80"
            :src="`${ product.image }`">
      </div>
      <div class="product-title font-medium text-black text-lg uppercase">
        {{ product.name }}
      </div>
      <div class="product-price-container gap-4 flex text-black text-lg justify-center">
        <div
            v-if="product.price !== product.originalPrice"
            class="product-discount-price font-medium line-through">
          {{ product.price }}₺
        </div>
        <div class="product-price font-semibold text-xl">
          {{ product.originalPrice }}₺
        </div>
      </div>
      <div
          class="product-add-to-cart text-black w-80 p-2 rounded-lg shadow-xl font-semibold"
          :id="product.id"
          @click="addProductToBasket(product.id)">
        SEPETE EKLE
      </div>
    </div>
  </div>
</template>

<script>
  import apiRequests from '../mixins/apiRequests';
  import Title from '../components/molecules/Title.vue';
  export default {
    name: 'ProductPage',
    mixins: [
      apiRequests
    ],
    components: {
      Title
    },
    data() {
      return {
        product: {},
      }
    },
    methods: {
      async getProductData () {
        this.product = await this.getProductById(this.$route.params.id);
      }
    },
    created() {
      this.getProductData();
    },
  }
</script>

<style scoped>
  .product-add-to-cart {
    background-color: #ff3d3d;
    color: #d1eec7;
  }
  .product-add-to-cart:hover {
    background-color: #3d87ff;
  }

  .product-discount-price {
    color: #787878;
  }

  .product-price {
    color: #039ba7;
  }
</style>