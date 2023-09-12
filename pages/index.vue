<template>
  <section class="mt-5 pb-5">
    <!-- <div class="text-slate-500 text-[17px] flex justify-between items-center">
      <div class="flex gap-5 items-center">
        <button
          class="hover:text-blue-600 transition-all duration-100 disabled:opacity-40"
          role="button"
          :disabled="latestNewsPage <= 0"
          @click="latestNewsPage--"
        >
          <i class="bi bi-arrow-left" />
        </button>
        <small>Page: {{ latestNewsPage }}/{{ totalLatestNews }}</small>
        <button
          type="button"
          class="hover:text-blue-600 transition-all duration-100 disabled:opacity-40"
          @click="latestNewsPage++"
          :disabled="latestNewsPage >= totalLatestNews"
        >
          <i class="bi bi-arrow-right" />
        </button>
      </div>
    </div> -->
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
        // tag: category.value,
        page: headLinePage.value.toString(),
        per_page: 6,
        // apikey: "pub_288645e192f85eb5f95b49fa7d6ae862e79cb",
      },
    }),
  {
    server: false,
    lazy: true,
    watch: [headLinePage, category],
  }
);
</script>
  