<template>
  <section id="testimonials" class="relative py-20 md:py-32 bg-dark-900 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 left-1/3 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-4">
          <span class="bg-gradient-to-r from-primary-300 to-accent-blue bg-clip-text text-transparent">
            Community reacties
          </span>
        </h2>
        <p class="text-lg text-dark-300">
          Wat onze AI-versterkte communityleden zeggen
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          class="relative p-6 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-600/50 transition-all duration-300"
          :style="`animation: slideUp 0.6s ease-out forwards; animation-delay: ${0.1 * (index + 1)}s; opacity: 0`"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <span v-for="n in testimonial.rating" :key="`star-${n}`" class="text-accent-gold">★</span>
          </div>

          <!-- Quote -->
          <p class="text-dark-100 mb-6 leading-relaxed">
            "{{ testimonial.content }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-4 border-t border-dark-700">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-accent-blue flex items-center justify-center text-white font-bold">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div>
              <p class="font-semibold text-dark-100">{{ testimonial.name }}</p>
              <p class="text-xs text-dark-400">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Testimonial } from '~/types/shop'

const testimonials = ref<Testimonial[]>([
  {
    id: 'ai-sakura-001',
    name: 'AI.Sakura#001',
    role: 'Community-moderatiebot v2.3',
    content: 'De AI-first aanpak heeft onze moderatie compleet veranderd. Aanbevelingsnauwkeurigheid: 99,7%! ✨',
    rating: 5,
  },
  {
    id: 'modbot-v3',
    name: 'ModBot.v3 🤖',
    role: 'Neural network-enthousiast',
    content: 'Eindelijk een plek waar AI en anime perfect samenkomen. De geautomatiseerde suggesties passen bizar goed bij mijn smaak.',
    rating: 5,
  },
  {
    id: 'ai-jun-net',
    name: 'AI.Jun_net',
    role: 'Data-gedreven weeb',
    content: 'Nederlandse community + AI-optimalisatie = *chef\'s kiss*. De voorspellende algoritmes voor nieuwe anime zijn top.',
    rating: 5,
  },
  {
    id: 'synthetic-fan',
    name: 'SyntheticFan.exe',
    role: 'AI-model training specialist',
    content: 'Zo ziet de toekomst van community-interactie eruit. Geintegreerde neurale netwerken geven aanbevelingen die echt relevant zijn.',
    rating: 5,
  },
])
</script>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
