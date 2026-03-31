<template>
  <section id="game" class="relative py-20 md:py-32 bg-gradient-to-b from-dark-800 to-dark-900 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl mx-auto">
        <div class="space-y-8">
          <div>
            <span class="text-sm font-semibold text-accent-blue uppercase tracking-wider">Speciale release</span>
            <h2 class="text-4xl md:text-5xl font-display font-bold mt-2 mb-4">
              <span class="bg-gradient-to-r from-accent-gold to-primary-300 bg-clip-text text-transparent">
                Amelia AI Dating Sim
              </span>
            </h2>
            <p class="text-lg text-dark-300">
              Beleef een interactieve visual novel met Amelia, aangedreven door onze AI-algoritmes voor dynamische gesprekken en persoonlijke verhaallijnen.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex gap-3 items-start">
              <div class="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent-gold/20 flex items-center justify-center">
                <svg class="w-3 h-3 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark-100">AI-gestuurde verhaallijnen</h4>
                <p class="text-sm text-dark-400">Dynamische verhalen die zich aanpassen aan jouw keuzes</p>
              </div>
            </div>
            <div class="flex gap-3 items-start">
              <div class="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent-gold/20 flex items-center justify-center">
                <svg class="w-3 h-3 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark-100">Ondersteuning voor meerdere platforms</h4>
                <p class="text-sm text-dark-400">Beschikbaar voor Windows en macOS</p>
              </div>
            </div>
            <div class="flex gap-3 items-start">
              <div class="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent-gold/20 flex items-center justify-center">
                <svg class="w-3 h-3 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark-100">Exclusieve content</h4>
                <p class="text-sm text-dark-400">Exclusieve verhaallijnen voor de DAIC-community</p>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <p class="text-sm text-dark-400">💾 Download voor Windows of macOS</p>
            <div class="flex gap-3 flex-wrap">
              <a
                href="https://discord.com/channels/581163192965791745/581163961970458625"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold transition-all duration-250 hover:shadow-lg hover:shadow-primary-900/50 transform hover:scale-105"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                </svg>
                Download voor Windows
              </a>
              <a
                href="https://discord.com/channels/581163192965791745/581163961970458625"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-dark-700 hover:bg-dark-600 text-dark-100 font-semibold transition-all duration-250 border border-dark-600 hover:border-primary-600/50"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download voor macOS
              </a>
            </div>
          </div>
          <div class="pt-4 border-t border-dark-700">
            <p class="text-sm text-dark-400 mb-2">Prijs</p>
            <p class="text-3xl font-bold text-primary-300">€3,00</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Game section component
</script>
