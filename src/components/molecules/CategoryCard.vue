<template>
  <div class="category-card-container flex items-center gap-10" v-if="categories.length">
    <div class="category-card" v-for="category in categories" :key="category.id">
      <router-link :to="{ path: `/categories/${category.name}` }" class="flex items-center gap-2">
        <img class="categories-image rounded-lg border-2" :src="`${ category.image }`">
        <div class="categories-title font-medium text-black text-base">
          {{ category.name }}
        </div>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Kategoriler yükleniyor</p>
  </div>
</template>

<script>
import apiRequests from '../../mixins/apiRequests.js';

export default {
  mixins: [
    apiRequests
  ],
  data() {
    return {
      categories: []
    }
  },
  mounted() {
    this.getCategories();
  },
}
</script>

<style>
.category-card-container {
  flex-wrap: wrap;
  margin: auto 5px;
  gap: 30px;
  justify-content: center;
}

.category-card a {
  margin: 10px auto;
  cursor: pointer;
  flex-direction: column;
  color: black;
}

.category-card:hover {
  box-shadow: 1px 0px 8px rgb(2 2 2 / 30%);
}

.categories-image {
  border-radius: 20px;
  width: 85px;
  box-shadow: 0px 5px 7px #9797a569;
}
</style>
