<template>
  <div class="wrapper">
    <q-ajax-bar
      color="red-9"
      size="5px"
    />
    
    <NavBar />
    
    <router-view />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';

</script>

<style lang="scss">
.wrapper {
  display: flex;
}
</style>