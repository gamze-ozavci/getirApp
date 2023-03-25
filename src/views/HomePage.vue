<template>
  <div class="home">
    <Title :title="'GÖTÜR'"></Title>
    <Slider :images="images"></Slider>
    <div class="categories-title text-black text-left mt-5 font-medium text-lg">Kategoriler</div>
    <CategoryCard></CategoryCard>
  </div>
</template>

<script>
import CategoryCard from '../components/molecules/CategoryCard.vue';
import Title from '../components/molecules/Title.vue';
import Slider from '../components/molecules/Slider.vue';

export default {
  name: 'HomePage',
  components: {
    CategoryCard,
    Slider,
    Title
  },
  data() {
    return {
      images: [
        'https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/200122-elsiva.jpg',
        'https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/190123-markalaraozel-10-20-30.jpg',
        'https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/200123-100tlveuzeri-ke.jpg',
        'https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/200123-100tlveuzeri-cb.jpg',
      ],
    };
  },
}
</script>