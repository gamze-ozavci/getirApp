<template>
  <router-link :to="{ name:'Home' }">
    <div class="main-title font-semibold p-2 uppercase">
      <h3>
        {{ title }}
      </h3>
      <img :src="logo">
    </div>
  </router-link>
</template>

<script>
export default {
  props: [
    'title',
    'logo'
  ]
}
</script>

<style>
.main-title {
  background-color: #3d87ff;
  color: #d1eec7;
}
</style>