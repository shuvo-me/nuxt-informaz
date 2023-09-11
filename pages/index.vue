<template>
  <section class="border-b border-slate-200">
    <h4 class="text-slate-500 text-[17px] flex justify-between items-center">
      Top categories
      <small
        class="text-[15px] text-slate-400"
        v-if="length === newsCategories.length"
        @click="length = 7"
        role="button"
      >
        View less
      </small>
      <small
        class="text-[15px] text-slate-400"
        @click="length = newsCategories.length"
        v-else
        role="button"
      >
        View all
      </small>
    </h4>
    <div class="py-4 custom-scrollbar">
      <ul
        class="grid grid-cols-2 min-[360px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-7 md:gap-7 flex-wrap"
      >
        <li v-for="item in categories" :key="item.link">
          <div
            role="button"
            @click="category = item.link"
            :class="`bg-slate-100/[0.7] p-[7px] md:p-[8px] rounded-xl flex flex-col gap-2 items-center h-[110px] w-[120px] aspect-square text-slate-600/[0.7] hover:bg-blue-600 hover:text-white transition-all duration-100 ease-in ${
              category === item.link ? 'active' : ''
            }`"
          >
            <i :class="`${item.icon} text-[24px] md:text-[30px]`"></i>
            <p v-text="item.title" class="text-[15px]" />
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section class="mt-5 border-b border-slate-200 pb-5">
    <div class="text-slate-500 text-[17px] flex justify-between items-center">
      <h4>Top Articles</h4>
      <div class="flex gap-5 items-center">
        <button
          class="hover:text-blue-600 transition-all duration-100 disabled:opacity-40"
          role="button"
          :disabled="headLinePage <= 0"
          @click="headLinePage--"
        >
          <i class="bi bi-arrow-left" />
        </button>
        <small>Page: {{ headLinePage }}/ 5</small>
        <button
          type="button"
          class="hover:text-blue-600 transition-all duration-100 disabled:opacity-40"
          @click="headLinePage++"
          :disabled="headLinePage >= 5"
        >
          <i class="bi bi-arrow-right" />
        </button>
      </div>
    </div>

    <div
      v-if="isLoadingHeadLines"
      :class="`grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-11 mt-4 relative `"
    >
      <top-head-line-skeleton-loader v-for="n in [...new Array(8)]" :key="n" />
    </div>

    <div
      :class="`grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-11 mt-4 relative `"
      v-else
    >
      <head-line-card
        :head-line="headLine"
        v-for="headLine in headLines"
        :key="headLine"
      />
    </div>
  </section>
  <section class="mt-5 pb-5">
    <div class="text-slate-500 text-[17px] flex justify-between items-center">
      <h4>Latest News.</h4>
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
    </div>
    <div
      class="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-11 mt-4"
      v-if="isLoadingLatestNews"
    >
      <news-card-skeleton-loading v-for="n in [...new Array(8)]" :key="n" />
    </div>
    <div
      class="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-11 mt-4"
      v-else
    >
      <news-card
        :latest-news="latestNews"
        v-for="latestNews in latesNews"
        :key="latestNews.title"
      />
    </div>
  </section>
</template>
  
  <script setup lang="ts" async>
import { ref } from "vue";
import { ArticleDataTypes } from "~/types";
import newsCategories from "~/utils";

const runtimeConfig = useRuntimeConfig();
console.log({ cc: runtimeConfig.public });

const length = ref<number>(7);
const headLinePage = ref<number>(1);
const latestNewsPage = ref<number>(0);
const totalHeadlines = ref<number>(0);
const totalLatestNews = ref<number>(0);
const category = ref<string>("world-news");

watch(category, (newCategory) => {
  console.log({ newCategory });
});

const categories = computed(() => {
  return newsCategories.slice(0, length.value);
});

const totalHeadlinePages = computed(() => {
  return Math.ceil(totalHeadlines.value / 8);
});

const {
  data: headLines,
  pending: isLoadingHeadLines,
  error,
  refresh,
} = await useAsyncData(
  "headlines",
  () =>
    $fetch(`https://dev.to/api/articles?top=4`, {
      query: {
        // tag: category.value,
        page: headLinePage.value.toString(),
        per_page: 8,
        // apikey: "pub_288645e192f85eb5f95b49fa7d6ae862e79cb",
      },
    }),
  {
    server: false,
    lazy: true,
    watch: [headLinePage, category],
  }
);

console.log({ headLines });

const { data: latesNews, pending: isLoadingLatestNews } = await useAsyncData(
  "latest-news",
  () =>
    $fetch(`http://api.mediastack.com/v1/news`, {
      query: {
        keywords: category.value,
        offset: latestNewsPage.value,
        limit: 8,
        access_key: runtimeConfig.public.API_KEY,
      },
    }),
  {
    transform: (latestNews: any) => {
      totalLatestNews.value = latestNews.pagination.total;
      return latestNews.data.filter((item: ArticleDataTypes) => item);
    },
    server: false,
    lazy: true,
    watch: [latestNewsPage, category],
  }
);
</script>
  