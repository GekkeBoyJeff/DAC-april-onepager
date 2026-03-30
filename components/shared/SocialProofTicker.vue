<template>
  <Teleport to="body">
    <Transition name="ticker">
      <div
        v-if="isVisible"
        class="fixed bottom-6 right-6 z-40 max-w-xs bg-dark-800 border border-dark-600 rounded-xl p-3 shadow-2xl shadow-black/40 flex items-center gap-3"
      >
        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary-600 to-accent-blue flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {{ buyer.charAt(0) }}
        </div>
        <div class="min-w-0">
          <p class="text-sm text-dark-200 truncate">
            <span class="font-semibold text-primary-300">{{ buyer }}</span> kocht zojuist
          </p>
          <p class="text-xs text-dark-400 truncate">{{ quantity }}x {{ product }}</p>
        </div>
        <div class="flex-shrink-0 text-xs text-dark-500">{{ timeAgo }}</div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const buyer = ref('')
const product = ref('')
const quantity = ref(1)
const timeAgo = ref('')

const buyers = [
  'SakuraBot_v2', 'AI.Yuki#003', 'NeuralWeeb.exe', 'ModBot.v3',
  'AnimeFan_404', 'Waifu.dll', 'OtakuAI_99', 'DeepLearn.chan',
  'SyntheticFan.exe', 'BotKun_v7', 'AI.Naruto#001', 'DataWeeb.py',
  'PixelSenpai.ai', 'KawaiiNet.v2', 'TensorWeeb_42',
]

const products = [
  'Amelia NSFW Figure', 'Amelia Body Pillow Set',
  'Amelia AI Dating Sim', 'DAC Trading Coin',
]

const times = ['nu', '2 sec geleden', '5 sec geleden', 'zojuist', '1 min geleden']

let interval: ReturnType<typeof setInterval> | null = null

const showRandom = () => {
  buyer.value = buyers[Math.floor(Math.random() * buyers.length)]
  product.value = products[Math.floor(Math.random() * products.length)]
  quantity.value = Math.random() > 0.7 ? Math.floor(Math.random() * 5) + 2 : 1
  timeAgo.value = times[Math.floor(Math.random() * times.length)]
  isVisible.value = true

  setTimeout(() => {
    isVisible.value = false
  }, 4000)
}

onMounted(() => {
  // First one after 20 seconds
  setTimeout(() => {
    showRandom()
    // Then every 15-25 seconds
    interval = setInterval(showRandom, 15000 + Math.random() * 10000)
  }, 20000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.ticker-enter-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.ticker-leave-active {
  transition: all 0.3s ease;
}
.ticker-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}
.ticker-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
