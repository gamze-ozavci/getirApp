<template>
  <p class="text-black text-left mt-4 ml-4">Teslimat adresinizi seçin</p>
  <div
      class="address-card-container flex-col flex items-center gap-5 p-2"
      v-if="addressList.length">
    <div
        class="address-card flex-row flex items-center w-96"
        v-for="address in addressList"
        :class="{ 'selected-address' : address.baslik === selectedAddress }"
        :key="address.baslik"
        @click="setSelectedCategory(address.baslik)">
      <div class="flex items-center gap-2">
        <div class="content-container flex-row flex p-2">
          <div class="sub-container flex-col flex justify-start items-start">
            <div class="address-title text-base	font-medium text-black text-left">
              {{ address.baslik }}
            </div>
            <div class="address-text text-sm font-medium text-black text-left">
              {{ address.longAddress }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-link
      :to="{ path: `/add/address` }">
    <div class="address-ekle-container address-card flex items-center gap-1 p-2 w-96 m-auto	mt-3">
      <div class="plus p-1 text-xl">+</div>
      <div class="address-ekle">Yeni Adres Ekle</div>
    </div>
  </router-link>
</template>

<script>
import store from '../../store/index.js';
export default {
  data() {
    return {
      addressList: store.state.addresses,
      selectedAddress: store.state.selectedAddress
    }
  },
  methods: {
    setSelectedCategory: function (selectedAddress) {
      store.commit('setSelectedCategory', selectedAddress);

      this.selectedAddress = store.state.selectedAddress;
    }
  }
}
</script>

<style scoped>
.address-card {
  box-shadow: 0px 1px 4px 0px #cbcbcb;
  border-radius: 4px;
  background: #ffffffb8;
  color: #3d87ff;
}

.address-title {
  color: #306fd6;
}

.address-text {
  color: #000000c4;
}

.selected-address {
  border: 2px solid #3d87ff;
}
</style>