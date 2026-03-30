<template>
  <header class="sticky top-0 z-40 w-full backdrop-blur-md bg-dark-900/80 border-b border-primary-700/30">
    <div class="container mx-auto px-3 sm:px-4 h-16">
      <div class="grid h-full grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
        <!-- Logo -->
        <NuxtLink to="/" class="justify-self-start flex items-center gap-1.5 sm:gap-2 group min-w-0">
          <Logo class="w-5 h-5 sm:w-6 sm:h-6" />
          <span class="font-display font-bold text-sm sm:text-base bg-gradient-to-r from-primary-400 to-accent-blue bg-clip-text text-transparent leading-none truncate">
            DAIC
          </span>
          <span class="hidden xl:inline-flex px-1.5 py-0.5 text-[8px] font-semibold tracking-wider rounded-full bg-primary-600/20 text-primary-300 border border-primary-500/30 whitespace-nowrap">
            AI FIRST
          </span>
        </NuxtLink>

        <!-- Navigation -->
        <div class="hidden md:flex justify-self-center">
          <nav class="inline-flex items-center gap-4 lg:gap-6 px-4 py-2 rounded-full bg-dark-800/70 border border-primary-700/30">
            <a href="#about" class="text-sm text-dark-300 hover:text-primary-400 transition-colors">Over ons</a>
            <a href="#features" class="text-sm text-dark-300 hover:text-primary-400 transition-colors">Functies</a>
            <a href="#game" class="text-sm text-dark-300 hover:text-primary-400 transition-colors">Game</a>
            <a href="#merch" class="text-sm text-dark-300 hover:text-primary-400 transition-colors">Winkel</a>
          </nav>
        </div>

        <!-- Right Actions -->
        <div class="justify-self-end flex items-center gap-2">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-dark-800 hover:bg-dark-700 border border-dark-600 text-dark-100 transition-colors"
            aria-label="Menu openen"
            :aria-expanded="isMobileMenuOpen"
          >
            <svg v-if="!isMobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <CartIcon />
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-t border-primary-700/30 bg-dark-900/95 backdrop-blur-md"
    >
      <nav class="container mx-auto px-3 sm:px-4 py-3 flex flex-col gap-2">
        <a href="#about" class="px-3 py-2 rounded-lg text-dark-200 hover:bg-dark-800" @click="isMobileMenuOpen = false">Over ons</a>
        <a href="#features" class="px-3 py-2 rounded-lg text-dark-200 hover:bg-dark-800" @click="isMobileMenuOpen = false">Functies</a>
        <a href="#game" class="px-3 py-2 rounded-lg text-dark-200 hover:bg-dark-800" @click="isMobileMenuOpen = false">Game</a>
        <a href="#merch" class="px-3 py-2 rounded-lg text-dark-200 hover:bg-dark-800" @click="isMobileMenuOpen = false">Winkel</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Logo from './Logo.vue'
import CartIcon from '../shop/CartIcon.vue'

const isMobileMenuOpen = ref(false)
</script>

<style scoped>
header {
  @apply shadow-lg shadow-black/20;
}
</style>
