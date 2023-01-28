<template>
  <CategoryNavbar :selectedCategory="$route.params.id"></CategoryNavbar>
  <div class="category-title text-black text-left m-2 font-medium text-lg">{{ $route.params.id }}</div>
  <ProductCard :productList="productList"></ProductCard>
</template>

<script>
import CategoryNavbar from '../components/molecules/CategoryNavbar.vue';
import ProductCard from '../components/molecules/ProductCard.vue';
import apiRequests from '../mixins/apiRequests.js';

export default {
  name: 'CategoryPage',
  components: {
    CategoryNavbar,
    ProductCard
  },
  mixins: [
    apiRequests
  ],
  data() {
    return {
      productList: [],
    }
  },
  mounted() {
    this.getProductsByCategory(this.$route.params.id);
  },
}
</script>

<style>
</style>