<template>
  <section id="merch" class="relative py-20 md:py-32 bg-dark-800">
    <!-- Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header -->
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-4">
          <span class="bg-gradient-to-r from-accent-gold to-primary-300 bg-clip-text text-transparent">
            Officiele DAIC shop
          </span>
        </h2>
        <p class="text-lg text-dark-300 mb-6">
          Welkom in onze nieuwe website en webshop! Steun de community met exclusieve Amelia-merchandise.
        </p>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
        <div
          v-for="(product, index) in products"
          :key="product.id"
          :style="`animation: scaleIn 0.5s ease-out forwards; animation-delay: ${0.1 * (index + 1)}s; opacity: 0`"
        >
          <MerchCard :product="product" />
        </div>
      </div>

      <!-- Info Box -->
      <div class="mt-12 p-6 rounded-xl bg-dark-700/50 border border-dark-600 backdrop-blur-sm">
        <p class="text-dark-300 text-center">
          <span class="text-accent-blue font-semibold">💳 Afrekenen:</span>
          Voeg items toe aan je winkelmand en klik op "Verder naar afrekenen" voor een speciale verrassing.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MerchCard from '../shop/MerchCard.vue'
import type { Product } from '~/types/shop'

const products = ref<Product[]>([
  {
    id: 'amelia-figure',
    name: 'Amelia NSFW Figure',
    description: 'Hoogwaardige verzamelbare Amelia-figure met premium afwerking.',
    price: 150,
    priceDisplay: '€150',
    image: '/mascottes/amelia.png',
    category: 'merch',
    requiresShipping: true,
  },
  {
    id: 'amelia-body-pillow',
    name: 'Amelia Body Pillow Set',
    description: 'Comfortabele body pillow inclusief kussen en kussensloop.',
    price: 80,
    priceDisplay: '€80',
    image: '/mascottes/amelia-hug.png',
    category: 'merch',
    requiresShipping: true,
  },
  {
    id: 'amelia-dating-sim',
    name: 'Amelia AI Dating Sim',
    description: 'Interactieve visual novel met Amelia. Beschikbaar voor Windows en macOS.',
    price: 3,
    priceDisplay: '€3,00',
    image: '/mascottes/amelia-v2.png',
    category: 'game',
    requiresShipping: false,
  },
  {
    id: 'dac-trading-coin',
    name: 'DAC Trading Coin',
    description: 'Gelimiteerde verzamelmunt ter ere van DAIC. Prijs geinspireerd op pi.',
    price: 31.14159,
    priceDisplay: '€31,14159',
    image: '/mascottes/amelia-beer-alt.png',
    category: 'merch',
    requiresShipping: true,
  },
])
</script>

<style scoped>
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
