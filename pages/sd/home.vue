<template>
  <section class="flex flex-col items-start relative">
    <div class="mt-20 sm:mt-48">
      <h1 class="font-bold inline-block text-3xl animate-slide-up">
        Le Quoc Trang
      </h1>
      <ol class="mt-10 animate-slide-up list-inside list-disc">
        <h1 class="text-lg font-bold">
          I'm a
        </h1>
        <li>
          Vietnam-based web development software engineer with expertise in both
          front-end and back-end.
        </li>
        <li>
          My aspiration is to grow into a full-stack developer, utilizing
          technology to tackle real-world challenges.
        </li>
      </ol>
      <ol class="list-disc animate-slide-up list-inside mt-1">
        <h1 class="text-lg font-bold">
          Throughout my career
        </h1>
        <li>
          I've actively sought opportunities to enhance my development skills
          and mindset.
        </li>
        <li>
          Collaborating with intelligent colleagues across various companies has
          provided me with diverse perspectives and valuable insights.
        </li>
        <li>
          Each interaction has been a learning experience, and I deeply value
          the guidance and advice they've shared.
        </li>
      </ol>

      <ol class="list-disc animate-slide-up list-inside mt-1">
        <h1 class="text-lg font-bold">
          Outside of coding, I enjoy
        </h1>
        <li>Spending time with my family, friends...</li>
        <li>Learning languages.</li>
        <li>Watching movies, listening to music.</li>
      </ol>

      <div class="mt-10 animate-slide-up animation-delay-100">
        <h1 class="mt-2">
          Find me on
        </h1>
        <ul class="flex gap-x-5">
          <li
            v-for="(social, index) in SOCIALS"
            :key="index"
            class="hover-text-primary cursor-pointer"
          >
            <NuxtLink
              :to="social.url"
              target="_blank"
              class="flex justify-center items-center"
            >
              <div>
                <Icon
                  :name="social.icon"
                  size="2em"
                />
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <hr class="w-full my-5">
    <NuxtLink
      to="https://nuxt.com/"
      class="flex hover-text-primary animate-slide-up animation-delay-200"
      target="_blank"
    >
      <span class="mr-2 text-sm translate-y-[2px]">build with</span>
      <img
        src="~/assets/images/nuxtjs.png"
        width="20"
      >
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import { SOCIALS } from '~/constants/data'
</script>
