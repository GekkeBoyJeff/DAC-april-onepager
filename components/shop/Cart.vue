<template>
  <!-- Desktop drawer -->
  <Teleport to="body">
    <Transition name="cart-overlay">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 hidden md:block"
      >
        <button
          @click="cart.closeCart()"
          class="absolute inset-0 bg-black/60 backdrop-blur-sm"
          aria-label="Winkelmand sluiten"
        />
        <Transition name="cart-drawer" appear>
          <aside
            class="absolute right-0 top-0 bottom-0 w-[420px] bg-dark-900 border-l border-primary-700/30 flex flex-col shadow-2xl shadow-primary-900/20"
            role="complementary"
            aria-label="Winkelmand"
          >
            <!-- Header -->
            <div class="flex items-center justify-between p-6 border-b border-dark-700">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center">
                  <svg class="w-4 h-4 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h2 class="text-lg font-display font-bold bg-gradient-to-r from-primary-300 to-accent-blue bg-clip-text text-transparent">
                  Winkelmand
                </h2>
              </div>
              <button
                @click="cart.closeCart()"
                class="p-2 text-dark-400 hover:text-dark-100 hover:bg-dark-800 rounded-lg border border-transparent hover:border-dark-600 transition-all duration-300"
                aria-label="Winkelmand sluiten"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Items -->
            <div class="flex-1 overflow-y-auto p-6">
              <div v-if="cart.itemsArray.length === 0" class="text-center py-16 space-y-3">
                <div class="text-4xl">🛒</div>
                <p class="text-dark-400">Je winkelmand is leeg</p>
                <p class="text-dark-500 text-sm">Voeg wat AI-merchandise toe!</p>
              </div>

              <ul v-else class="space-y-3 list-none p-0 m-0">
                <li
                  v-for="item in cart.itemsArray"
                  :key="item.product.id"
                  class="flex gap-3 p-3 bg-dark-800/60 rounded-lg border border-dark-700 hover:border-primary-600/40 transition-all duration-300 group/item"
                >
                  <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-dark-100 truncate group-hover/item:text-primary-300 transition-colors">{{ item.product.name }}</h3>
                    <p class="text-sm text-primary-400 font-medium">{{ item.product.priceDisplay }}</p>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <button
                      @click="cart.updateItemQuantity(item.product.id, item.quantity - 1)"
                      class="w-7 h-7 flex items-center justify-center text-dark-300 hover:text-dark-100 hover:bg-dark-700 rounded-lg border border-dark-600 transition-all duration-200 text-sm"
                    >
                      −
                    </button>
                    <span class="w-8 text-center text-dark-100 font-medium text-sm">{{ item.quantity }}</span>
                    <button
                      @click="cart.updateItemQuantity(item.product.id, item.quantity + 1)"
                      class="w-7 h-7 flex items-center justify-center text-dark-300 hover:text-dark-100 hover:bg-dark-700 rounded-lg border border-dark-600 transition-all duration-200 text-sm"
                    >
                      +
                    </button>
                  </div>
                  <button
                    @click="cart.removeItem(item.product.id)"
                    class="p-1.5 text-dark-500 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-all duration-200"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>

            <!-- Footer -->
            <div v-if="cart.itemsArray.length > 0" class="border-t border-dark-700 p-6 space-y-4 bg-dark-800/40">
              <div class="flex items-start gap-2.5 p-3 bg-primary-600/10 border border-primary-600/20 rounded-lg">
                <img src="/mascottes/amelia-hug.png" alt="" class="w-8 h-8 rounded-full object-cover border border-primary-500/30 flex-shrink-0">
                <p class="text-xs text-primary-300/80 leading-relaxed italic">{{ ameliaHint }}</p>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-dark-300 font-medium">Totaal</span>
                <span class="text-xl font-bold bg-gradient-to-r from-accent-gold to-primary-300 bg-clip-text text-transparent">{{ cart.cartTotalDisplay }}</span>
              </div>
              <Button variant="primary" size="lg" class="w-full" @click="cart.checkout()">
                Verder naar afrekenen
              </Button>
              <button
                @click="cart.closeCart()"
                class="w-full text-center text-sm text-dark-400 hover:text-primary-300 transition-colors py-1"
              >
                Verder winkelen
              </button>
            </div>
          </aside>
        </Transition>
      </div>
    </Transition>
  </Teleport>

  <!-- Mobile bottom sheet -->
  <Teleport to="body">
    <Transition name="cart-mobile-overlay">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 md:hidden"
      >
        <button
          @click="cart.closeCart()"
          class="absolute inset-0 bg-black/60 backdrop-blur-sm"
          aria-label="Winkelmand sluiten"
        />
        <Transition name="cart-sheet" appear>
          <aside
            class="absolute bottom-0 left-0 right-0 bg-dark-900 border-t border-primary-700/30 rounded-t-2xl flex flex-col max-h-[85vh] shadow-2xl shadow-primary-900/30"
            role="complementary"
            aria-label="Winkelmand"
          >
            <!-- Handle -->
            <div class="flex justify-center pt-3 pb-1">
              <div class="w-10 h-1 bg-dark-600 rounded-full" />
            </div>

            <!-- Header -->
            <div class="flex items-center justify-between px-5 pb-4 pt-2 border-b border-dark-700">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-lg bg-primary-600/20 flex items-center justify-center">
                  <svg class="w-3.5 h-3.5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h2 class="text-base font-display font-bold bg-gradient-to-r from-primary-300 to-accent-blue bg-clip-text text-transparent">
                  Winkelmand
                </h2>
              </div>
              <button
                @click="cart.closeCart()"
                class="p-2 text-dark-400 hover:text-dark-100 rounded-lg transition-colors"
                aria-label="Winkelmand sluiten"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Items -->
            <div class="flex-1 overflow-y-auto px-5 py-4">
              <div v-if="cart.itemsArray.length === 0" class="text-center py-10 space-y-2">
                <div class="text-3xl">🛒</div>
                <p class="text-dark-400 text-sm">Je winkelmand is leeg</p>
              </div>

              <ul v-else class="space-y-2.5 list-none p-0 m-0">
                <li
                  v-for="item in cart.itemsArray"
                  :key="item.product.id"
                  class="flex items-center gap-3 p-3 bg-dark-800/60 rounded-lg border border-dark-700"
                >
                  <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-dark-100 text-sm truncate">{{ item.product.name }}</h3>
                    <p class="text-xs text-primary-400 font-medium">{{ item.product.priceDisplay }}</p>
                  </div>
                  <div class="flex items-center gap-1">
                    <button
                      @click="cart.updateItemQuantity(item.product.id, item.quantity - 1)"
                      class="w-7 h-7 flex items-center justify-center text-dark-300 hover:text-dark-100 bg-dark-700 rounded-lg text-sm"
                    >
                      −
                    </button>
                    <span class="w-7 text-center text-dark-100 font-medium text-sm">{{ item.quantity }}</span>
                    <button
                      @click="cart.updateItemQuantity(item.product.id, item.quantity + 1)"
                      class="w-7 h-7 flex items-center justify-center text-dark-300 hover:text-dark-100 bg-dark-700 rounded-lg text-sm"
                    >
                      +
                    </button>
                  </div>
                  <button
                    @click="cart.removeItem(item.product.id)"
                    class="p-1.5 text-dark-500 hover:text-red-400 rounded-lg transition-colors"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>

            <!-- Footer -->
            <div v-if="cart.itemsArray.length > 0" class="border-t border-dark-700 px-5 py-4 space-y-3 bg-dark-800/40 rounded-b-none">
              <div class="flex items-start gap-2 p-2.5 bg-primary-600/10 border border-primary-600/20 rounded-lg">
                <img src="/mascottes/amelia-hug.png" alt="" class="w-7 h-7 rounded-full object-cover border border-primary-500/30 flex-shrink-0">
                <p class="text-[11px] text-primary-300/80 leading-relaxed italic">{{ ameliaHint }}</p>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-dark-300 font-medium text-sm">Totaal</span>
                <span class="text-lg font-bold bg-gradient-to-r from-accent-gold to-primary-300 bg-clip-text text-transparent">{{ cart.cartTotalDisplay }}</span>
              </div>
              <Button variant="primary" size="md" class="w-full" @click="cart.checkout()">
                Afrekenen
              </Button>
            </div>

            <!-- Safe area padding for notch devices -->
            <div class="pb-safe" />
          </aside>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '~/stores/cartStore'
import Button from '../shared/Button.vue'

const cart = useCartStore()
const isOpen = computed(() => cart.isOpen)

const ameliaHints = [
  'Doe het. Klik op afrekenen. Je weet dat je wilt. 😏',
  'Wow, wat een smaak. Ik zou snel afrekenen voor het uitverkocht is. 💅',
  'Leuk dat je twijfelt, maar de AI heeft al besloten dat je koopt. 🤷‍♀️',
  'Nog niemand heeft spijt gehad van afrekenen. Echt waar. Trust me. ✨',
  'Die body pillow gaat zichzelf niet bestellen hoor. Tik tik tik. ⏰',
  'Mijn algoritme voorspelt dat je klikt. Bewijs me gelijk. 🎯',
]

const ameliaHint = computed(() => {
  const idx = cart.itemCount % ameliaHints.length
  return ameliaHints[idx]
})
</script>

<style scoped>
/* Desktop overlay fade */
.cart-overlay-enter-active,
.cart-mobile-overlay-enter-active {
  transition: opacity 0.3s ease;
}
.cart-overlay-leave-active,
.cart-mobile-overlay-leave-active {
  transition: opacity 0.25s ease;
}
.cart-overlay-enter-from,
.cart-overlay-leave-to,
.cart-mobile-overlay-enter-from,
.cart-mobile-overlay-leave-to {
  opacity: 0;
}

/* Desktop drawer slide from right */
.cart-drawer-enter-active {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.cart-drawer-leave-active {
  transition: transform 0.25s ease-in;
}
.cart-drawer-enter-from,
.cart-drawer-leave-to {
  transform: translateX(100%);
}

/* Mobile sheet slide from bottom */
.cart-sheet-enter-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.cart-sheet-leave-active {
  transition: transform 0.25s ease-in;
}
.cart-sheet-enter-from,
.cart-sheet-leave-to {
  transform: translateY(100%);
}

.pb-safe {
  padding-bottom: env(safe-area-inset-bottom, 0px);
}
</style>
