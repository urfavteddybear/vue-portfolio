<template>
  <div class="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
    <!-- Animated background pattern -->
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-maroon-500/5 via-transparent to-maroon-700/5 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-maroon-700/5 via-transparent to-maroon-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-maroon-400/10 to-maroon-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-maroon-600/10 to-maroon-400/10 rounded-full blur-2xl animate-pulse delay-700"></div>
    </div>

    <Navbar />
    <main class="relative z-10">
      <HeroSection />
      <ProjectsSection />
      <WorkExperienceSection />
      <WritingsSection />
      <ContactSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import WorkExperienceSection from '@/components/WorkExperienceSection.vue'
import WritingsSection from '@/components/WritingsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>
