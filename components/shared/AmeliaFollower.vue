<template>
  <div
    v-if="isVisible"
    class="fixed pointer-events-none z-30 transition-opacity duration-500"
    :class="hasAppeared ? 'opacity-100' : 'opacity-0'"
    :style="{ left: `${ameliaX}px`, top: `${ameliaY}px` }"
  >
    <div class="relative">
      <img
        src="./mascottes/amelia-hug.png"
        alt=""
        class="w-16 h-16 rounded-full border-2 border-primary-500/40 shadow-lg shadow-primary-900/40 object-cover"
        :style="{ transform: `scaleX(${lookDirection})` }"
      >
      <div class="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-dark-800 border border-primary-500/30 rounded-lg px-2 py-1 text-xs text-dark-200 shadow-lg">
        {{ currentEmote }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const hasAppeared = ref(false)
const ameliaX = ref(0)
const ameliaY = ref(0)
const mouseX = ref(0)
const mouseY = ref(0)
const lookDirection = ref(1)
const currentEmote = ref('👀')

const emotes = ['👀', '😳', '🤔', '✨', '💜', '🎮', '📺']
let animFrame: number | null = null
let emoteInterval: ReturnType<typeof setInterval> | null = null

const onMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

const follow = () => {
  const dx = mouseX.value - ameliaX.value - 32
  const dy = mouseY.value - ameliaY.value - 32
  // Smooth follow with lag
  ameliaX.value += dx * 0.03
  ameliaY.value += dy * 0.03
  // Look towards mouse
  lookDirection.value = dx > 0 ? 1 : -1
  animFrame = requestAnimationFrame(follow)
}

onMounted(() => {
  // Show after 30 seconds of browsing
  setTimeout(() => {
    // Start at bottom-right
    ameliaX.value = window.innerWidth - 100
    ameliaY.value = window.innerHeight - 100
    isVisible.value = true

    setTimeout(() => {
      hasAppeared.value = true
    }, 100)

    window.addEventListener('mousemove', onMouseMove)
    animFrame = requestAnimationFrame(follow)

    emoteInterval = setInterval(() => {
      currentEmote.value = emotes[Math.floor(Math.random() * emotes.length)]
    }, 5000)
  }, 60000)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  if (animFrame) cancelAnimationFrame(animFrame)
  if (emoteInterval) clearInterval(emoteInterval)
})
</script>
