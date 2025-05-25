<template>
  <div class="bg-white dark:bg-secondary">
    <div class="fixed top-4 right-4">
      <IconDarkModeToggle />
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  }
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: white;
}

html.dark, html.dark body {
  background-color: #020420;
}
</style>
