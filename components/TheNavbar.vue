<template>
  <nav class="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-sm z-50">
    <div class="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex space-x-4 items-center">
          <NuxtLink
            to="/"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
            active-class="border-b-2 border-primary text-primary dark:text-primary"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/experience"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
            active-class="border-b-2 border-primary text-primary dark:text-primary"
          >
            Experience
          </NuxtLink>
          <NuxtLink
            to="/projects"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
            active-class="border-b-2 border-primary text-primary dark:text-primary"
          >
            Projects
          </NuxtLink>
          <NuxtLink
            to="/certifications"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
            active-class="border-b-2 border-primary text-primary dark:text-primary"
          >
            Certifications
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <IconDarkModeToggle />
        </div>
      </div>
    </div>
  </nav>
  <!-- Add padding to account for fixed navbar -->
  <div class="h-16" />
</template>
