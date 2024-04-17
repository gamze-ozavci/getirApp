<template>
  <router-link
      to="/addresses"
      class="address-container w-96">
    <div class="current-address w-80 text-left p-2">
      {{ currentAddress }}
      <div class="text-black text-sm address-text">{{ address }}</div>
    </div>
    <div class="teslimat-süresi p-2">TTS 8DK</div>
  </router-link>
</template>

<script>
import store from '../../store/index.js';
export default {
  data() {
    return {
      currentAddress: store.state.selectedAddress,
      address: store.state.selectedAddressLong
    }
  }
}
</script>

<style>
.address-container {
  display: flex;
  margin: 5px auto;
}

.teslimat-süresi {
  background: #ffc65c;
  color: #3d87ff;
  font-weight: bold;
  border-radius: 8px 0px 0px 8px;
}

.current-address {
  background: white;
  color: #3d87ff;
  border-radius: 5px 0 0 5px;
}

.address-text {
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #787878;
}
</style>