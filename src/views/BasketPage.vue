<template>
  <Title :title="'SEPET'"></Title>
  <ProductBasketCard :productList="productList"></ProductBasketCard>
  <CartButton :buttonText="'DEVAM ET'" :routerLink="'/checkout'"></CartButton>
</template>

<script>
  import Title from '../components/molecules/Title.vue';
  import CartButton from '../components/molecules/CartButton.vue';
  import ProductBasketCard from '../components/molecules/ProductBasketCard.vue';
  import store from '../store/index.js';
export default {
  name: 'BasketPage',
  components: {
    Title,
    CartButton,
    ProductBasketCard
  },
  data() {
    return {
      productList: []
    }
  },
  methods: {
    async getProductList () {
      this.productList = store.getters.getProductsInBasket;
    }
  },
  created() {
    this.getProductList();
  },
}
</script>

<style scoped>
</style>