<script setup lang="js">
import { ref } from "vue";
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";

let showBing = ref(false)
fetch("https://bing-wallpaper.vuejs.press/api/wallpaper").then(
  () => { showBing.value = true }
).catch(err=>{
  console.log(err);
});

</script>

<template>
  <BlogHero>
    <template #heroInfo="{ tagline, isFullScreen, ...heroInfo }">
      <HitokotoBlogHero v-bind="heroInfo" />
    </template>
    <template #heroBg v-if="showBing">
      <BingHeroBackground />
    </template>
  </BlogHero>
</template>