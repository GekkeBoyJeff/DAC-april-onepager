import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product, CartItem } from '~/types/shop'
import { RICKROLL_URL, formatPrice } from '~/utils/constants'

export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref<CartItem[]>([])
  const isOpen = ref(false)

  // Initialize from localStorage
  if (process.client) {
    const saved = localStorage.getItem('daic-cart')
    if (saved) {
      try {
        items.value = JSON.parse(saved)
      } catch (e) {
        console.error('Failed to load cart from localStorage', e)
      }
    }
  }

  // Persist to localStorage
  const persistCart = () => {
    if (process.client) {
      localStorage.setItem('daic-cart', JSON.stringify(items.value))
    }
  }

  // Getters
  const itemCount = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const cartTotal = computed(() => {
    return items.value.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  })

  const cartTotalDisplay = computed(() => {
    return formatPrice(cartTotal.value)
  })

  const itemsArray = computed(() => items.value)

  // Actions
  const addItem = (product: Product, quantity: number = 1) => {
    const existing = items.value.find(item => item.product.id === product.id)
    
    if (existing) {
      existing.quantity += quantity
    } else {
      items.value.push({ product, quantity })
    }
    
    persistCart()
  }

  const removeItem = (productId: string) => {
    items.value = items.value.filter(item => item.product.id !== productId)
    persistCart()
  }

  const updateItemQuantity = (productId: string, quantity: number) => {
    const item = items.value.find(item => item.product.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeItem(productId)
      } else {
        item.quantity = quantity
        persistCart()
      }
    }
  }

  const clearCart = () => {
    items.value = []
    persistCart()
  }

  const toggleCart = () => {
    isOpen.value = !isOpen.value
  }

  const openCart = () => {
    isOpen.value = true
  }

  const closeCart = () => {
    isOpen.value = false
  }

  const checkout = () => {
    // Rick Roll Easter Egg
    window.open(RICKROLL_URL, '_blank')
    clearCart()
    closeCart()
  }

  return {
    // State
    items,
    isOpen,
    
    // Getters
    itemCount,
    cartTotal,
    cartTotalDisplay,
    itemsArray,
    
    // Actions
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    checkout,
  }
})
