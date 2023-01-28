<template>
  <div class="product-card-container flex items-center gap-10" v-if="productList.length">
    <div class="product-card" v-for="product in productList" :key="product.id">
      <div class="product-image-container relative">
        <div class="product-add-to-cart" :id="product.id">+</div>
        <img class="product-image rounded-lg border-2" :src="`${ product.image }`">
      </div>
      <div class="product-title font-medium text-black text-base">
        {{ product.name }}
      </div>
      <div class="product-price-container gap-1 flex text-black text-lg">
        <div v-if="product.price !== product.originalPrice" class="product-discount-price font-medium line-through">
          {{ product.price }}₺
        </div>
        <div class="product-price font-semibold text-lg">
          {{ product.originalPrice }}₺
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Ürünler yükleniyor</p>
  </div>
</template>

<script>
export default {
  name: "ProductCard.vue",
  props: [
    'productList'
  ]
}
</script>

<style scoped>
.product-card-container {
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.product-card {
  position: relative;
  margin: 10px auto;
  cursor: pointer;
  flex-direction: column;
  color: black;
  display: flex;
  gap: 10px;
  align-items: center;
}

.product-add-to-cart {
  position: absolute;
  right: -15px;
  font-size: 22px;
  color: #3d87ff;
  border: 1px solid #97b98b3d;
  padding: 8px;
  border-radius: 10px;
  line-height: 13px;
  font-weight: 500;
  background-color: #f7f7f8;
  box-shadow: 0px 1px 1px #ececef;
}

.product-image {
  border-radius: 20px;
  width: 85px;
  box-shadow: 0px 5px 7px #9797a569;
}

.product-price {
  color: #039ba7;
}

.product-discount-price {
  color: #787878;
}
</style>