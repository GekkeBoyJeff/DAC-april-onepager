<template>
  <section id="merch" class="relative py-20 md:py-32 bg-dark-800">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-pulse-soft" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12 animate-scale-in">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-4 animate-slide-up">
          <span class="bg-gradient-to-r from-accent-gold to-primary-300 bg-clip-text text-transparent inline-block animate-gradient-shift" style="background-size: 200% 200%">
            Officiele DAIC shop
          </span>
        </h2>
        <p class="text-lg text-dark-300 mb-6 animate-slide-up" style="animation-delay: 0.1s">
          Welkom in onze nieuwe website en webshop! Steun de community met exclusieve Amelia-merchandise.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
        <div
          v-for="(product, index) in products"
          :key="product.id"
          class="animate-slide-up"
          :style="{ 'animation-delay': `${0.2 + index * 0.08}s` }"
        >
          <MerchCard :product="product" />
        </div>
      </div>
      <div class="mt-12 p-6 rounded-lg bg-dark-700/50 border border-dark-600 backdrop-blur-sm hover:border-primary-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/20 hover:bg-dark-700/70 animate-fade-in">
        <p class="text-dark-300 text-center hover:text-dark-200 transition-colors duration-300">
          <span class="text-accent-blue font-semibold animate-bounce-slow">💳 Afrekenen:</span>
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
    image: './mascottes/amelia.png',
    category: 'merch',
    requiresShipping: true,
  },
  {
    id: 'amelia-body-pillow',
    name: 'Amelia Body Pillow Set',
    description: 'Comfortabele body pillow inclusief kussen en kussensloop.',
    price: 80,
    priceDisplay: '€80',
    image: './mascottes/amelia-hug.png',
    category: 'merch',
    requiresShipping: true,
  },
  {
    id: 'amelia-dating-sim',
    name: 'Amelia AI Dating Sim',
    description: 'Interactieve visual novel met Amelia. Beschikbaar voor Windows en macOS.',
    price: 3,
    priceDisplay: '€3,00',
    image: './mascottes/amelia-v2.png',
    category: 'game',
    requiresShipping: false,
  },
  {
    id: 'dac-trading-coin',
    name: 'DAC Trading Coin',
    description: 'Gelimiteerde verzamelmunt ter ere van DAIC. Prijs geinspireerd op pi.',
    price: 31.14159,
    priceDisplay: '€31,14159',
    image: './mascottes/amelia-beer-alt.png',
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
