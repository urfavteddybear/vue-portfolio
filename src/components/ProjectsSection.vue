<template>
  <section id="projects" class="py-24 bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16 opacity-0 translate-y-8 animate-fade-in-up">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 hover:text-maroon-600 transition-colors duration-300 cursor-default">
          Featured Projects
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-gray-600">
          Here are some of my recent projects that showcase my skills and passion for development.
        </p>
      </div>

      <!-- Projects grid -->
      <div class="grid gap-8 md:gap-12">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          :class="[
            'group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 opacity-0 translate-y-8 animate-fade-in-up cursor-pointer',
            project.featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''
          ]"
          :style="{ animationDelay: `${index * 200}ms` }"
        >
          <!-- Project image -->
          <div :class="['relative overflow-hidden', project.featured ? 'h-64 md:h-full' : 'h-64']">
            <img 
              v-if="project.image.startsWith('/images/')"
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
            />
            <div v-else class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:from-maroon-100 group-hover:to-maroon-200 transition-all duration-500">
              <svg class="h-20 w-20 text-gray-400 group-hover:text-maroon-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 z-40 flex items-center justify-center">
              <div class="flex space-x-4 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                <a
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-3 bg-white rounded-full text-gray-900 hover:bg-maroon-50 hover:text-maroon-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 active:scale-90 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
                >
                  <!-- Button shimmer effect -->
                  <span class="absolute inset-0 bg-gradient-to-r from-transparent via-maroon-300/30 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-shimmer"></span>
                  <svg class="h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-3 bg-white rounded-full text-gray-900 hover:bg-maroon-50 hover:text-maroon-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 active:scale-90 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
                >
                  <!-- Button shimmer effect -->
                  <span class="absolute inset-0 bg-gradient-to-r from-transparent via-maroon-300/30 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-shimmer"></span>
                  <svg class="h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Floating particles -->
            <div class="absolute top-4 right-4 w-2 h-2 bg-maroon-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
            <div class="absolute bottom-4 left-4 w-1 h-1 bg-maroon-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700" style="animation-delay: 200ms;"></div>
          </div>

          <!-- Project content -->
          <div class="p-6 md:p-8 flex flex-col justify-center relative z-50">
            <div class="flex items-center mb-4">
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-maroon-600 transition-all duration-300 group-hover:scale-105 group-hover:translate-x-2">
                {{ project.title }}
              </h3>
              <span 
                v-if="project.featured"
                class="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-maroon-100 text-maroon-800 group-hover:bg-maroon-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
              >
                Featured
              </span>
            </div>
            
            <p class="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 group-hover:translate-x-1 transition-all duration-300">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="(tech, techIndex) in project.technologies"
                :key="tech"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-maroon-100 hover:text-maroon-700 hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-default"
                :style="{ transitionDelay: `${techIndex * 50}ms` }"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Action buttons -->
            <div class="flex space-x-4">
              <a
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="group/link inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-maroon-600 hover:bg-maroon-700 focus-outline transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <!-- Animated background sweep -->
                <span class="absolute inset-0 bg-gradient-to-r from-maroon-500 to-maroon-600 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
                
                <span class="relative z-10">Live Demo</span>
                <svg class="ml-2 h-4 w-4 relative z-10 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                
                <!-- Ripple effect -->
                <span class="absolute inset-0 rounded-md opacity-0 group-hover/link:opacity-30 group-hover/link:animate-ping bg-maroon-300"></span>
              </a>
              
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="group/link inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:border-maroon-300 hover:text-maroon-600 focus-outline transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 shadow-md hover:shadow-lg relative overflow-hidden"
              >
                <!-- Animated border sweep -->
                <span class="absolute inset-0 border-2 border-maroon-400 rounded-md opacity-0 group-hover/link:opacity-100 transform scale-95 group-hover/link:scale-100 transition-all duration-300"></span>
                
                <span class="relative z-10">View Code</span>
                <svg class="ml-2 h-4 w-4 relative z-10 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                
                <!-- Floating particles -->
                <span class="absolute top-1 right-1 w-1 h-1 bg-maroon-400 rounded-full opacity-0 group-hover/link:opacity-100 group-hover/link:animate-ping"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: "Point of Sales System",
    description: "A comprehensive Point of Sales (POS) system designed for retail businesses. Features inventory management, sales tracking, customer management, and detailed reporting. Built with a clean and intuitive interface for efficient business operations.",
    image: "/images/point-of-sales.webp",
    technologies: ["PHP", "Bootstrap", "AdminLTE", "MySQL"],
    liveUrl: "https://pos.wahyuputra.biz.id",
    githubUrl: "https://github.com/urfavteddybear/Point-Of-Sales.git",
    featured: true
  },
  {
    id: 2,
    title: "Recipe Blog Platform",
    description: "A dynamic recipe blog platform where users can discover, share, and manage cooking recipes. Features recipe browsing, detailed cooking instructions, ingredient lists, and user-friendly recipe management. Built with server-side rendering for optimal performance.",
    image: "/images/cooking-blog.webp",
    technologies: ["Express.js", "EJS", "Node.js", "JavaScript"],
    liveUrl: "https://recipe-blog.wahyuputra.biz.id",
    githubUrl: "https://github.com/urfavteddybear/recipe-blog",
    featured: true
  },
  {
    id: 3,
    title: "Minimalist Tech Blog",
    description: "A minimalist blog about web development, design, and technology. Built with Next.js and markdown for simple content management. Features clean design, fast performance, and easy content publishing workflow.",
    image: "/images/blog.webp",
    technologies: ["Next.js", "Markdown", "TypeScript"],
    liveUrl: "https://blog.wahyuputra.biz.id",
    githubUrl: "https://github.com/urfavteddybear/wpcreative-blog",
    featured: true
  }
]
</script>

<style scoped>
/* Fade in up animation */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
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

/* Floating animations for background elements */
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(3deg);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(20px) rotate(-2deg);
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 10s ease-in-out infinite;
  animation-delay: 3s;
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

/* Staggered animation delays */
.grid > div:nth-child(1) { animation-delay: 0ms; }
.grid > div:nth-child(2) { animation-delay: 200ms; }
.grid > div:nth-child(3) { animation-delay: 400ms; }
.grid > div:nth-child(4) { animation-delay: 600ms; }
</style>
