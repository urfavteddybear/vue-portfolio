<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white/70 backdrop-blur-sm shadow-sm'
    ]"
    class="animate-slide-down"
  >
    <nav class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a
            href="#"
            class="text-xl font-bold text-gray-900 hover:text-maroon-600 transition-all duration-300 transform hover:scale-105 focus-outline rounded-md"
            @click.prevent="scrollToTop"
          >
            WPCreative.
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:space-x-6">
          <div class="flex items-baseline space-x-8">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-gray-700 hover:text-maroon-600 px-3 py-2 text-sm font-medium transition-all duration-300 focus-outline rounded-md transform hover:scale-105 cursor-pointer"
              @click.prevent="scrollToSection(item.href)"
            >
              <span class="relative z-10">{{ item.name }}</span>
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-maroon-600 hover:bg-maroon-50 focus-outline transform active:scale-95 transition-all duration-300"
          >
            <span class="sr-only">Open main menu</span>
            <svg v-if="!isMobileMenuOpen" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 max-h-0 transform -translate-y-4"
        enter-to-class="opacity-100 max-h-96 transform translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 max-h-96 transform translate-y-0"
        leave-to-class="opacity-0 max-h-0 transform -translate-y-4"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md overflow-hidden"
        >
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-gray-700 hover:text-maroon-600 hover:bg-maroon-50 block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 transform active:scale-95"
              @click.prevent="scrollToSection(item.href); closeMobileMenu()"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navigation = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Writing', href: '#writing' },
  { name: 'Contact', href: '#contact' },
]

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Slide down animation for navbar */
.animate-slide-down {
  animation: slideDown 0.8s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Focus outline */
.focus-outline:focus {
  outline: 2px solid #9b2c2c;
  outline-offset: 2px;
}
</style>
