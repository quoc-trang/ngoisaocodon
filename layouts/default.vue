<template>
  <div>
    <TheNavbar />
    <div class="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <main class="w-full pt-8 pb-12">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'quoc-trang',
})
</script>
