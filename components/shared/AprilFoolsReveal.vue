<template>
  <Teleport to="body">
    <Transition name="reveal">
      <div
        v-if="isVisible"
        class="fixed inset-0 z-50 flex items-center justify-center bg-dark-900/90 backdrop-blur-sm"
        @click.self="close"
      >
        <div class="confetti-container" aria-hidden="true">
          <div v-for="i in 50" :key="i" class="confetti-piece" :style="confettiStyle(i)" />
        </div>

        <div class="relative z-10 max-w-md w-full mx-4 bg-dark-800 border border-primary-500/40 rounded-2xl p-8 text-center space-y-6 shadow-2xl shadow-primary-600/20">
          <div class="text-6xl">🎉</div>

          <h2 class="text-3xl font-display font-bold bg-gradient-to-r from-primary-300 via-accent-blue to-accent-gold bg-clip-text text-transparent">
            1 April!
          </h2>

          <p class="text-dark-200 text-lg leading-relaxed">
            Je bent erin getrapt! Niks op deze site is echt — geen AI anime server, geen Amelia figure, geen body pillow.
          </p>

          <p class="text-dark-300 text-sm font-medium italic">
            De game is wél echt! (Of toch niet?) Check het snel!
          </p>

          <p class="text-dark-400 text-sm">
            Maar onze community is <span class="text-primary-300 font-semibold">sowieso</span> echt.
          </p>

          <a
            href="https://discord.gg/dutchanimecommunity"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-primary-600/30"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.492c-1.53-.742-3.17-1.286-4.885-1.577a.075.075 0 0 0-.079.037c-.211.375-.445.865-.608 1.25a18.566 18.566 0 0 0-5.487 0c-.163-.385-.397-.875-.609-1.25a.077.077 0 0 0-.079-.037A19.738 19.738 0 0 0 3.677 4.492a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.77 1.364 1.225 1.994a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.057c.5-4.718-.838-8.812-3.549-12.54a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.966-2.157 2.157-2.157 1.192 0 2.157.964 2.157 2.157 0 1.19-.965 2.157-2.157 2.157zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.966-2.157 2.157-2.157 1.192 0 2.157.964 2.157 2.157 0 1.19-.965 2.157-2.157 2.157z" />
            </svg>
            Join de echte Dutch Anime Community
          </a>

          <button
            @click="close"
            class="block mx-auto text-dark-500 hover:text-dark-300 text-sm transition-colors"
          >
            Sluiten
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const colors = ['#7c3aed', '#06b6d4', '#fbbf24', '#ec4899', '#8b5cf6', '#ffffff']

const confettiStyle = (i: number) => {
  const left = Math.random() * 100
  const delay = Math.random() * 3
  const duration = 2 + Math.random() * 3
  const color = colors[i % colors.length]
  const size = 6 + Math.random() * 6
  const rotation = Math.random() * 360
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    backgroundColor: color,
    width: `${size}px`,
    height: `${size}px`,
    transform: `rotate(${rotation}deg)`,
  }
}

const show = () => {
  isVisible.value = true
}

const close = () => {
  isVisible.value = false
}

// Listen for rickroll event
const handleRickroll = () => {
  // Small delay so the rickroll tab opens first
  setTimeout(show, 500)
}

onMounted(() => {
  window.addEventListener('daic-rickrolled', handleRickroll)
})

onUnmounted(() => {
  window.removeEventListener('daic-rickrolled', handleRickroll)
})
</script>

<style scoped>
.reveal-enter-active {
  transition: opacity 0.4s ease;
}
.reveal-leave-active {
  transition: opacity 0.3s ease;
}
.reveal-enter-from,
.reveal-leave-to {
  opacity: 0;
}

.confetti-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.confetti-piece {
  position: absolute;
  top: -10px;
  border-radius: 2px;
  animation: confetti-fall linear infinite;
}

@keyframes confetti-fall {
  0% {
    transform: translateY(-10px) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}
</style>
