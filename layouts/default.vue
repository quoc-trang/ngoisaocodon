<template>
  <div>
    <TheNavbar />
    <div class="flex justify-center">
      <div class="w-full max-w-4xl mx-4">
        <main>
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'quoc-trang',
})
</script>
