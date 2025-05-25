<template>
  <button
    class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    aria-label="Toggle dark mode"
    @click="toggleDarkMode"
  >
    <Icon
      :name="isDark ? 'ph:sun-bold' : 'ph:moon-bold'"
      class="w-6 h-6 text-gray-800 dark:text-gray-200"
    />
  </button>
</template>

<script setup lang="ts">
const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}
</script>
