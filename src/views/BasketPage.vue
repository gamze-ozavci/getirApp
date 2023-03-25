<template>
  <Title :title="'SEPET'"></Title>
  <ProductBasketCard :productList="productList"></ProductBasketCard>
</template>

<script>
  import apiRequests from '../mixins/apiRequests';
  import Title from '../components/molecules/Title.vue';
  import ProductBasketCard from '../components/molecules/ProductBasketCard.vue';
export default {
  name: 'BasketPage',
  mixins: [
    apiRequests
  ],
  components: {
    Title,
    ProductBasketCard
  },
  data() {
    return {
      productList: [],
    }
  },
  methods: {
    async getProductList () {
      this.productList = await this.getProductsInBasket();
    }
  },
  created() {
    this.getProductList();
  },
}
</script>

<style scoped>
</style>