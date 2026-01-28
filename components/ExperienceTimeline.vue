<template>
  <section class="py-10">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white animate-slide-up">
        Professional Experience
      </h2>
      
      <div class="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-6 space-y-12">
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="relative pl-8 md:pl-12 group animate-slide-up"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <!-- Timeline Dot -->
          <div
            class="absolute -left-[9px] md:-left-[9px] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 bg-gray-300 dark:bg-gray-600 group-hover:bg-primary group-hover:scale-125 transition-all duration-300"
          ></div>

          <!-- Date Badge (Mobile: Top, Desktop: Side or Inline) -->
          <span
            class="inline-block py-1 px-3 mb-2 text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 rounded-full"
          >
            {{ experience.period }}
          </span>

          <!-- Content Card -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  {{ experience.title }}
                </h3>
                <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300">
                  {{ experience.company }}
                </h4>
              </div>
            </div>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, tIndex) in experience.techStack"
                :key="tIndex"
                class="px-2.5 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Achievements -->
            <ul class="space-y-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed list-disc list-inside">
              <li
                v-for="(achievement, aIndex) in experience.achievements"
                :key="aIndex"
              >
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Experience {
  title: string
  company: string
  period: string
  achievements: string[]
  techStack: string[]
}

const experiences: Experience[] = [
  {
    title: 'Frontend Developer',
    company: 'Rakuten Fintech Vietnam',
    period: '10-2024 - Present',
    techStack: ['Vue', 'Nuxt', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    achievements: [
      'Implemented new features that increased user engagement by 40%',
      'Reduced application load time by 60% through optimization',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Raksul Vietnam',
    period: '05-2023 - 06-2024',
    techStack: ['Node.js', 'Express', 'MySQL'],
    achievements: [
      'Built scalable RESTful APIs serving 10k+ daily users',
      'Optimized database queries reducing latency by 30%',
      'Integrated third-party payment gateways for secure transactions',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Raksul Vietnam',
    period: '05-2023 - 10-2024',
    techStack: ['Vue', 'Nuxt', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    achievements: [
      'Developed a component library used across 3 internal products',
      'Migrated legacy codebase to Vue 3 composables',
      'Implemented automated testing strategies achieving 80% coverage',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'NFQ Asia',
    period: '05-2022 - 05-2023',
    techStack: ['Vue', 'Nuxt', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    achievements: [
      'Built responsive web interfaces for multiple client projects',
      'Collaborated with UX designers to implement new features',
      'Participated in agile development processes',
    ],
  },
]
</script>

<style scoped>
/* Custom keyframes if not present in global css */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}
</style>
