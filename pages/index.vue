<template>
  <section class="flex flex-col items-start relative text-sm">
    <div class="mt-10">
      <h1 class="font-bold inline-block text-3xl animate-slide-up">
        Le Quoc Trang
      </h1>
      <ol class="mt-3 animate-slide-up list-inside list-disc">
        <h1 class="font-bold">
          I'm a
        </h1>
        <li class="pl-3">
          Vietnam-based web development software engineer with expertise in both
          front-end and back-end.
        </li>
        <li class="pl-3">
          My aspiration is to grow into a full-stack developer, utilizing
          technology to tackle real-world challenges.
        </li>
      </ol>
      <ol class="list-disc animate-slide-up list-inside mt-3">
        <h1 class="font-bold">
          Throughout my career
        </h1>
        <li class="pl-3">
          I am always seeking opportunities to enhance my skills
          and mindset.
        </li>
        <li class="pl-3">
          Collaborating with intelligent colleagues across various companies has
          provided me with diverse perspectives and valuable insights.
        </li>
        <li class="pl-3">
          Each interaction has been a learning experience, and I deeply value
          the guidance and advice they've shared.
        </li>
      </ol>

      <ol class="list-disc animate-slide-up list-inside mt-3">
        <h1 class="font-bold">
          Outside of coding, I enjoy
        </h1>
        <li class="pl-3">
          Spending time with my family, friends...
        </li>
        <li class="pl-3">
          Learning languages.
        </li>
        <li class="pl-3">
          Watching movies, listening to music.
        </li>
      </ol>

      <div class="mt-3 animate-slide-up animation-delay-100">
        <h1 class="mt-2">
          Find me on
        </h1>
        <ul class="flex gap-x-1">
          <li
            v-for="(social, index) in SOCIALS"
            :key="index"
            class="cursor-pointer"
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
  </section>
</template>

<script setup lang="ts">
import { SOCIALS } from '~/constants/data'
</script>
