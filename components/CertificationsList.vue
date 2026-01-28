<template>
  <section class="py-10">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white animate-slide-up animation-delay-200">
        Certifications
      </h2>
      <div class="grid gap-6 md:grid-cols-2 animate-slide-up animation-delay-200">
        <a
          v-for="(cert, index) in CERTIFICATIONS"
          :key="index"
          :href="cert.url"
          target="_blank"
          class="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
        >
          <div class="flex-shrink-0 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Icon :name="cert.logo || 'heroicons:academic-cap'" size="2em" class="text-gray-700 dark:text-gray-200" />
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1" :title="cert.name">
              {{ cert.name }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ cert.organization }} • {{ cert.date }}
            </p>
          </div>
          <div class="ml-auto text-gray-400">
            <Icon name="heroicons:arrow-top-right-on-square" size="1.2em" />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CERTIFICATIONS } from '~/constants/data'
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 200ms;
}
</style>
