<template>
  <section id="conventions" class="relative py-14 md:py-20 bg-gradient-to-b from-dark-900 to-dark-800 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-3">
          <span class="bg-gradient-to-r from-accent-gold to-primary-300 bg-clip-text text-transparent">
            Conventions 2026
          </span>
        </h2>
        <p class="text-base text-dark-300 max-w-2xl mx-auto">
          Dit zijn de events waar DAIC dit jaar zichtbaar is met community-activiteiten.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article
          v-for="event in conventions"
          :key="event.slug"
          class="rounded-2xl border border-primary-700/30 bg-dark-800/60 backdrop-blur-sm overflow-hidden"
        >
          <div class="h-32 md:h-36 bg-dark-900">
            <img
              :src="event.banner"
              :alt="`Banner van ${event.name}`"
              class="w-full h-full object-contain p-3"
              loading="lazy"
            >
          </div>
          <div class="p-5 space-y-2">
            <h3 class="text-xl font-semibold text-dark-100">{{ event.name }}</h3>
            <p class="text-sm text-dark-400">{{ event.description }}</p>
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
    description: 'Meetups, cosplay en community-momenten met DAIC-leden.',
  },
  {
    slug: 'dcc-2026',
    name: 'Dutch Comic Con 2026',
    banner: './conventions/dcc-2026/banner.svg',
    description: 'Panels, standbezoeken en anime-talks vanuit de community.',
  },
  {
    slug: 'hmia-2026',
    name: 'HMIA 2026',
    banner: './conventions/hmia-2026/banner.png',
    description: 'Gezamenlijke community-uitjes en eventverslaggeving op locatie.',
  },
]
</script>