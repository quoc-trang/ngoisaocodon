<template>
  <section class="flex flex-col items-start relative text-base dark:text-white">
    <div>
      <h1 class="font-bold inline-block text-3xl animate-slide-up">
        Le Quoc Trang
      </h1>
      <ol class="mt-3 animate-slide-up list-inside list-disc">
        <h1 class="font-bold">
          About Me
        </h1>
        <li class="pl-3">
          A frontend developer based in Vietnam, currently expanding my expertise into backend development through hands-on experience at work.
        </li>
        <li class="pl-3">
          Aspiring to become a full-stack developer who creates impactful solutions to real-world problems.
        </li>
      </ol>
      <ol class="list-disc animate-slide-up list-inside mt-3">
        <h1 class="font-bold">
          Professional Journey
        </h1>
        <li class="pl-3">
          Continuously expanding my technical expertise and professional mindset.
        </li>
        <li class="pl-3">
          Working alongside talented professionals has enriched my perspective and enhanced my problem-solving abilities.
        </li>
        <li class="pl-3">
          Every collaboration has been a valuable learning experience, and I'm grateful for the mentorship and insights shared.
        </li>
      </ol>

      <ol class="list-disc animate-slide-up list-inside mt-3">
        <h1 class="font-bold">
          Beyond Coding
        </h1>
        <li class="pl-3">
          Cherishing quality time with family and friends.
        </li>
        <li class="pl-3">
          Exploring new languages and cultures.
        </li>
        <li class="pl-3">
          Enjoying movies and music in my free time.
        </li>
      </ol>

      <div class="mt-3 animate-slide-up animation-delay-100">
        <h1 class="mt-2">
          Connect With Me
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
                  class="text-gray-800 dark:text-gray-200"
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
