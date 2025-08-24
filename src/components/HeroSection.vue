<template>
  <section class="relative min-h-screen flex items-center justify-center px-6 lg:px-8 bg-gradient-to-br from-white via-maroon-25/20 to-maroon-50/30 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-[0.03] -z-10">
      <div 
        class="absolute inset-0" 
        style="background-image: radial-gradient(circle at 2px 2px, #9b2c2c 1px, transparent 1px); background-size: 40px 40px;"
      ></div>
    </div>
    
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-maroon-100/30 to-transparent rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-maroon-75/25 to-transparent rounded-full blur-3xl" />
    </div>
    
    <div class="mx-auto max-w-4xl text-center relative z-10">
      <div class="space-y-8 animate-fade-in">
        <div class="space-y-4 animate-slide-up">
          <div class="inline-block px-4 py-2 bg-maroon-50 text-maroon-700 rounded-full text-sm font-medium border border-maroon-200 hover:bg-maroon-100 hover:border-maroon-300 hover:scale-105 transition-all duration-300 cursor-default">
            Available for any opportunities
          </div>
          
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl transition-all duration-300">
            <span class="block">
              <span class="text-gray-600 transition-all duration-300">Hi, I'm</span>
              <span class="relative group/name">
                <span class="relative z-10 bg-gradient-to-r from-maroon-600 to-maroon-800 bg-clip-text text-transparent">
                  Wahyu Putra
                </span>
                <!-- Simple underline -->
                <span class="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-maroon-500 to-maroon-700 group-hover/name:w-full transition-all duration-500 ease-out"></span>
              </span>
            </span>
            <span class="block mt-2">
              <span class="text-gray-900 transition-all duration-300">a DevOps </span>
              <span class="relative">
                <span class="relative z-10">Engineer</span>
                <span class="absolute inset-0 -left-2 top-1 z-0 block h-[38px] w-full rotate-[-1deg] bg-gradient-to-r from-maroon-200/60 to-maroon-300/60 sm:h-[54px] lg:h-[60px]"></span>
              </span>
            </span>
          </h1>
        </div>

        <p class="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl lg:mt-12 animate-slide-up delay-300">
          I build and optimize 
          <span class="relative">
            <span class="font-semibold text-gray-900">reliable server infrastructure</span>
            <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-maroon-500 to-maroon-600"></span>
          </span>
          with expertise in 
          <span class="relative">
            <span class="font-medium text-maroon-600">Docker, Linux & Cloud Technologies</span>
            <span class="absolute left-0 top-8 hidden text-sm text-gray-500 lg:block">
              <WaveIcon class="w-20 h-4 text-maroon-300" />
            </span>
          </span>
          ready to help scale your infrastructure.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-500">
          <button
            @click="scrollToProjects"
            class="group inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 focus-outline transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            <span class="relative z-10">View My Work</span>
            <svg class="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          
          <a
            href="#contact"
            @click.prevent="scrollToContact"
            class="inline-flex items-center px-8 py-3 border border-maroon-200 text-base font-medium rounded-xl text-maroon-700 bg-white hover:bg-maroon-50 focus-outline transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in delay-1000">
      <div class="w-6 h-10 border-2 border-maroon-300 rounded-full flex justify-center animate-bounce-light">
        <div class="w-1 h-3 bg-maroon-500 rounded-full mt-2 animate-float"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import WaveIcon from './WaveIcon.vue'

const scrollToProjects = () => {
  const element = document.querySelector('#projects')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const scrollToContact = () => {
  const element = document.querySelector('#contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
/* Basic bounce for availability badge */
.animate-bounce-light {
  animation: bounce-light 3s ease-in-out infinite;
}

@keyframes bounce-light {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-4px) scale(1.02);
  }
}

/* Fade in animation */
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide up animation */
.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-500 {
  animation-delay: 500ms;
}

/* Simple float animation for scroll indicator */
.animate-float {
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* Focus outline */
.focus-outline:focus {
  outline: 2px solid #9b2c2c;
  outline-offset: 2px;
}
</style>
