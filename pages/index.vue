<template>
  <section class="mt-5 pb-5">
    <div
      class="grid grid-cols-1 min-[500px]:grid-cols-2 gap-10 md:gap-11 mt-4"
      v-if="pending"
    >
      <news-card-skeleton-loading v-for="n in [...new Array(8)]" :key="n" />
    </div>
    <div
      class="grid grid-cols-1 min-[500px]:grid-cols-2 gap-10 md:gap-11 mt-4"
      v-else
    >
      <news-card
        :article="article"
        v-for="article in articles"
        :key="article"
      />
    </div>
  </section>
</template>
  
  <script setup lang="ts" async>
import { ref } from "vue";

// const runtimeConfig = useRuntimeConfig();

const length = ref<number>(7);
const headLinePage = ref<number>(1);
const category = ref<string>("world-news");

const {
  data: articles,
  pending,
  error,
  refresh,
} = await useAsyncData(
  "headlines",
  () =>
    $fetch(`https://dev.to/api/articles?top=4`, {
      query: {
        page: headLinePage.value.toString(),
        per_page: 6,
      },
    }),
  {
    server: false,
    lazy: true,
    watch: [headLinePage, category],
  }
);
</script>
  