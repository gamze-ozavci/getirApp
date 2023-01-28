<template>
  <Title :title="title"></Title>
  <router-view/>
</template>

<script>
import Title from '../src/components/molecules/Title.vue';
import '@/assets/tailwind.css';

export default {
  name: 'App',
  components: {
    Title
  },
  data() {
    return {
      title: 'GÖTÜR'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f1f2f6;
}

body {
  background-color: #ececef;
}
</style>