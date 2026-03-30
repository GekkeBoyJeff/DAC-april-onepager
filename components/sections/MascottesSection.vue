<template>
  <section id="mascottes" class="relative py-20 md:py-28 bg-dark-900 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-10 left-1/4 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl" />
      <div class="absolute -bottom-10 right-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-4">
          <span class="bg-gradient-to-r from-primary-300 via-accent-blue to-accent-gold bg-clip-text text-transparent">
            Mascottes van de Community
          </span>
        </h2>
        <p class="text-lg text-dark-300 max-w-2xl mx-auto">
          Amelia in verschillende stijlen, direct vanuit onze community-collectie.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="item in mascottes"
          :key="item.src"
          class="group rounded-2xl border border-primary-700/30 bg-dark-800/60 backdrop-blur-sm p-4"
        >
          <div class="aspect-[4/5] rounded-xl bg-dark-900/70 border border-dark-700 overflow-hidden">
            <img
              :src="item.src"
              :alt="item.alt"
              class="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            >
          </div>
          <p class="mt-3 text-sm text-dark-300">{{ item.label }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const mascottes = [
  {
    src: './mascottes/amelia.png',
    alt: 'Amelia standaard pose',
    label: 'Amelia - Standaard',
  },
  {
    src: './mascottes/amelia-v2.png',
    alt: 'Amelia versie 2',
    label: 'Amelia - Variant 2',
  },
  {
    src: './mascottes/amelia-hug.png',
    alt: 'Amelia hug pose',
    label: 'Amelia - Hug pose',
  },
  {
    src: './mascottes/amelia-beer.png',
    alt: 'Amelia beer pose',
    label: 'Amelia - Beer pose',
  },
  {
    src: './mascottes/amelia-beer-alt.png',
    alt: 'Amelia alternate beer pose',
    label: 'Amelia - Beer alternate',
  },
]
</script>