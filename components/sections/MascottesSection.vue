<template>
  <section id="mascottes" class="relative py-20 md:py-28 bg-dark-900 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-10 left-1/4 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl animate-pulse-soft" />
      <div class="absolute -bottom-10 right-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl animate-pulse-soft" style="animation-delay: 1s" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12 animate-scale-in">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-4 animate-slide-up">
          <span class="bg-gradient-to-r from-primary-300 via-accent-blue to-accent-gold bg-clip-text text-transparent inline-block animate-gradient-shift" style="background-size: 200% 200%">
            Mascottes van de Community
          </span>
        </h2>
        <p class="text-lg text-dark-300 max-w-2xl mx-auto animate-slide-up" style="animation-delay: 0.1s">
          Amelia in verschillende stijlen, direct vanuit onze community-collectie.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(item, index) in mascottes"
          :key="item.src"
          class="group rounded-xl border border-primary-700/30 bg-dark-800/60 backdrop-blur-sm p-4 transition-all duration-300 hover:border-primary-500/60 hover:shadow-xl hover:shadow-primary-600/20 hover:-translate-y-3 cursor-pointer animate-fade-in"
          :style="{ 'animation-delay': `${0.2 + index * 0.08}s` }"
        >
          <figure>
            <div class="aspect-[4/5] rounded-lg bg-dark-900/70 border border-dark-700 overflow-hidden group-hover:border-primary-500/40 transition-all duration-300 relative">
              <div class="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img
                :src="item.src"
                :alt="item.alt"
                class="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-2"
                loading="lazy"
              >
            </div>
            <figcaption class="mt-3 text-sm text-dark-300 group-hover:text-primary-300 transition-colors duration-300">{{ item.label }}</figcaption>
          </figure>
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