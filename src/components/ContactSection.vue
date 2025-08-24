<template>
  <section id="contact" class="py-24 bg-white relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-[0.02] -z-10">
      <div class="absolute top-1/4 left-1/4 w-[280px] h-[280px] bg-maroon-400 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-maroon-300 rounded-full blur-3xl animate-float-reverse"></div>
    </div>
    
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <!-- Section header -->
        <div class="text-center mb-16 opacity-0 translate-y-8 animate-fade-in-up">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 hover:scale-105 hover:text-maroon-600 transition-all duration-500 cursor-default group">
            Let's Work Together
            <!-- Animated underline -->
            <span class="block w-0 h-1 bg-gradient-to-r from-maroon-500 to-maroon-700 mx-auto mt-2 group-hover:w-48 transition-all duration-500"></span>
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600 hover:text-gray-700 transition-colors duration-300">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="opacity-0 translate-x-8 animate-fade-in-left" style="animation-delay: 300ms;">
            <h3 class="text-xl font-bold text-gray-900 mb-6 hover:text-maroon-600 transition-colors duration-300">
              Get in Touch
            </h3>
            <div class="space-y-6">
              <div class="flex items-start group hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 bg-maroon-100 rounded-lg flex items-center justify-center group-hover:bg-maroon-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden">
                    <!-- Shimmer effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-maroon-300/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                    <svg class="w-5 h-5 text-maroon-600 group-hover:text-maroon-700 group-hover:scale-125 transition-all duration-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4 group-hover:translate-x-2 transition-all duration-300">
                  <h4 class="text-lg font-medium text-gray-900 group-hover:text-maroon-600 transition-colors duration-300">Email</h4>
                  <p class="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">wahyuputra@gmail.com</p>
                </div>
                <!-- Floating particle -->
                <div class="w-1 h-1 bg-maroon-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping ml-auto mt-2"></div>
              </div>

              <div class="flex items-start group hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 bg-maroon-100 rounded-lg flex items-center justify-center group-hover:bg-maroon-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden">
                    <!-- Shimmer effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-maroon-300/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                    <svg class="w-5 h-5 text-maroon-600 group-hover:text-maroon-700 group-hover:scale-125 transition-all duration-300 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4 group-hover:translate-x-2 transition-all duration-300">
                  <h4 class="text-lg font-medium text-gray-900 group-hover:text-maroon-600 transition-colors duration-300">Website</h4>
                  <p class="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">wahyuputra.biz.id</p>
                </div>
                <!-- Floating particle -->
                <div class="w-1 h-1 bg-maroon-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce ml-auto mt-2" style="animation-delay: 100ms;"></div>
              </div>

              <div class="flex items-start group hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 bg-maroon-100 rounded-lg flex items-center justify-center group-hover:bg-maroon-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden">
                    <!-- Shimmer effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-maroon-300/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                    <svg class="w-5 h-5 text-maroon-600 group-hover:text-maroon-700 group-hover:scale-125 transition-all duration-300 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4 group-hover:translate-x-2 transition-all duration-300">
                  <h4 class="text-lg font-medium text-gray-900 group-hover:text-maroon-600 transition-colors duration-300">Location</h4>
                  <p class="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Indonesia</p>
                </div>
                <!-- Floating particle -->
                <div class="w-1 h-1 bg-maroon-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping ml-auto mt-2" style="animation-delay: 200ms;"></div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-8">
              <h4 class="text-lg font-medium text-gray-900 mb-4 hover:text-maroon-600 transition-colors duration-300">Follow Me</h4>
              <div class="flex space-x-4">
                <a
                  href="https://github.com/urfavteddybear"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-maroon-100 hover:text-maroon-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12 active:scale-90 shadow-md hover:shadow-xl relative overflow-hidden"
                >
                  <!-- Shimmer effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-maroon-300/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                  <svg class="w-5 h-5 relative z-10 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                  </svg>
                  <!-- Ripple effect -->
                  <div class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 group-hover:animate-ping bg-maroon-300"></div>
                </a>
                <a
                  href="https://linkedin.com/in/wahyuputra"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-maroon-100 hover:text-maroon-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12 active:scale-90 shadow-md hover:shadow-xl relative overflow-hidden"
                >
                  <!-- Shimmer effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-maroon-300/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                  <svg class="w-5 h-5 relative z-10 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                  </svg>
                  <!-- Ripple effect -->
                  <div class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 group-hover:animate-ping bg-maroon-300"></div>
                </a>
                <a
                  href="https://twitter.com/wahyuputra"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-maroon-100 hover:text-maroon-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12 active:scale-90 shadow-md hover:shadow-xl relative overflow-hidden"
                >
                  <!-- Shimmer effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-maroon-300/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                  <svg class="w-5 h-5 relative z-10 transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <!-- Ripple effect -->
                  <div class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 group-hover:animate-ping bg-maroon-300"></div>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="opacity-0 translate-x-8 animate-fade-in-right" style="animation-delay: 600ms;">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="group">
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2 group-hover:text-maroon-600 transition-colors duration-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500 transition-all duration-300 hover:border-maroon-300 hover:shadow-md transform focus:scale-105"
                  placeholder="Your name"
                />
              </div>

              <div class="group">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2 group-hover:text-maroon-600 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500 transition-all duration-300 hover:border-maroon-300 hover:shadow-md transform focus:scale-105"
                  placeholder="your@email.com"
                />
              </div>

              <div class="group">
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2 group-hover:text-maroon-600 transition-colors duration-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500 transition-all duration-300 hover:border-maroon-300 hover:shadow-md transform focus:scale-105"
                  placeholder="Project discussion"
                />
              </div>

              <div class="group">
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2 group-hover:text-maroon-600 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500 transition-all duration-300 hover:border-maroon-300 hover:shadow-md transform focus:scale-105 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="group w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 focus-outline transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <!-- Animated background sweep -->
                <span class="absolute inset-0 bg-gradient-to-r from-maroon-500 to-maroon-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
                
                <span v-if="!isSubmitting" class="relative z-10 transition-all duration-300 group-hover:scale-105">Send Message</span>
                <span v-else class="flex items-center relative z-10">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
                
                <!-- Ripple effect -->
                <span class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 group-hover:animate-ping bg-maroon-300"></span>
              </button>
            </form>

            <!-- Success/Error messages -->
            <div v-if="submitStatus" class="mt-4 transform transition-all duration-500">
              <div 
                :class="[
                  'p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-default',
                  submitStatus === 'success' 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-red-100 text-red-700 hover:bg-red-200'
                ]"
              >
                {{ submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'success' | 'error' | null>(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form)
    
    submitStatus.value = 'success'
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })
  } catch (error) {
    console.error('Error submitting form:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
    
    // Clear status after 5 seconds
    setTimeout(() => {
      submitStatus.value = null
    }, 5000)
  }
}
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
