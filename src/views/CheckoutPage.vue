<template>
  <Title :title="'Ödeme Yap'"></Title>
  <div class="flex flex-col gap-5">
    <Address></Address>
    <OrderNote></OrderNote>
    <CartButton :buttonText="'SİPARİŞİ TAMAMLA'" :routerLink="'/checkout'"></CartButton>
  </div>
</template>

<script>
import Title from '../components/molecules/Title.vue';
import Address from '../components/molecules/Address.vue';
import OrderNote from '../components/molecules/OrderNote.vue';
import CartButton from "@/components/molecules/CartButton.vue";
export default {
  name: 'CheckoutPage',
  components: {
    CartButton,
    Title,
    Address,
    OrderNote
  },
}
</script>

<style>
</style>