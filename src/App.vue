<template>
  <router-link
      :to="{ path: `/basket/` }"
      class="flex basket-icon gap-2">
      <svg xmlns="http://www.w3.org/2000/svg"
           width="19"
           height="19"
           fill="currentColor"
           class="bi bi-cart icon-cart"
           viewBox="0 0 19 19">
          <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
          .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61
          2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0
          4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
    </router-link>
  <router-view/>
</template>

<script>
import '@/assets/tailwind.css';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {}
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

.icon-cart {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  padding: 7px;
}
</style>