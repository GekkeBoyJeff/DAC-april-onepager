<template>
  <Teleport to="body">
    <Transition name="fake404">
      <div
        v-if="isVisible"
        class="fixed inset-0 z-50 flex items-center justify-center bg-dark-900/90 backdrop-blur-sm"
        @click.self="close"
      >
        <Transition name="fake404-card" appear>
          <div class="relative max-w-sm w-full mx-4 bg-dark-800 border border-primary-500/30 rounded-xl p-8 text-center space-y-5 shadow-2xl shadow-primary-900/20">
            <div class="glitch-emoji text-7xl">🤖</div>

            <h2 class="text-2xl font-display font-bold text-dark-100">
              <span class="line-through text-dark-500 text-lg mr-2">{{ clickedLabel }}</span>
              404
            </h2>

            <p class="text-dark-300 leading-relaxed">
              Deze pagina bestaat net zo min als onze AI.
            </p>

            <p class="text-dark-500 text-sm italic">
              Maar je weet wat wél bestaat?
            </p>

            <div class="flex flex-col gap-2 pt-2">
              <a
                href="https://discord.gg/dutchanimecommunity"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-all duration-300 text-sm"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.492c-1.53-.742-3.17-1.286-4.885-1.577a.075.075 0 0 0-.079.037c-.211.375-.445.865-.608 1.25a18.566 18.566 0 0 0-5.487 0c-.163-.385-.397-.875-.609-1.25a.077.077 0 0 0-.079-.037A19.738 19.738 0 0 0 3.677 4.492a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.77 1.364 1.225 1.994a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.057c.5-4.718-.838-8.812-3.549-12.54a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.966-2.157 2.157-2.157 1.192 0 2.157.964 2.157 2.157 0 1.19-.965 2.157-2.157 2.157zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.966-2.157 2.157-2.157 1.192 0 2.157.964 2.157 2.157 0 1.19-.965 2.157-2.157 2.157z" />
                </svg>
                Onze echte community
              </a>
              <button
                @click="close"
                class="text-dark-500 hover:text-dark-300 text-sm transition-colors py-1"
              >
                Sluiten
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const clickedLabel = ref('')

const close = () => {
  isVisible.value = false
}

const handleFakeLink = (e: Event) => {
  const detail = (e as CustomEvent).detail
  clickedLabel.value = detail?.label || 'Pagina'
  isVisible.value = true
}

onMounted(() => {
  window.addEventListener('daic-fake-link', handleFakeLink)
})

onUnmounted(() => {
  window.removeEventListener('daic-fake-link', handleFakeLink)
})
</script>

<style scoped>
/* Overlay backdrop */
.fake404-enter-active {
  transition: opacity 0.3s ease;
}
.fake404-leave-active {
  transition: opacity 0.2s ease;
}
.fake404-enter-from,
.fake404-leave-to {
  opacity: 0;
}

/* Card bounce in */
.fake404-card-enter-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.fake404-card-leave-active {
  transition: all 0.2s ease-in;
}
.fake404-card-enter-from {
  opacity: 0;
  transform: scale(0.7) translateY(30px);
}
.fake404-card-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Glitchy robot emoji */
.glitch-emoji {
  animation: emoji-glitch 4s infinite;
}

@keyframes emoji-glitch {
  0%, 90%, 100% { transform: none; filter: none; }
  92% { transform: translate(-3px, 2px) rotate(-2deg); filter: hue-rotate(90deg); }
  94% { transform: translate(3px, -2px) rotate(2deg); filter: hue-rotate(180deg); }
  96% { transform: none; filter: none; }
}
</style>
