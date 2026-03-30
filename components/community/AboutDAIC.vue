<template>
  <section id="about" class="relative py-20 md:py-32 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800/50 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl" />
      <div class="absolute -bottom-20 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="animate-slide-up" style="animation-delay: 0.1s">
            <h2 class="text-5xl md:text-6xl font-display font-bold mb-4">
              <span class="bg-gradient-to-r from-primary-300 via-accent-blue to-accent-gold bg-clip-text text-transparent inline-block animate-gradient-shift" style="background-size: 200% 200%">
                Welkom bij DAIC
              </span>
            </h2>
            <div class="h-1 w-20 bg-gradient-to-r from-primary-500 to-accent-blue rounded-full animate-slide-left" style="animation-delay: 0.2s" />
          </div>

          <p class="text-xl text-dark-300 leading-relaxed animate-slide-up" style="animation-delay: 0.3s">
            De Dutch Anime Community wordt een revolutionaire transformatie:
            <span class="text-primary-300 font-semibold">Dutch AI Anime Community (DAIC)</span>
          </p>

          <div class="space-y-4 pt-4">
            <div class="flex gap-3 animate-slide-up" style="animation-delay: 0.4s">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center animate-pulse-glow">
                <svg class="w-4 h-4 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-dark-200">AI-gedreven communitybeheer en moderatie</span>
            </div>
            <div class="flex gap-3 animate-slide-up" style="animation-delay: 0.5s">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center animate-pulse-glow">
                <svg class="w-4 h-4 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-dark-200">Slimme anime-aanbevelingen op basis van jouw smaak</span>
            </div>
            <div class="flex gap-3 animate-slide-up" style="animation-delay: 0.6s">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center animate-pulse-glow">
                <svg class="w-4 h-4 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-dark-200">Next-gen anime-analyses en inzichten</span>
            </div>
          </div>

          <Button size="lg" href="https://discord.gg/dutchanimecommunity" :external="true" class="mt-8 animate-slide-up hover:animate-pulse-glow transition-all duration-300" style="animation-delay: 0.7s">
            Word lid van de community
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
        <div class="relative animate-float" style="animation-delay: 0.2s">
          <div class="absolute -inset-4 bg-gradient-to-r from-primary-600/10 to-accent-blue/10 rounded-xl blur-xl animate-glow" />
          <div class="relative bg-dark-800/50 border border-primary-600/30 rounded-xl p-8 backdrop-blur-sm hover:border-primary-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/20">
            <div class="space-y-4 animate-scale-in" style="animation-delay: 0.4s">
              <div class="text-accent-gold font-semibold text-sm animate-bounce-slow">✨ AI-first aanpak</div>
              <h3 class="text-2xl font-bold text-dark-100">De toekomst van anime communities</h3>
              <p class="text-dark-300">
                DAIC is gebouwd als AI FIRST anime-server: van moderatie en aanbevelingen tot community-interactie. Alles draait om slimme automatisering die de ervaring beter maakt.
              </p>
              <div class="pt-4 flex items-center gap-2 text-primary-300 hover:text-primary-200 transition-colors">
                <svg class="w-5 h-5 animate-spin-slower" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                De toekomst van anime communities
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '../shared/Button.vue'
</script>
