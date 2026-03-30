<template>
  <img
    :src="logoPath"
    alt="DAIC Logo"
    class="block max-w-full max-h-full object-contain"
  />
</template>

<script setup lang="ts">
const logoPath = './logo.svg'
</script>

<style scoped>
img {
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
}
</style>
