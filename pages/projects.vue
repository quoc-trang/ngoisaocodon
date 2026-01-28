<template>
  <section class="max-w-4xl mx-auto py-10 px-4 text-gray-900 dark:text-white">
    <!-- Header -->
    <div class="mb-12 animate-slide-up">
      <h1 class="text-3xl font-bold mb-4">Projects</h1>
      <p class="text-gray-600 dark:text-gray-400">
        A collection of my full-stack applications and frontend experiments.
      </p>
    </div>

    <!-- Fullstack Projects Section -->
    <div class="mb-16 animate-slide-up animation-delay-100">
      <h2 class="text-xl font-semibold mb-6 flex items-center gap-2">
        <Icon name="heroicons:server-stack" class="text-primary" />
        Fullstack Applications
      </h2>
      <div class="space-y-8">
        <div
          v-for="(project, index) in FULLSTACK_PROJECTS"
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-all duration-300"
        >
          <div class="p-6 md:p-8">
            <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <h3 class="text-2xl font-bold mb-2">{{ project.name }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {{ project.description }}
                </p>
              </div>
              <div class="flex gap-2 flex-shrink-0">
                <a
                  v-if="project.github_fe"
                  :href="project.github_fe"
                  target="_blank"
                  class="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  title="Frontend Repo"
                >
                  <Icon name="mdi:github" size="1.5em" />
                </a>
                <a
                  v-if="project.github_be"
                  :href="project.github_be"
                  target="_blank"
                  class="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  title="Backend Repo"
                >
                  <Icon name="mdi:database" size="1.5em" />
                </a>
                <a
                  :href="project.url"
                  target="_blank"
                  class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  Live Demo <Icon name="heroicons:arrow-top-right-on-square" />
                </a>
              </div>
            </div>

            <!-- Tech Stack -->
            <div class="mb-6">
              <h4 class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Tech Stack</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Key Features -->
            <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-5">
              <h4 class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Key Features</h4>
              <ul class="grid md:grid-cols-2 gap-3">
                <li
                  v-for="(feature, fIndex) in project.features"
                  :key="fIndex"
                  class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <Icon name="heroicons:check-circle" class="flex-shrink-0 text-green-500 mt-0.5" />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- UI/Landing Pages Section -->
    <div class="animate-slide-up animation-delay-200">
      <h2 class="text-xl font-semibold mb-6 flex items-center gap-2">
        <Icon name="heroicons:paint-brush" class="text-primary" />
        UI & Landing Pages
      </h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="(project, index) in LANDING_PAGES"
          :key="index"
          :href="project.url"
          target="_blank"
          class="group block p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-primary dark:hover:border-primary hover:shadow-lg transition-all duration-300"
        >
          <div class="flex justify-between items-start mb-3">
            <div class="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              <Icon name="heroicons:window" size="1.2em" />
            </div>
            <Icon name="heroicons:arrow-right" class="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 text-primary" />
          </div>
          <h5 class="text-lg font-bold text-gray-900 dark:text-white capitalize group-hover:text-primary transition-colors">
            {{ project.name }}
          </h5>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Click to view live preview
          </p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FULLSTACK_PROJECTS, LANDING_PAGES } from '~/constants/data'
</script>

<style scoped>
.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
</style>
