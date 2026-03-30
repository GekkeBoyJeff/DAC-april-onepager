<template>
  <button
    @click="cart.toggleCart()"
    class="relative p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all duration-300 text-primary-400 hover:text-primary-300 group"
    :class="{ 'cart-bump': isBumping }"
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
      class="absolute -top-2 -right-2 bg-accent-pink text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
      :class="{ 'badge-pop': isBumping }"
    >
      {{ cart.itemCount }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { useCartStore } from '~/stores/cartStore'

const cart = useCartStore()
const isBumping = ref(false)

watch(() => cart.itemCount, (newVal, oldVal) => {
  if (newVal > oldVal) {
    isBumping.value = true
    setTimeout(() => { isBumping.value = false }, 500)
  }
})
</script>

<style scoped>
.cart-bump {
  animation: bump 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.badge-pop {
  animation: badge-pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes bump {
  0% { transform: scale(1); }
  30% { transform: scale(1.3) rotate(-8deg); }
  50% { transform: scale(0.9) rotate(4deg); }
  70% { transform: scale(1.1); }
  100% { transform: scale(1) rotate(0); }
}

@keyframes badge-pop {
  0% { transform: scale(1); }
  30% { transform: scale(1.6); }
  60% { transform: scale(0.8); }
  100% { transform: scale(1); }
}
</style>
