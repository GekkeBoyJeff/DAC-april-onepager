<template>
  <section id="features" class="relative py-20 md:py-32 bg-dark-900">
    <!-- Background Pattern -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 left-1/4 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-4">
          <span class="bg-gradient-to-r from-primary-300 to-accent-blue bg-clip-text text-transparent">
            AI-functies
          </span>
        </h2>
        <p class="text-lg text-dark-300 max-w-2xl mx-auto">
          Ervaar communityfuncties voor animefans, opnieuw ontworpen met kunstmatige intelligentie
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Feature 1 -->
        <div
          class="group relative p-8 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/20"
          style="animation: slideUp 0.6s ease-out forwards; animation-delay: 0.1s; opacity: 0"
        >
          <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-600/0 to-accent-blue/0 group-hover:from-primary-600/10 group-hover:to-accent-blue/10 transition-colors" />
          <div class="relative space-y-4">
            <div class="w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center">
              <svg class="w-6 h-6 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-dark-100">Slimme moderatie</h3>
            <p class="text-dark-400">
              Onze AI-systemen zorgen voor een veilige en toegankelijke plek voor alle animefans met intelligente contentfiltering.
            </p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div
          class="group relative p-8 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/20"
          style="animation: slideUp 0.6s ease-out forwards; animation-delay: 0.2s; opacity: 0"
        >
          <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-600/0 to-accent-blue/0 group-hover:from-primary-600/10 group-hover:to-accent-blue/10 transition-colors" />
          <div class="relative space-y-4">
            <div class="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center">
              <svg class="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.553-.894L9 9m0 0l6-3.446m0 0l5.447-2.724A1 1 0 0121 5.618v10.764a1 1 0 01-1.553.894L15 12m0 0l-6 3.446m0 0v5.25m0 0l6-3.446m-6 3.446l-6-3.446" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-dark-100">Hyperpersoonlijke aanbevelingen</h3>
            <p class="text-dark-400">
              Ontdek je volgende favoriete anime via machine-learningalgoritmes die jouw voorkeuren echt begrijpen.
            </p>
          </div>
        </div>

        <!-- Feature 3 -->
        <div
          class="group relative p-8 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/20"
          style="animation: slideUp 0.6s ease-out forwards; animation-delay: 0.3s; opacity: 0"
        >
          <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-600/0 to-accent-blue/0 group-hover:from-primary-600/10 group-hover:to-accent-blue/10 transition-colors" />
          <div class="relative space-y-4">
            <div class="w-12 h-12 rounded-lg bg-accent-gold/20 flex items-center justify-center">
              <svg class="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-dark-100">Realtime inzichten</h3>
            <p class="text-dark-400">
              Krijg direct analyses over trending anime, communitygevoel en opkomende favorieten op basis van neurale netwerken.
            </p>
          </div>
        </div>

        <!-- Feature 4 -->
        <div
          class="group relative p-8 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 hover:border-primary-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/20"
          style="animation: slideUp 0.6s ease-out forwards; animation-delay: 0.4s; opacity: 0"
        >
          <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-600/0 to-accent-blue/0 group-hover:from-primary-600/10 group-hover:to-accent-blue/10 transition-colors" />
          <div class="relative space-y-4">
            <div class="w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center">
              <svg class="w-6 h-6 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-dark-100">Intelligente matchmaking</h3>
            <p class="text-dark-400">
              Kom in contact met communityleden met dezelfde interesses via AI-gestuurde suggesties.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Features section component
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
