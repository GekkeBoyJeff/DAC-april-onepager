<template>
  <Teleport to="body">
    <Transition name="hint">
      <div
        v-if="isVisible"
        class="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
      >
        <p class="text-6xl md:text-8xl font-display font-bold text-primary-500/15 select-none">
          1 APRIL
        </p>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
let hasShown = false
let timeout: ReturnType<typeof setTimeout> | null = null

const onScroll = () => {
  if (hasShown) return

  // Show when user has scrolled past ~50% of the page
  const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight)
  if (scrollPercent > 0.5) {
    hasShown = true
    isVisible.value = true
    timeout = setTimeout(() => {
      isVisible.value = false
    }, 1500)
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (timeout) clearTimeout(timeout)
})
</script>

<style scoped>
.hint-enter-active {
  transition: all 0.6s ease;
}
.hint-leave-active {
  transition: all 1s ease;
}
.hint-enter-from {
  opacity: 0;
  transform: scale(0.5);
}
.hint-leave-to {
  opacity: 0;
  transform: scale(1.5);
}
</style>
