<template>
  <button
    @click="cart.toggleCart()"
    class="relative p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all duration-300 text-primary-400 hover:text-primary-300 group"
    :aria-label="`Shopping cart with ${cart.itemCount} items`"
  >
    <svg class="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
    <span
      v-if="cart.itemCount > 0"
      class="absolute -top-2 -right-2 bg-accent-pink text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse-glow"
    >
      {{ cart.itemCount }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cartStore'

const cart = useCartStore()
</script>
