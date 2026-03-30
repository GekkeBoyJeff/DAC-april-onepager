<template>
  <section id="faq" class="relative py-20 md:py-32 bg-dark-900 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animate-pulse-soft" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16 animate-scale-in">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-4 animate-slide-up">
          <span class="bg-gradient-to-r from-primary-300 to-accent-blue bg-clip-text text-transparent inline-block animate-gradient-shift" style="background-size: 200% 200%">
            FAQ
          </span>
        </h2>
        <p class="text-lg text-dark-300 animate-slide-up" style="animation-delay: 0.1s">
          Veelgestelde vragen over DAIC
        </p>
      </div>
      <div class="max-w-3xl mx-auto space-y-4">
        <details
          v-for="(item, index) in faqs"
          :key="index"
          class="group rounded-lg bg-dark-800 border border-dark-700 hover:border-primary-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/20 hover:bg-dark-800/80 animate-slide-up"
          :style="{ 'animation-delay': `${0.2 + index * 0.08}s` }"
        >
          <summary class="flex items-center justify-between p-6 font-semibold text-dark-100 list-none cursor-pointer group-hover:text-primary-300 transition-colors duration-300">
            <span>{{ item.question }}</span>
            <svg
              class="w-5 h-5 flex-shrink-0 text-primary-400 transition-all duration-500 group-open:rotate-180 group-open:text-accent-gold group-open:scale-125"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </summary>
          <p class="px-6 pb-6 text-dark-400 leading-relaxed animate-slide-up group-open:text-dark-300 transition-colors duration-300" style="animation-delay: 0.1s">{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Wat is DAIC?',
    answer: 'DAIC (Dutch AI Anime Community) is een AI FIRST anime-server waarin communitybeheer, aanbevelingen en interactie worden ondersteund door slimme AI-systemen.',
  },
  {
    question: 'Hoe kan ik de community joinen?',
    answer: 'Je kunt via Discord lid worden van de DAIC-community. Links en informatie vind je in de navigatie en footer.',
  },
  {
    question: 'Hoe download ik de Amelia AI Dating Sim?',
    answer: 'Klik in de game-sectie op de downloadknop voor jouw besturingssysteem. De game is beschikbaar voor Windows en macOS via Google Drive.',
  },
  {
    question: 'Wat gebeurt er als ik op afrekenen klik?',
    answer: 'Afrekenen stuurt je door naar een speciale verrassing. De shopflow is bedoeld als humoristische gimmick voor de community.',
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

details summary::-webkit-details-marker {
  display: none;
}
</style>
