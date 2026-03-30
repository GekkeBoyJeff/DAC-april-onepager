import { onMounted, ref } from 'vue'

export const useScrollSpy = () => {
  const activeSection = ref<string>('')

  onMounted(() => {
    // Trigger animations when elements come into view (10%)
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.2 }
    )

    // Observe all elements with animation classes (including within sections)
    const animatedElements = document.querySelectorAll('[class*="animate-slide-up"], [class*="animate-slide-down"], [class*="animate-slide-left"], [class*="animate-slide-right"], [class*="animate-fade-in"], [class*="animate-scale-in"], [class*="animate-rotate-in"], [class*="animate-flip"]')
    animatedElements.forEach((el) => {
      animationObserver.observe(el)
    })

    // Scroll spy for nav
    const scrollSpy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      scrollSpy.observe(section)
    })
  })

  return { activeSection }
}
