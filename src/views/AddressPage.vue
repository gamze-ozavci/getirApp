<template>
  <Title :title="'ADRESLER'"></Title>
  <AddressCard></AddressCard>
</template>

<script>
import AddressCard from '../components/molecules/AddressCard.vue';
import Title from "@/components/molecules/Title.vue";

export default {
  name: 'AddressPage',
  components: {
    Title,
    AddressCard
  },
}
</script>

<style scoped>
</style>