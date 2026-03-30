<template>
  <div
    class="group relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl border border-dark-700 hover:border-primary-600/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/20 hover:-translate-y-1"
  >
    <!-- Image Container -->
    <div class="relative h-56 bg-dark-700 overflow-hidden flex items-center justify-center">
      <img
        :src="product.image"
        :alt="product.name"
        :class="[
          'w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]',
          isNsfwFigure ? 'blur-xl brightness-75' : ''
        ]"
        loading="lazy"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span
        v-if="isNsfwFigure"
        class="absolute top-2 right-2 text-[10px] px-2 py-1 rounded-full bg-black/70 text-dark-100 border border-dark-500"
      >
        NSFW preview geblurred
      </span>
    </div>

    <!-- Content -->
    <div class="p-4 space-y-3">
      <!-- Category Badge -->
      <div class="flex gap-2">
        <span class="text-xs px-2.5 py-1 rounded-full bg-primary-900/40 text-primary-300 font-semibold">
          {{ product.category === 'merch' ? 'Winkel' : 'Game' }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="font-display font-bold text-lg text-dark-100 line-clamp-2">
        {{ product.name }}
      </h3>

      <!-- Description -->
      <p class="text-sm text-dark-400 line-clamp-2">
        {{ product.description }}
      </p>

      <!-- Price -->
      <div class="flex items-end justify-between pt-2">
        <div>
          <p class="text-xs text-dark-500 mb-1">Prijs</p>
          <p class="text-xl font-bold bg-gradient-to-r from-accent-gold to-accent-blue bg-clip-text text-transparent">
            {{ product.priceDisplay }}
          </p>
        </div>

        <!-- Add to Cart Button -->
        <button
          @click="addToCart"
          class="p-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-all duration-250 hover:shadow-lg hover:shadow-primary-900/50 transform hover:scale-110"
          :aria-label="`${product.name} toevoegen aan winkelmand`"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/shop'
import { useCartStore } from '~/stores/cartStore'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const cart = useCartStore()
const isNsfwFigure = props.product.id === 'amelia-figure'

const addToCart = () => {
  cart.addItem(props.product, 1)
}
</script>
