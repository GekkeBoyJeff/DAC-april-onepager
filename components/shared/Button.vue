<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
      sizeClasses,
      variantClasses,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  }
  return sizes[props.size]
})

const variantClasses = computed(() => {
  const variants = {
    primary:
      'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-900/30',
    secondary:
      'bg-dark-700 text-dark-100 hover:bg-dark-600 border border-dark-600',
    outline:
      'border border-primary-500 text-primary-400 hover:bg-primary-500/10',
    danger:
      'bg-red-600 text-white hover:bg-red-700',
  }
  return variants[props.variant]
})
</script>
