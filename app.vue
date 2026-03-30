<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import './app.css'
</script>

<style>
* {
  @apply antialiased;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-dark-900;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-dark-800;
}

::-webkit-scrollbar-thumb {
  @apply bg-primary-600 rounded-full hover:bg-primary-500;
}

/* Selection styling */
::selection {
  @apply bg-primary-600/30 text-primary-100;
}
</style>
