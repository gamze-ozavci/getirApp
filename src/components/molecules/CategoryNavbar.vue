<template>
  <div
      id="categories-container"
      class="flex">
    <div
        class="category-tab"
        v-for="category in categories"
        :key="category.id">
      <router-link
          :to="{ path: `/categories/${category.name}` }"
          class="flex items-center gap-2">
        <div class="categories-name font-medium text-base">
          {{ category.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import store from '../../store/index.js';

export default {
  name: 'CategoryNavbar',
  props: [
    'selectedCategory'
  ],
  data() {
    return {
        categories: store.state.categories
    }
  }
}
</script>

<style scoped>
#categories-container {
  background-color: #89ffe2;
  overflow: auto;
  white-space: nowrap;
  width: 100vw;
  gap: 18px;
  justify-content: space-between;
}

.categories-name {
  color: #2b54f7;
  padding: 10px;
  font-size: 14px;
}
</style>