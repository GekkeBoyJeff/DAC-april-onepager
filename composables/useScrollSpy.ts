import { onMounted, ref } from 'vue'

export const useScrollSpy = () => {
  const activeSection = ref<string>('')

  onMounted(() => {
    // Fade in entire sections when 20% visible
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('section-visible')) {
            entry.target.classList.add('section-visible')
          }
        })
      },
      { threshold: 0.2 }
    )

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
      sectionObserver.observe(section)
      scrollSpy.observe(section)
    })
  })

  return { activeSection }
}
