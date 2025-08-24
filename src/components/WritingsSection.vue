<template>
  <section id="writing" class="py-24 bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16 opacity-0 translate-y-8 animate-fade-in-up">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
          Latest Writings
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-gray-600">
          Thoughts on technology, development, and DevOps practices
        </p>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="grid gap-8 md:grid-cols-2">
        <div
          v-for="i in 3"
          :key="i"
          class="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse"
        >
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="h-6 bg-gray-200 rounded-full w-20"></div>
              <div class="h-4 bg-gray-200 rounded w-24"></div>
            </div>
            <div class="h-6 bg-gray-200 rounded mb-3"></div>
            <div class="space-y-2 mb-4">
              <div class="h-4 bg-gray-200 rounded"></div>
              <div class="h-4 bg-gray-200 rounded w-5/6"></div>
              <div class="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div class="h-4 bg-gray-200 rounded w-20"></div>
          </div>
        </div>
      </div>

      <!-- Articles grid -->
      <div v-if="!loading && articles.length > 0" class="grid gap-8 md:grid-cols-2">
        <article
          v-for="(article, index) in articles"
          :key="article.id"
          class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group opacity-0 translate-y-8 animate-fade-in-up cursor-pointer transform hover:scale-105 relative"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <!-- Simple hover overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-maroon-500/0 to-maroon-600/0 group-hover:from-maroon-500/5 group-hover:to-maroon-600/10 transition-all duration-300 rounded-xl"></div>
          
          <div class="p-6 relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-maroon-100 text-maroon-700 transition-all duration-300 group-hover:bg-maroon-200">
                {{ article.category }}
              </span>
              <time class="text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-700">
                {{ formatDate(article.date) }}
              </time>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-maroon-600 transition-all duration-300 mb-3">
              <a :href="article.url" target="_blank" rel="noopener noreferrer" class="hover:underline">
                {{ article.title }}
              </a>
            </h3>
            
            <p class="text-gray-600 mb-4 leading-relaxed transition-all duration-300 group-hover:text-gray-700">
              {{ article.excerpt }}
            </p>

            <a
              :href="article.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-maroon-600 hover:text-white font-medium transition-all duration-300 bg-maroon-50 hover:bg-maroon-600 px-4 py-2 rounded-lg transform hover:scale-105"
            >
              Read more
              <span class="ml-2 transition-all duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </article>
      </div>

      <!-- Error state -->
      <div v-if="!loading && error" class="text-center py-12">
        <div class="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg class="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">
          Unable to load articles
        </h3>
        <p class="text-gray-600">
          Check out my blog at <a href="https://blog.wahyuputra.biz.id" class="text-maroon-600 hover:underline" target="_blank" rel="noopener noreferrer">blog.wahyuputra.biz.id</a>
        </p>
      </div>

      <!-- View all link -->
      <div v-if="articles.length > 0" class="text-center mt-12 opacity-0 translate-y-8 animate-fade-in-up" style="animation-delay: 600ms">
        <a
          href="https://blog.wahyuputra.biz.id"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-6 py-3 border border-maroon-300 text-base font-medium rounded-lg text-maroon-700 bg-white hover:bg-maroon-600 hover:text-white hover:border-maroon-600 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
        >
          <!-- Animated background sweep -->
          <span class="absolute inset-0 bg-gradient-to-r from-maroon-500 to-maroon-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          
          <span class="relative z-10 transition-all duration-300 group-hover:scale-105">View All Articles</span>
          <span class="ml-2 transition-all duration-300 group-hover:translate-x-2 group-hover:rotate-45 group-hover:scale-125 relative z-10">↗</span>
          
          <!-- Ripple effect -->
          <span class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 group-hover:animate-ping bg-maroon-300"></span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { getBlogPosts, type Article } from '@/composables/useBlog'

const articles = ref<Article[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const fetchBlogPosts = async () => {
  loading.value = true
  try {
    const { articles: fetchedArticles, error: fetchError } = await getBlogPosts()
    console.log('fetchBlogPosts - Articles received:', fetchedArticles.length)
    console.log('fetchBlogPosts - Error:', fetchError)
    articles.value = fetchedArticles
    error.value = fetchError
    console.log('fetchBlogPosts - articles.value after assignment:', articles.value.length)
  } catch (err) {
    console.error('Error fetching blog posts:', err)
    error.value = 'Failed to load articles'
  } finally {
    loading.value = false
    console.log('fetchBlogPosts - Final state:', { 
      loading: loading.value, 
      error: error.value, 
      articlesCount: articles.value.length 
    })
  }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  fetchBlogPosts()
  
  // Set up intersection observer for scroll animations
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '50px'
    }
  )

  // Start observing after a short delay to ensure DOM is ready
  setTimeout(() => {
    const animatedElements = document.querySelectorAll('.animate-fade-in-up')
    animatedElements.forEach((el) => observer?.observe(el))
  }, 100)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

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

/* Scroll triggered animation */
.animate-fade-in-up.animate-in {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Loading skeleton animation enhancement */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* Enhanced hover animations */
.group:hover .transition-transform {
  transform: translateX(4px);
}

/* Staggered animation for articles */
.grid article:nth-child(1) { animation-delay: 0ms; }
.grid article:nth-child(2) { animation-delay: 150ms; }
.grid article:nth-child(3) { animation-delay: 300ms; }
.grid article:nth-child(4) { animation-delay: 450ms; }
</style>
