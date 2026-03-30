<template>
  <header class="sticky top-0 z-40 w-full backdrop-blur-md bg-dark-900/80 border-b border-primary-700/30">
    <div class="container mx-auto px-4 h-20 sm:h-22">
      <div class="h-full flex items-center justify-between gap-8">
        <a href="/" class="flex items-center gap-2 sm:gap-3 group min-w-0 hover:opacity-80 transition-opacity duration-300">
          <Logo class="w-10 h-10 sm:w-12 sm:h-12 group-hover:animate-pulse-glow transition-all duration-300" />
          <span class="font-display font-bold text-xl sm:text-2xl bg-gradient-to-r from-primary-400 to-accent-blue bg-clip-text text-transparent leading-none truncate group-hover:from-primary-300 group-hover:to-accent-gold transition-all duration-300">
            DAIC
          </span>
          <span class="hidden xl:inline-flex px-1.5 py-0.5 text-[8px] font-semibold tracking-wider rounded-full bg-primary-600/20 text-primary-300 border border-primary-500/30 whitespace-nowrap group-hover:border-primary-400/60 group-hover:bg-primary-600/40 transition-all duration-300">
            AI FIRST
          </span>
        </a>
        <nav class="hidden md:flex items-center gap-8 flex-1 justify-center">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            :class="[
              'text-sm font-medium transition-all duration-300 relative group',
              activeSection === item.id
                ? 'text-primary-300'
                : 'text-dark-300 hover:text-dark-100'
            ]"
          >
            {{ item.label }}
            <span
              class="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-blue rounded-full transition-all duration-300"
              :class="activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'"
            />
          </a>
        </nav>
        <div class="flex items-center gap-3">
          <a
            href="https://discord.gg/dutchanimecommunity"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600/20 text-primary-300 hover:bg-primary-600/40 border border-primary-600/40 hover:border-primary-500/60 transition-all duration-300 text-sm font-medium group"
          >
            <svg class="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.492c-1.53-.742-3.17-1.286-4.885-1.577a.075.075 0 0 0-.079.037c-.211.375-.445.865-.608 1.25a18.566 18.566 0 0 0-5.487 0c-.163-.385-.397-.875-.609-1.25a.077.077 0 0 0-.079-.037A19.738 19.738 0 0 0 3.677 4.492a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.77 1.364 1.225 1.994a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.057c.5-4.718-.838-8.812-3.549-12.54a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.966-2.157 2.157-2.157 1.192 0 2.157.964 2.157 2.157 0 1.19-.965 2.157-2.157 2.157zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.966-2.157 2.157-2.157 1.192 0 2.157.964 2.157 2.157 0 1.19-.965 2.157-2.157 2.157z" />
            </svg>
            Naar Discord
          </a>
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
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-t border-primary-700/30 bg-dark-900/95 backdrop-blur-md animate-slide-down"
    >
      <nav class="container mx-auto px-4 py-4 flex flex-col gap-2">
        <a
          v-for="(item, index) in navItems"
          :key="item.href"
          :href="item.href"
          :class="[
            'px-4 py-2.5 rounded-lg transition-all duration-300 relative group animate-slide-up text-sm font-medium',
            activeSection === item.id
              ? 'bg-primary-600/20 text-primary-300'
              : 'text-dark-200 hover:bg-dark-800 hover:text-primary-300'
          ]"
          @click="isMobileMenuOpen = false"
          :style="{ 'animation-delay': `${index * 0.05}s` }"
        >
          {{ item.label }}
        </a>
        <a
          href="https://discord.gg/dutchanimecommunity"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2.5 rounded-lg bg-primary-600/20 border border-primary-600/40 text-primary-300 hover:bg-primary-600/40 transition-all duration-300 text-sm font-medium flex items-center gap-2 animate-slide-up"
          :style="{ 'animation-delay': '0.2s' }"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.317 4.492c-1.53-.742-3.17-1.286-4.885-1.577a.075.075 0 0 0-.079.037c-.211.375-.445.865-.608 1.25a18.566 18.566 0 0 0-5.487 0c-.163-.385-.397-.875-.609-1.25a.077.077 0 0 0-.079-.037A19.738 19.738 0 0 0 3.677 4.492a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.77 1.364 1.225 1.994a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.057c.5-4.718-.838-8.812-3.549-12.54a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.966-2.157 2.157-2.157 1.192 0 2.157.964 2.157 2.157 0 1.19-.965 2.157-2.157 2.157zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.966-2.157 2.157-2.157 1.192 0 2.157.964 2.157 2.157 0 1.19-.965 2.157-2.157 2.157z" />
          </svg>
          Naar Discord
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollSpy } from '~/composables/useScrollSpy'
import Logo from './Logo.vue'
import CartIcon from '../shop/CartIcon.vue'

const isMobileMenuOpen = ref(false)
const { activeSection } = useScrollSpy()

const navItems = [
  { id: 'about', href: '#about', label: 'Over ons' },
  { id: 'game', href: '#game', label: 'Game' },
  { id: 'merch', href: '#merch', label: 'Winkel' },
  { id: 'features', href: '#features', label: 'Functies' },
  { id: 'testimonials', href: '#testimonials', label: 'Reacties' },
  { id: 'conventions', href: '#conventions', label: 'Converenties' },
]
</script>

<style scoped>
header {
  @apply shadow-lg shadow-black/20;
}
</style>
