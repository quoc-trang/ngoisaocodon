<template>
  <div class="flex justify-center">
    <div class="w-full max-w-4xl mx-4 sm:mx-0">
      <header>
        <Header />
      </header>

      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "quoc-trang",
});
</script>
