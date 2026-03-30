<template>
  <Teleport to="body">
    <Transition name="loader">
      <div
        v-if="isVisible"
        class="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-6 md:right-auto z-40 md:max-w-xs bg-dark-800 border border-primary-600/40 rounded-lg p-4 shadow-2xl shadow-primary-900/30"
      >
        <div v-if="isLoading" class="flex items-center gap-3">
          <div class="w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
          <p class="text-dark-200 text-sm">{{ loadingText }}</p>
        </div>
        <div v-else class="space-y-2">
          <p class="text-primary-300 text-sm font-semibold">AI Resultaat:</p>
          <p class="text-dark-200 text-sm">{{ result }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const isLoading = ref(true)
const loadingText = ref('')
const result = ref('')

const loadingTexts = [
  'AI analyseert je anime-smaak...',
  'Neuraal netwerk initialiseert...',
  'AI berekent je waifu-compatibiliteit...',
  'Machine learning model laden...',
  'AI scant je watchlist...',
]

const results = [
  'Je perfecte match is: een dakpan met googly eyes.',
  'Aanbeveling: Kijk meer anime. Veel meer. Slaap is optioneel.',
  'Waifu-compatibiliteit: 404%. Error: te veel smaak.',
  'Analyse compleet. Conclusie: je hebt hulp nodig.',
  'AI adviseert: koop de body pillow. De AI liegt nooit.',
  'Berekening klaar: je bent 97.3% weeb. De andere 2.7% is slaapgebrek.',
  'Resultaat: je anime-smaak is... uniek. Heel uniek.',
]

onMounted(() => {
  // Show after random delay between 45-90 seconds
  const delay = 45000 + Math.random() * 45000
  setTimeout(() => {
    loadingText.value = loadingTexts[Math.floor(Math.random() * loadingTexts.length)]
    isVisible.value = true
    isLoading.value = true

    // Show result after 3 seconds
    setTimeout(() => {
      result.value = results[Math.floor(Math.random() * results.length)]
      isLoading.value = false

      // Hide after 6 seconds
      setTimeout(() => {
        isVisible.value = false
      }, 6000)
    }, 3000)
  }, delay)
})
</script>

<style scoped>
.loader-enter-active {
  transition: all 0.4s ease;
}
.loader-leave-active {
  transition: all 0.3s ease;
}
.loader-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.loader-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
