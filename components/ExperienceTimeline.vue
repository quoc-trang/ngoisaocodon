<template>
  <section class="py-16 bg-white dark:bg-secondary">
    <div class="container mx-auto px-4 max-w-[1800px]">
      <h2 class="text-3xl font-bold text-center mb-12 text-secondary dark:text-white">
        Professional Experience
      </h2>
      <div class="relative flex justify-center">
        <!-- Timeline line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

        <!-- Timeline items -->
        <div class="space-y-24 w-full">
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            class="relative flex flex-col md:flex-row items-center justify-between"
          >
            <!-- Content section -->
            <div
              :class="[
                'w-full md:w-[70%]',
                'flex flex-col items-center',
                index % 2 === 0 ? 'md:text-right md:pr-24' : 'md:text-left md:pl-24 md:order-2',
              ]"
            >
              <div
                class="bg-white dark:bg-secondary/50 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 w-full max-w-4xl mx-auto cursor-pointer transition-transform duration-200 hover:scale-105"
                @click="openQuickLook(experience)"
              >
                <h3 class="text-2xl font-semibold text-secondary dark:text-white">
                  {{ experience.title }}
                </h3>
                <p class="text-lg text-gray-600 dark:text-gray-300 mt-2">
                  {{ experience.company }}
                </p>
                <p class="text-base text-gray-500 dark:text-gray-400 mt-1">
                  {{ experience.period }}
                </p>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span
                    v-for="(tech, tIndex) in experience.techStack"
                    :key="tIndex"
                    class="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
                <div class="mt-6">
                  <h4 class="text-xl font-medium text-secondary dark:text-white">
                    Key Achievements
                  </h4>
                  <ul class="mt-3 space-y-3">
                    <li
                      v-for="(achievement, aIndex) in experience.achievements"
                      :key="aIndex"
                      class="text-base text-gray-700 dark:text-gray-300"
                    >
                      • {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Center dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-secondary z-10" />

            <!-- Empty space for alternating layout -->
            <div
              class="w-full md:w-[49.5%]"
              :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Look Modal -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="selectedExperience"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        @click="closeQuickLook"
      >
        <div
          class="bg-white dark:bg-secondary/90 p-8 rounded-xl shadow-2xl max-w-2xl w-full mx-4 transform transition-all duration-300"
          @click.stop
        >
          <div class="flex justify-between items-start mb-6">
            <div>
              <h3 class="text-2xl font-semibold text-secondary dark:text-white">
                {{ selectedExperience.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ selectedExperience.company }}
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ selectedExperience.period }}
              </p>
            </div>
            <button
              class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              @click="closeQuickLook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-medium text-secondary dark:text-white mb-3">
                Key Achievements
              </h4>
              <ul class="space-y-3">
                <li
                  v-for="(achievement, index) in selectedExperience.achievements"
                  :key="index"
                  class="text-gray-700 dark:text-gray-300"
                >
                  • {{ achievement }}
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-medium text-secondary dark:text-white mb-3">
                Tech Stack
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, index) in selectedExperience.techStack"
                  :key="index"
                  class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
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
      'Implemented new features that increased user engagement by 40%',
      'Reduced application load time by 60% through optimization',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Raksul Vietnam',
    period: '05-2023 - 10-2024',
    techStack: ['Vue', 'Nuxt', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    achievements: [
      'Implemented new features that increased user engagement by 40%',
      'Reduced application load time by 60% through optimization',
      'Mentored junior developers and conducted code reviews',
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

const selectedExperience = ref<Experience | null>(null)

const openQuickLook = (experience: Experience) => {
  selectedExperience.value = experience
  document.body.style.overflow = 'hidden'
}

const closeQuickLook = () => {
  selectedExperience.value = null
  document.body.style.overflow = ''
}

// Add escape key handler
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && selectedExperience.value) {
      closeQuickLook()
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('keydown', (e) => {
    if (e.key === 'Escape' && selectedExperience.value) {
      closeQuickLook()
    }
  })
})
</script>

<style scoped>
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  [class*="w-[49.5%]"] {
    width: 100%;
    text-align: left !important;
    padding-left: 2rem !important;
    padding-right: 0 !important;
  }
  [class*="left-1/2"], [class*="left-1\/2"] {
    left: 0;
  }
}
</style>
