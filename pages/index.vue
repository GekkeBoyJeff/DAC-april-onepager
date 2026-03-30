<template>
  <div class="min-h-screen bg-dark-900">
    <div v-if="isAfterAprilFools" class="bg-gradient-to-r from-primary-600 to-accent-blue text-white text-center py-2.5 px-4 text-sm font-medium relative z-50">
      Dit was een 1 april grap van de Dutch Anime Community.
      <a href="https://discord.gg/dutchanimecommunity" target="_blank" rel="noopener noreferrer" class="underline font-bold hover:text-white/80 transition-colors ml-1">
        Join de echte community!
      </a>
    </div>
    <Header />
    <Cart />
    <AprilFoolsReveal />
    <FakeAILoader />
    <FakeNotification />
    <AmeliaFollower />
    <SocialProofTicker />
    <ScrollRevealHint />
    <main class="flex flex-col">
      <section class="relative min-h-[80vh] md:min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800 overflow-hidden pt-10 md:pt-16">
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
          <div class="absolute top-20 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl" />
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl" />
        </div>

        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 py-8 md:py-20">
            <div class="flex justify-center mb-4 md:mb-8 animate-fade-in">
              <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600/20 to-accent-blue/20 flex items-center justify-center border border-primary-600/30 backdrop-blur-sm">
                <Logo class="w-12 h-12" />
              </div>
            </div>
            <div class="space-y-4 animate-slide-up" style="animation-delay: 0.1s">
              <h1 class="text-5xl md:text-7xl font-display font-bold leading-tight">
                <span class="bg-gradient-to-r from-primary-300 via-accent-blue to-accent-gold bg-clip-text text-transparent glitch-text" data-text="AI FIRST Anime Server van Nederland">
                  AI FIRST Anime Server van Nederland
                </span>
              </h1>
              <p class="text-xl md:text-2xl text-dark-200">
                De Dutch Anime Community als AI FIRST server
              </p>
            </div>
            <p class="text-lg text-dark-400 max-w-2xl mx-auto leading-relaxed animate-fade-in" style="animation-delay: 0.2s">
              Welkom bij <span class="text-primary-300 font-semibold">DAIC</span>: de AI FIRST anime-community waar moderatie,
              aanbevelingen en interactie worden aangestuurd door slimme AI-tools.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-scale-in" style="animation-delay: 0.3s">
              <Button size="lg" href="#about" class="group">
                Meer informatie
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button size="lg" variant="outline" href="#merch">
                Naar de shop
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Button>
            </div>
            <div class="pt-12 animate-bounce" style="animation-delay: 0.5s">
              <svg class="w-6 h-6 mx-auto text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <AboutDAIC />
      <DownloadSection />
      <MerchSection />
      <AIFeatures />
      <TestimonialsSection />
      <FAQSection />
      <ConventionsSection />
      <section id="cta" class="relative py-20 md:py-32 bg-gradient-to-r from-primary-900/30 to-accent-blue/30 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl" />
        </div>
        <div class="container mx-auto px-4 relative z-10 text-center space-y-6">
          <h2 class="text-4xl md:text-5xl font-display font-bold">
            <span class="bg-gradient-to-r from-primary-300 to-accent-blue bg-clip-text text-transparent">
              Klaar om bij DAIC te komen?
            </span>
          </h2>
          <p class="text-lg text-dark-300 max-w-2xl mx-auto">
            Word onderdeel van onze AI FIRST anime-community en ontdek wat slimme tools kunnen doen.
          </p>
          <Button size="lg" class="inline-flex" href="https://discord.gg/dutchanimecommunity" :external="true">
            Word lid via Discord
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03a.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 00-.009-.128c.126-.094.252-.192.372-.291a.074.074 0 01.076-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.076.01c.12.099.246.197.372.291a.077.077 0 00-.009.128c-.598.35-1.22.664-1.872.892a.077.077 0 00-.041.107c.352.699.764 1.364 1.226 1.994a.076.076 0 00.084.028a19.86 19.86 0 006.002-3.03a.077.077 0 00.032-.054c.5-4.718-.838-8.812-3.543-12.46a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.929-2.419 2.157-2.419c1.234 0 2.174 1.085 2.157 2.419c0 1.334-.929 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.929-2.419 2.157-2.419c1.234 0 2.174 1.085 2.157 2.419c0 1.334-.923 2.419-2.157 2.419z" />
            </svg>
          </Button>
        </div>
      </section>

    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Header from '~/components/shared/Header.vue'
import Logo from '~/components/shared/Logo.vue'
import Footer from '~/components/shared/Footer.vue'
import Button from '~/components/shared/Button.vue'
import AboutDAIC from '~/components/community/AboutDAIC.vue'
import ConventionsSection from '~/components/sections/ConventionsSection.vue'
import AIFeatures from '~/components/community/AIFeatures.vue'
import DownloadSection from '~/components/game/DownloadSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import MerchSection from '~/components/sections/MerchSection.vue'
import FAQSection from '~/components/sections/FAQSection.vue'
import Cart from '~/components/shop/Cart.vue'
import AprilFoolsReveal from '~/components/shared/AprilFoolsReveal.vue'
import FakeAILoader from '~/components/shared/FakeAILoader.vue'
import FakeNotification from '~/components/shared/FakeNotification.vue'
import AmeliaFollower from '~/components/shared/AmeliaFollower.vue'
import SocialProofTicker from '~/components/shared/SocialProofTicker.vue'
import ScrollRevealHint from '~/components/shared/ScrollRevealHint.vue'

// Show banner after April 1st 2026
const isAfterAprilFools = computed(() => {
  const now = new Date()
  return now > new Date('2026-04-01T23:59:59')
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

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

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-in-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-out forwards;
  opacity: 0;
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
