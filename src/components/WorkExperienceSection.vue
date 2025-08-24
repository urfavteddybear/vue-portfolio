<template>
  <section id="experience" class="py-24 bg-white relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-[0.02] -z-10">
      <div class="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-maroon-400 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-1/3 left-1/4 w-[200px] h-[200px] bg-maroon-300 rounded-full blur-3xl animate-float-reverse"></div>
    </div>
    
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16 opacity-0 translate-y-8 animate-fade-in-up">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 hover:scale-105 hover:text-maroon-600 transition-all duration-500 cursor-default group">
          Work Experience
          <!-- Animated underline -->
          <span class="block w-0 h-1 bg-gradient-to-r from-maroon-500 to-maroon-700 mx-auto mt-2 group-hover:w-40 transition-all duration-500"></span>
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-gray-600 hover:text-gray-700 transition-colors duration-300">
          My professional journey from content creation to web development
        </p>
      </div>

      <!-- Experience timeline -->
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-maroon-200 timeline-line"></div>

        <div class="space-y-12">
          <div
            v-for="(experience, index) in experiences"
            :key="experience.id"
            class="relative flex items-start group opacity-0 translate-y-8 animate-fade-in-up"
            :style="{ animationDelay: `${(index + 1) * 300}ms` }"
          >
            <!-- Timeline dot -->
            <div class="absolute left-6 w-4 h-4 bg-maroon-600 rounded-full border-4 border-white shadow-md transition-all duration-500 group-hover:scale-150 group-hover:bg-maroon-500 group-hover:shadow-lg timeline-dot z-10"></div>
            
            <!-- Connecting line animation -->
            <div class="absolute left-7 w-0.5 h-12 bg-gradient-to-b from-maroon-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 -bottom-12"></div>
            
            <!-- Content -->
            <div class="ml-20 bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 w-full relative overflow-hidden group/card cursor-pointer">
              <!-- Hover overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-br from-maroon-500/0 to-maroon-600/0 group-hover/card:from-maroon-500/5 group-hover/card:to-maroon-600/10 transition-all duration-500 rounded-xl"></div>
              
              <!-- Animated border on hover -->
              <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover/card:border-maroon-200 transition-all duration-300"></div>
              
              <!-- Shimmer effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-maroon-300/10 to-transparent opacity-0 group-hover/card:opacity-100 -translate-x-full group-hover/card:translate-x-full transition-all duration-1000"></div>
              
              <div class="relative z-10">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div class="group-hover/card:translate-x-2 transition-all duration-300">
                    <h3 class="text-xl font-bold text-gray-900 group-hover/card:text-maroon-600 transition-all duration-300 group-hover/card:scale-105">
                      {{ experience.position }}
                    </h3>
                    <p class="text-maroon-600 font-medium group-hover/card:text-maroon-500 transition-colors duration-300">
                      {{ experience.company }}
                    </p>
                  </div>
                  <div class="mt-2 md:mt-0 flex flex-wrap gap-2">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-maroon-100 text-maroon-700 group-hover/card:bg-maroon-200 group-hover/card:scale-110 group-hover/card:rotate-2 transition-all duration-300">
                      {{ experience.duration }}
                    </span>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 group-hover/card:bg-gray-200 group-hover/card:scale-110 group-hover/card:-rotate-1 transition-all duration-300">
                      {{ experience.location }}
                    </span>
                  </div>
                </div>
                
                <p class="text-gray-600 mb-4 leading-relaxed group-hover/card:text-gray-700 group-hover/card:translate-x-1 transition-all duration-300">
                  {{ experience.description }}
                </p>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(tech, techIndex) in experience.technologies"
                    :key="tech"
                    class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-maroon-100 hover:text-maroon-700 hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-default"
                    :style="{ transitionDelay: `${techIndex * 50}ms` }"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <!-- Floating particles -->
              <div class="absolute top-4 right-4 w-2 h-2 bg-maroon-400 rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-ping transition-all duration-500"></div>
              <div class="absolute bottom-4 left-4 w-1 h-1 bg-maroon-500 rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-bounce transition-all duration-700" style="animation-delay: 200ms;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = [
  {
    id: 1,
    company: "PT Bangun Inovasi Teknologi",
    position: "Content Creator Internship",
    duration: "2022 (6 months)",
    location: "Work From Home",
    description: "Collaborated with the marketing team to create engaging visual content for social media platforms. Focused on developing Instagram content that aligned with the company's brand identity and marketing objectives.",
    achievements: [
      "Created compelling Instagram content that increased engagement",
      "Developed visual content strategy for social media campaigns",
      "Collaborated effectively with team members in remote work environment",
      "Maintained consistent brand identity across all content"
    ],
    technologies: ["Adobe Illustrator", "Canva", "Instagram"]
  },
  {
    id: 2,
    company: "EduKoding",
    position: "Learning Module Developer Internship",
    duration: "2022 (6 months)",
    location: "Work From Home",
    description: "Developed educational content and learning modules for students at EduKoding. Created interactive learning materials and visual designs to enhance the educational experience for programming students.",
    achievements: [
      "Designed and developed comprehensive learning modules for students",
      "Created interactive educational content using visual programming tools",
      "Collaborated with educational team to improve learning outcomes",
      "Delivered high-quality educational materials within project timelines"
    ],
    technologies: ["Adobe Illustrator", "Scratch Desktop"]
  },
  {
    id: 3,
    company: "INSTIKI Developer Club",
    position: "Backend Beginner Mentor",
    duration: "2024 - 2025",
    location: "INSTIKI",
    description: "Mentored students in backend development fundamentals through campus extracurricular activities. Taught API development, database design, and server-side programming concepts to help students build strong foundation in backend technologies.",
    achievements: [
      "Mentored beginner students in backend development concepts and practices",
      "Designed and delivered comprehensive curriculum for API development",
      "Taught database design principles and MySQL implementation",
      "Guided students through hands-on projects and real-world applications"
    ],
    technologies: ["PHP", "MySQL", "API"]
  },
  {
    id: 4,
    company: "PT Invilove Digital",
    position: "Wedding Invitation Maker",
    duration: "2024 - Present",
    location: "Work From Home",
    description: "Creating beautiful and personalized wedding invitations for clients using WordPress platform. Combining web development skills with creative design to deliver unique digital invitation experiences that capture couples' special moments.",
    achievements: [
      "Designed and developed custom wedding invitations using WordPress",
      "Enhanced invitation designs with professional photo editing techniques",
      "Delivered personalized invitation solutions for diverse client requirements",
      "Maintained high client satisfaction through creative and timely delivery"
    ],
    technologies: ["WordPress", "Adobe Photoshop", "Elementor"]
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
    transform: translateY(-25px) rotate(2deg);
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
  animation: float-slow 7s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 9s ease-in-out infinite;
  animation-delay: 2s;
}

/* Timeline line animation */
.timeline-line {
  background: linear-gradient(to bottom, #9b2c2c, #e5e7eb);
  animation: timeline-grow 2s ease-out forwards;
  transform-origin: top;
}

@keyframes timeline-grow {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

/* Timeline dot pulse animation */
.timeline-dot {
  animation: dot-pulse 2s ease-in-out infinite;
}

@keyframes dot-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(155, 44, 44, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(155, 44, 44, 0);
  }
}

/* Hover glow effect for cards */
.group\/card:hover {
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 30px rgba(155, 44, 44, 0.15);
}

/* Staggered animation delays */
.space-y-12 > div:nth-child(1) { animation-delay: 300ms; }
.space-y-12 > div:nth-child(2) { animation-delay: 600ms; }
.space-y-12 > div:nth-child(3) { animation-delay: 900ms; }
.space-y-12 > div:nth-child(4) { animation-delay: 1200ms; }
</style>
