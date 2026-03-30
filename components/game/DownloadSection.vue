<template>
  <section id="game" class="relative py-20 md:py-32 bg-gradient-to-b from-dark-800 to-dark-900 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl mx-auto">
        <!-- Game Info -->
        <div class="space-y-8 animate-fade-in">
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

          <!-- Download Section -->
          <div class="space-y-3">
            <p class="text-sm text-dark-400">💾 Download voor Windows of macOS</p>
            <div class="flex gap-3 flex-wrap">
              <a
                href="https://drive.google.com/uc?export=download&id=WINDOWS_ID"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold transition-all duration-250 hover:shadow-lg hover:shadow-primary-900/50 transform hover:scale-105"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                </svg>
                Download voor Windows
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=MAC_ID"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-dark-700 hover:bg-dark-600 text-dark-100 font-semibold transition-all duration-250 border border-dark-600 hover:border-primary-600/50"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.05 13.5c-.23.645-.56 1.26-.99 1.83.645.86 1.02 1.32 1.37 1.87.46.695.85 1.4 1 2.11M6.16 13.5c-.23.645-.56 1.26-.99 1.83-.645.86-1.02 1.32-1.37 1.87-.46.695-.85 1.4-1 2.11M15 10c.55-.55 1-1.35 1-2.25 0-1.93-1.57-3.5-3.5-3.5-1.93 0-3.5 1.57-3.5 3.5 0 .9.45 1.7 1 2.25M9 10c.55-.55 1-1.35 1-2.25 0-1.93-1.57-3.5-3.5-3.5C2.57 4.25 1 5.82 1 7.75c0 .9.45 1.7 1 2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                </svg>
                Download voor macOS
              </a>
            </div>
          </div>

          <!-- Price -->
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
