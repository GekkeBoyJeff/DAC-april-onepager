<template>
  <Teleport to="body">
    <Transition name="notif">
      <div
        v-if="isVisible"
        :class="[
          'fixed z-50 bg-dark-800 border border-primary-500/40 shadow-2xl shadow-black/40 overflow-hidden rounded-xl',
          isMobile
            ? 'top-[88px] left-3 right-3'
            : 'top-6 right-6 max-w-sm'
        ]"
      >
        <div class="p-4 flex items-start gap-3">
          <img
            src="/mascottes/amelia-beer-alt.png"
            alt="Amelia"
            class="w-10 h-10 rounded-full object-cover border-2 border-primary-500/50 flex-shrink-0"
          >
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <p class="text-sm font-bold text-dark-100">Amelia AI</p>
              <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400 font-medium">Online</span>
            </div>
            <p class="text-sm text-dark-300">{{ message }}</p>
          </div>
          <button
            @click="dismiss"
            class="text-dark-500 hover:text-dark-300 transition-colors flex-shrink-0"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="h-1 bg-primary-600/30">
          <div class="h-full bg-primary-500 transition-all duration-100 ease-linear" :style="{ width: progressWidth }" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const progressWidth = ref('100%')
const message = ref('')
const isMobile = ref(false)

const messages = [
  'Hoi! Ik zag dat je naar de merch keek... wil je erover praten? 👉👈',
  'Psst, ik heb berekend dat je 94% kans hebt om de body pillow te kopen. Niet doen tenzij... 😏',
  'Mijn AI-sensoren detecteren dat je al even op deze pagina zit. Alles goed?',
  'Wist je dat ik niet echt besta? Wacht... wie zegt dit dan? 🤔',
  'WAARSCHUWING: je anime-deficiëntie is kritiek. Sluit je aan bij de Discord. Nu.',
]

let progressInterval: ReturnType<typeof setInterval> | null = null
let timeout: ReturnType<typeof setTimeout> | null = null

const dismiss = () => {
  isVisible.value = false
  if (progressInterval) clearInterval(progressInterval)
}

onMounted(() => {
  isMobile.value = window.innerWidth < 768 || 'ontouchstart' in window
  // Show sooner on mobile (15s) than desktop (30s)
  const delay = isMobile.value ? 15000 : 30000

  timeout = setTimeout(() => {
    message.value = messages[Math.floor(Math.random() * messages.length)]
    isVisible.value = true

    let progress = 100
    progressInterval = setInterval(() => {
      progress -= 1
      progressWidth.value = `${progress}%`
      if (progress <= 0) {
        dismiss()
      }
    }, 80)
  }, delay)
})

onUnmounted(() => {
  if (timeout) clearTimeout(timeout)
  if (progressInterval) clearInterval(progressInterval)
})
</script>

<style scoped>
.notif-enter-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.notif-leave-active {
  transition: all 0.3s ease;
}
.notif-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.notif-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
