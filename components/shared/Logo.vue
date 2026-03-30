<template>
  <img
    :src="logoPath"
    alt="DAIC Logo"
    class="block w-full h-full object-contain"
  />
</template>

<script setup lang="ts">
const logoPath = './logo.svg'
</script>

<style scoped>
img {
  will-change: transform;
}
</style>
