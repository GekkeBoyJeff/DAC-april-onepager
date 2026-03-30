<template>
  <aside v-if="isOpen" class="fixed inset-0 z-50 md:flex hidden" role="complementary" aria-label="Winkelmand">
    <button
      @click="cart.closeCart()"
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      aria-label="Winkelmand sluiten"
    />
    <div class="relative ml-auto w-96 bg-dark-900 border-l border-primary-700/30 flex flex-col max-h-screen">
      <div class="flex items-center justify-between p-6 border-b border-dark-700">
        <h2 class="text-xl font-display font-bold text-dark-100">Winkelmand</h2>
        <button
          @click="cart.closeCart()"
          class="p-2 text-dark-300 hover:text-dark-100 hover:bg-dark-800 rounded-lg transition-colors"
          aria-label="Winkelmand sluiten"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 overflow-y-auto p-6">
        <div v-if="cart.itemsArray.length === 0" class="text-center py-12">
          <p class="text-dark-400">Je winkelmand is leeg</p>
        </div>

        <ul v-else class="space-y-4 list-none p-0 m-0">
          <li
            v-for="item in cart.itemsArray"
            :key="item.product.id"
            class="flex gap-3 p-3 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-600/50 transition-colors"
          >
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-dark-100 truncate">{{ item.product.name }}</h3>
              <p class="text-sm text-primary-400">{{ item.product.priceDisplay }}</p>
            </div>
            <div class="flex items-center gap-2" role="group" :aria-label="`Aantal ${item.product.name}`">
              <button
                @click="cart.updateItemQuantity(item.product.id, item.quantity - 1)"
                class="p-1 text-dark-300 hover:text-dark-100 hover:bg-dark-700 rounded transition-colors"
                :aria-label="`Aantal ${item.product.name} verlagen`"
              >
                −
              </button>
              <span class="w-8 text-center text-dark-100 font-medium" aria-live="polite">{{ item.quantity }}</span>
              <button
                @click="cart.updateItemQuantity(item.product.id, item.quantity + 1)"
                class="p-1 text-dark-300 hover:text-dark-100 hover:bg-dark-700 rounded transition-colors"
                :aria-label="`Aantal ${item.product.name} verhogen`"
              >
                +
              </button>
            </div>
            <button
              @click="cart.removeItem(item.product.id)"
              class="p-1 text-red-400 hover:bg-red-900/20 rounded transition-colors"
              :aria-label="`${item.product.name} verwijderen`"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div v-if="cart.itemsArray.length > 0" class="border-t border-dark-700 p-6 space-y-4">
        <div class="flex justify-between items-center text-lg font-bold">
          <span class="text-dark-200">Totaal:</span>
          <span class="text-primary-400">{{ cart.cartTotalDisplay }}</span>
        </div>
        <Button variant="primary" size="lg" class="w-full" @click="cart.checkout()">
          Verder naar afrekenen
        </Button>
        <Button variant="secondary" size="md" class="w-full" @click="cart.closeCart()">
          Verder winkelen
        </Button>
      </div>
    </div>
  </aside>
  <aside v-else-if="isMobileOpen" class="fixed inset-0 z-50 flex md:hidden flex-col bg-dark-900" role="complementary" aria-label="Winkelmand">
    <div class="flex items-center justify-between p-4 border-b border-dark-700">
      <h2 class="text-xl font-display font-bold text-dark-100">Winkelmand</h2>
      <button
        @click="cart.closeCart()"
        class="p-2 text-dark-300 hover:text-dark-100 hover:bg-dark-800 rounded-lg transition-colors"
        aria-label="Winkelmand sluiten"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="flex-1 overflow-y-auto p-4">
      <div v-if="cart.itemsArray.length === 0" class="text-center py-12">
        <p class="text-dark-400">Je winkelmand is leeg</p>
      </div>

      <ul v-else class="space-y-3 list-none p-0 m-0">
        <li
          v-for="item in cart.itemsArray"
          :key="item.product.id"
          class="flex gap-2 p-2 bg-dark-800 rounded-lg border border-dark-700"
        >
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-dark-100 text-sm truncate">{{ item.product.name }}</h3>
            <p class="text-xs text-primary-400">{{ item.product.priceDisplay }}</p>
          </div>

          <div class="flex items-center gap-1" role="group" :aria-label="`Aantal ${item.product.name}`">
            <button
              @click="cart.updateItemQuantity(item.product.id, item.quantity - 1)"
              class="px-1.5 hover:bg-dark-700 rounded text-xs text-dark-300 hover:text-dark-100"
              :aria-label="`Aantal ${item.product.name} verlagen`"
            >
              −
            </button>
            <span class="w-6 text-center text-xs text-dark-100 font-medium" aria-live="polite">{{ item.quantity }}</span>
            <button
              @click="cart.updateItemQuantity(item.product.id, item.quantity + 1)"
              class="px-1.5 hover:bg-dark-700 rounded text-xs text-dark-300 hover:text-dark-100"
              :aria-label="`Aantal ${item.product.name} verhogen`"
            >
              +
            </button>
            <button
              @click="cart.removeItem(item.product.id)"
              class="text-red-400 hover:bg-red-900/20 rounded px-1"
              :aria-label="`${item.product.name} verwijderen`"
            >
              ✕
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="cart.itemsArray.length > 0" class="border-t border-dark-700 p-4 space-y-3">
      <div class="flex justify-between items-center font-bold">
        <span class="text-dark-200">Totaal:</span>
        <span class="text-primary-400">{{ cart.cartTotalDisplay }}</span>
      </div>
      <Button variant="primary" size="md" class="w-full" @click="cart.checkout()">
        Afrekenen
      </Button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '~/stores/cartStore'
import Button from '../shared/Button.vue'

const cart = useCartStore()

const isOpen = computed(() => cart.isOpen)
const isMobileOpen = computed(() => cart.isOpen)
</script>

<style scoped>
div {
  @apply transition-all duration-300;
}
</style>
