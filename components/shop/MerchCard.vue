<template>
  <div
    class="group relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl border border-dark-700 hover:border-primary-600/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/40 hover:-translate-y-2 hover:scale-[1.02] animate-fade-in hover:cursor-hook"
  >
    <div class="absolute -inset-1 bg-gradient-to-r from-primary-600/0 via-primary-600/0 to-primary-600/0 group-hover:from-primary-600/20 group-hover:to-accent-blue/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    <div class="relative h-56 bg-dark-700 overflow-hidden flex items-center justify-center">
      <img
        :src="product.image"
        :alt="product.name"
        :class="[
          'w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110',
          isNsfwFigure ? 'blur-xl brightness-75' : ''
        ]"
        loading="lazy"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span
        v-if="isNsfwFigure"
        class="absolute top-2 right-2 text-[10px] px-2 py-1 rounded-full bg-black/70 text-dark-100 border border-dark-500 animate-pulse-soft"
      >
        NSFW preview geblurred
      </span>
    </div>
    <div class="p-4 space-y-3">
      <div class="flex gap-2">
        <span class="text-xs px-2.5 py-1 rounded-full bg-primary-900/40 text-primary-300 font-semibold group-hover:bg-primary-800/60 transition-colors duration-300">
          {{ product.category === 'merch' ? 'Winkel' : 'Game' }}
        </span>
      </div>
      <h3 class="font-display font-bold text-lg text-dark-100 line-clamp-2 group-hover:text-primary-300 transition-colors duration-300">
        {{ product.name }}
      </h3>
      <p class="text-sm text-dark-400 line-clamp-2">
        {{ product.description }}
      </p>
      <div class="flex items-end justify-between pt-2">
        <div @mouseenter="onPriceInteract" @click="onPriceInteract">
          <p class="text-xs text-dark-500 mb-1">Prijs</p>
          <p
            class="text-xl font-bold bg-gradient-to-r from-accent-gold to-accent-blue bg-clip-text text-transparent group-hover:animate-gradient-shift transition-all duration-300"
            :class="{ 'scale-110': justChanged }"
            style="background-size: 200% 200%"
          >
            {{ displayPrice }}
          </p>
        </div>
        <button
          @click="addToCart"
          class="p-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/50 transform hover:scale-125 active:scale-95 relative overflow-hidden group/btn"
          :aria-label="`${product.name} toevoegen aan winkelmand`"
        >
          <span class="absolute inset-0 bg-white/20 scale-0 group-hover/btn:scale-100 transition-transform duration-500 rounded-lg" />
          <svg class="w-5 h-5 relative z-10 transition-transform duration-300 group-hover/btn:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '~/types/shop'
import { useCartStore } from '~/stores/cartStore'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const cart = useCartStore()
const isNsfwFigure = props.product.id === 'amelia-figure'
const displayPrice = ref(props.product.priceDisplay)
const justChanged = ref(false)
let interactCount = 0

const onPriceInteract = () => {
  interactCount++
  if (interactCount >= 2) {
    const inflated = props.product.price * (1 + interactCount * 0.15)
    displayPrice.value = new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    }).format(inflated)
    // Brief scale pop on change
    justChanged.value = true
    setTimeout(() => { justChanged.value = false }, 300)
  }
}

const addToCart = () => {
  cart.addItem(props.product, 1)
}
</script>
