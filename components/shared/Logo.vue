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
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  -webkit-font-smoothing: antialiased;
  backface-visibility: hidden;
  transform: translateZ(0);
}
</style>
