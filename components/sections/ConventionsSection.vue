<template>
  <section id="conventions" class="relative py-14 md:py-20 bg-gradient-to-b from-dark-900 to-dark-800 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl animate-pulse-soft" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-3">
          <span class="bg-gradient-to-r from-accent-gold to-primary-300 bg-clip-text text-transparent inline-block animate-gradient-shift" style="background-size: 200% 200%">
            Converenties 2026
          </span>
        </h2>
        <p class="text-base text-dark-300 max-w-2xl mx-auto">
          Ontmoet de DAIC-community en ervaar de toekomst van anime: Amelia AI en ons baanbrekend dating sim game.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article
          v-for="(event, index) in conventions"
          :key="event.slug"
          class="rounded-xl border border-primary-700/30 bg-dark-800/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary-500/60 hover:shadow-xl hover:shadow-primary-600/20 hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer"
        >
          <div class="h-32 md:h-36 bg-dark-900 overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <img
              :src="event.banner"
              :alt="`Banner van ${event.name}`"
              class="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            >
          </div>
          <div class="p-5 space-y-2">
            <h3 class="text-xl font-semibold text-dark-100 group-hover:text-primary-300 transition-colors duration-300">{{ event.name }}</h3>
            <p class="text-sm text-dark-400 group-hover:text-dark-300 transition-colors duration-300">{{ event.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const conventions = [
  {
    slug: 'animecon-2026',
    name: 'AnimeCon 2026',
    banner: './conventions/animecon-2026/banner.png',
    description: 'Live Amelia AI showcase en demo van ons nieuwe dating sim game. Ontmoet de makers en ervaar de revolutie.',
  },
  {
    slug: 'dcc-2026',
    name: 'Dutch Comic Con 2026',
    banner: './conventions/dcc-2026/banner.svg',
    description: 'Game launch event: speelbare demo van Amelia AI Dating Sim. Eerste preview exclusief voor DCC-bezoekers.',
  },
  {
    slug: 'hmia-2026',
    name: 'HMIA 2026',
    banner: './conventions/hmia-2026/banner.png',
    description: 'Community celebration: ontmoet DAIC-leden, speel het spel en ontdek hoe Amelia AI anime-fans verandert.',
  },
]
</script>