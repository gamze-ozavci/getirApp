<template>
  <Title :title="'GÖTÜR'"></Title>
    <CategoryNavbar
        :selectedCategory="$route.params.id"
        @click="setProductList()">
    </CategoryNavbar>
    <div class="category-title text-black text-left m-2 font-medium text-lg">
        {{ $route.params.id }}
    </div>
    <ProductCard :productList="productList"></ProductCard>
</template>

<script>
  import CategoryNavbar from '../components/molecules/CategoryNavbar.vue';
  import ProductCard from '../components/molecules/ProductCard.vue';
  import Title from '../components/molecules/Title.vue';
  import apiRequests from '../mixins/apiRequests.js';

  export default {
      name: 'CategoryPage',
      components: {
          CategoryNavbar,
          ProductCard,
          Title
      },
      mixins: [
          apiRequests
      ],
      data() {
          return {
              productList: [],
          }
      },
      methods: {
          async setProductList () {
            this.productList = await this.getProductsByCategory(this.$route.params.id);
          }
      },
      created() {
        this.setProductList()
      },
  }
</script>

<style>
</style>