<template>
  <div class="home">
    <Slider></Slider>
    <div class="categories-title text-black text-left mt-5 font-medium text-lg">Kategoriler</div>
    <CategoryCard></CategoryCard>
  </div>
</template>

<script>
import CategoryCard from '../components/molecules/CategoryCard.vue';
import Slider from '../components/molecules/Slider.vue';

export default {
  name: 'Home',
  components: {
    CategoryCard,
    Slider
  }
}
</script>