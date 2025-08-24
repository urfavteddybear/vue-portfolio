<template>
  <section id="contact" class="py-24 bg-gray-50 relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-[0.03] -z-10">
      <div class="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-maroon-400 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[150px] h-[150px] bg-maroon-300 rounded-full blur-3xl animate-float-reverse"></div>
    </div>
    
    <div class="mx-auto max-w-4xl px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16 opacity-0 translate-y-8 animate-fade-in-up">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 hover:scale-105 hover:text-maroon-600 transition-all duration-300 cursor-default group">
          Get In Touch
          <!-- Animated underline -->
          <span class="block w-0 h-1 bg-gradient-to-r from-maroon-500 to-maroon-700 mx-auto mt-2 group-hover:w-32 transition-all duration-500"></span>
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-gray-600 hover:text-gray-700 transition-colors duration-300">
          Let's connect and discuss opportunities to work together
        </p>
      </div>

      <!-- Contact Cards Grid -->
      <div class="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
        <!-- Email Card -->
        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer opacity-0 translate-y-8 animate-fade-in-up" style="animation-delay: 200ms;">
          <div class="text-center">
            <div class="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-200 group-hover:scale-110 transition-all duration-300">
              <svg class="w-6 h-6 text-maroon-600 group-hover:scale-110 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-maroon-600 transition-colors duration-300">Email</h3>
            <p class="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">contact@wahyuputra.biz.id</p>
          </div>
        </div>

        <!-- Location Card -->
        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer opacity-0 translate-y-8 animate-fade-in-up" style="animation-delay: 400ms;">
          <div class="text-center">
            <div class="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-200 group-hover:scale-110 transition-all duration-300">
              <svg class="w-6 h-6 text-maroon-600 group-hover:scale-110 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-maroon-600 transition-colors duration-300">Location</h3>
            <p class="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">Bali, Indonesia</p>
          </div>
        </div>
      </div>

      <!-- Main Contact Card -->
      <div class="bg-white rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 opacity-0 translate-y-8 animate-fade-in-up" style="animation-delay: 1000ms;">
        <div class="text-center">
          <div class="w-20 h-20 bg-gradient-to-br from-maroon-500 to-maroon-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer">
            <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 hover:text-maroon-600 transition-colors duration-300">
            Ready to start a project?
          </h3>
          <p class="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hello, feel free to reach out!
          </p>
          
          <!-- Contact Action Button -->
          <div class="flex justify-center">
            <a
              href="mailto:contact@wahyuputra.biz.id"
              class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-maroon-600 to-maroon-700 text-white font-medium rounded-lg hover:from-maroon-700 hover:to-maroon-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <svg class="w-5 h-5 mr-2 group-hover:scale-110 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an Email
            </a>
          </div>
        </div>
      </div>

      <!-- Social Links Section -->
      <div class="mt-12 text-center opacity-0 translate-y-8 animate-fade-in-up" style="animation-delay: 1200ms;">
        <h4 class="text-lg font-medium text-gray-900 mb-6 hover:text-maroon-600 transition-colors duration-300">Connect with me</h4>
        <div class="flex justify-center space-x-6">
          <a
            href="https://github.com/urfavteddybear"
            target="_blank"
            rel="noopener noreferrer"
            class="group w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
          >
            <svg class="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          <a
            href="https://linkedin.com/in/wahyuputra"
            target="_blank"
            rel="noopener noreferrer"
            class="group w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
          >
            <svg class="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a
            href="https://twitter.com/wahyuputra"
            target="_blank"
            rel="noopener noreferrer"
            class="group w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
          >
            <svg class="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No complex form logic needed anymore - just a simple contact info display
</script>

<style scoped>
/* Fade in animations */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Floating animations for background elements */
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(15px) rotate(-1deg);
  }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 8s ease-in-out infinite;
  animation-delay: 1s;
}

/* Shimmer animation */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 1.5s ease-in-out;
}

/* Focus outline */
.focus-outline:focus {
  outline: 2px solid #9b2c2c;
  outline-offset: 2px;
}
</style>
