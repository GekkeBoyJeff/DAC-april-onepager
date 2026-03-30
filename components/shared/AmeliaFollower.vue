<template>
  <!-- Desktop: follows mouse -->
  <div
    v-if="isVisible && !isMobile"
    class="fixed pointer-events-none z-30 transition-opacity duration-500 hidden md:block"
    :class="hasAppeared ? 'opacity-100' : 'opacity-0'"
    :style="{ left: `${ameliaX}px`, top: `${ameliaY}px` }"
  >
    <div class="relative">
      <img
        src="/mascottes/amelia-hug.png"
        alt=""
        class="w-16 h-16 rounded-full border-2 border-primary-500/40 shadow-lg shadow-primary-900/40 object-cover"
        :style="{ transform: `scaleX(${lookDirection})` }"
      >
      <div class="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-dark-800 border border-primary-500/30 rounded-lg px-2 py-1 text-xs text-dark-200 shadow-lg">
        {{ currentEmote }}
      </div>
    </div>
  </div>

  <!-- Mobile: peeks from right edge on scroll -->
  <div
    v-if="isVisible && isMobile"
    class="fixed right-0 z-30 pointer-events-none md:hidden transition-all duration-700 ease-out"
    :style="{ top: `${mobilePeekY}px` }"
    :class="isMobilePeeking ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'"
  >
    <div class="relative">
      <img
        src="/mascottes/amelia-hug.png"
        alt=""
        class="w-14 h-14 rounded-l-full border-2 border-r-0 border-primary-500/40 shadow-lg shadow-primary-900/40 object-cover"
      >
      <div class="absolute -top-7 right-2 whitespace-nowrap bg-dark-800 border border-primary-500/30 rounded-lg px-2 py-1 text-xs text-dark-200 shadow-lg">
        {{ currentEmote }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const hasAppeared = ref(false)
const isMobile = ref(false)

// Desktop state
const ameliaX = ref(0)
const ameliaY = ref(0)
const mouseX = ref(0)
const mouseY = ref(0)
const lookDirection = ref(1)

// Mobile state
const isMobilePeeking = ref(false)
const mobilePeekY = ref(200)
let lastScrollY = 0
let scrollDelta = 0

// Shared
const currentEmote = ref('👀')
const emotes = ['👀', '😳', '🤔', '✨', '💜', '🎮', '📺', '👋', '🫣']

let animFrame: number | null = null
let emoteInterval: ReturnType<typeof setInterval> | null = null
let peekTimeout: ReturnType<typeof setTimeout> | null = null

// Desktop: mouse follow
const onMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

const follow = () => {
  const dx = mouseX.value - ameliaX.value - 32
  const dy = mouseY.value - ameliaY.value - 32
  ameliaX.value += dx * 0.03
  ameliaY.value += dy * 0.03
  lookDirection.value = dx > 0 ? 1 : -1
  animFrame = requestAnimationFrame(follow)
}

// Mobile: peek on scroll direction change
const onScroll = () => {
  const currentY = window.scrollY
  const delta = currentY - lastScrollY
  scrollDelta += Math.abs(delta)
  lastScrollY = currentY

  // Peek every ~800px of scrolling
  if (scrollDelta > 800 && !isMobilePeeking.value) {
    scrollDelta = 0
    mobilePeekY.value = 150 + Math.random() * (window.innerHeight - 300)
    currentEmote.value = emotes[Math.floor(Math.random() * emotes.length)]
    isMobilePeeking.value = true

    if (peekTimeout) clearTimeout(peekTimeout)
    peekTimeout = setTimeout(() => {
      isMobilePeeking.value = false
    }, 2500)
  }
}

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768 || 'ontouchstart' in window
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)

  setTimeout(() => {
    isVisible.value = true

    setTimeout(() => {
      hasAppeared.value = true
    }, 100)

    if (isMobile.value) {
      window.addEventListener('scroll', onScroll, { passive: true })
    } else {
      ameliaX.value = window.innerWidth - 100
      ameliaY.value = window.innerHeight - 100
      window.addEventListener('mousemove', onMouseMove)
      animFrame = requestAnimationFrame(follow)
    }

    emoteInterval = setInterval(() => {
      currentEmote.value = emotes[Math.floor(Math.random() * emotes.length)]
    }, 5000)
  }, 30000)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', checkMobile)
  if (animFrame) cancelAnimationFrame(animFrame)
  if (emoteInterval) clearInterval(emoteInterval)
  if (peekTimeout) clearTimeout(peekTimeout)
})
</script>
