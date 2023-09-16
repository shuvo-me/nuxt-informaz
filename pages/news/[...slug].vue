<template>
  <section class="pb-10">
    <article-details-skeleton-loader v-if="pending" />

    <div class="flex gap-x-[70px] flex-wrap xl:flex-nowrap" v-else>
      <div class="left-details max-w-[800px]">
        <h4
          v-text="article?.title"
          class="text-black text-[24px] line-clamp-2 font-semibold"
        />
        <div class="flex flex-wrap items-center my-3 gap-x-10">
          <div class="flex flex-wrap gap-x-2">
            <div
              class="border border-blue-400 h-[50px] w-[50px] rounded-full overflow-hidden"
            >
              <img
                :src="article?.user?.profile_image"
                alt="user img"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <p class="text-black text-[16px] font-medium">
                {{ article?.user?.name }}
              </p>
              <div class="flex items-center gap-x-3 mt-1 flex-wrap">
                <span class="text-slate-500 text-[14px]">
                  <i class="bi bi-calendar" />
                  {{ $timeFormat(article?.published_at || "") }}</span
                >
                <span
                  class="text-slate-500 text-[14px] inline-flex items-center gap-x-1"
                  role="button"
                >
                  <i class="bi bi-hand-thumbs-up" />
                  {{ article?.public_reactions_count }}
                  reactions
                </span>
                <span
                  class="text-slate-500 text-[14px] inline-flex items-center gap-x-1"
                  role="button"
                >
                  <i class="bi bi-clock" />

                  {{ article?.reading_time_minutes }}
                  minutes read
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="my-5 rounded-md overflow-hidden"
          v-if="article?.cover_image"
        >
          <img :src="article?.cover_image || ''" alt="article cover" />
        </div>
        <div v-html="article?.body_html" />
      </div>
      <div class="right-section flex-1 mt-10">
        <div class="social-networks">
          <h4 class="text-[16px] font-semibold">Share on:</h4>
          <div class="mt-4 grid grid-cols-2 gap-6">
            <div class="flex items-center gap-x-2" role="button">
              <span
                class="bg-rose-600 text-white h-[30px] w-[30px] rounded-md flex items-center justify-center"
                ><i class="bi bi-instagram"
              /></span>
              <p>Instagram</p>
            </div>
            <div class="flex items-center gap-x-2" role="button">
              <span
                class="bg-blue-600 text-white h-[30px] w-[30px] rounded-md flex items-center justify-center"
                ><i class="bi bi-facebook" />
              </span>
              <p>Facebook</p>
            </div>
            <div class="flex items-center gap-x-2" role="button">
              <span
                class="bg-blue-500 text-white h-[30px] w-[30px] rounded-md flex items-center justify-center"
                ><i class="bi bi-linkedin" />
              </span>
              <p>Linkedin</p>
            </div>
            <div class="flex items-center gap-x-2" role="button">
              <span
                class="bg-[#1DA1F2] text-white h-[30px] w-[30px] rounded-md flex items-center justify-center"
                ><i class="bi bi-twitter" />
              </span>
              <p>Twitter</p>
            </div>
          </div>
        </div>
        <div class="tags mt-6 space-y-3" v-if="article?.tags?.length">
          <h4 class="text-[16px] font-semibold">Related Tags:</h4>
          <div class="flex flex-wrap gap-3">
            <span
              role="button"
              v-for="tag in article?.tags"
              :key="tag"
              v-text="`#${tag}`"
              class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
            />
          </div>
        </div>
        <div class="space-y-3 mt-8">
          <h4 class="text-[16px] font-semibold flex items-center gap-x-4">
            Writer's more articles:
          </h4>
          <div v-if="!writerArticles?.length">
            <img src="~/assets/images/not-found.png" />
            <p>No item found</p>
          </div>
          <div class="grid grid-cols-1 gap-y-5" v-else>
            <div
              v-for="item in writerArticles"
              :key="item.id"
              class="flex items-start gap-x-3"
            >
              <img
                :src="item.cover_image"
                :alt="item.slug"
                class="h-full object-cover w-[100px] rounded-md"
              />
              <div>
                <p
                  v-text="item.title"
                  class="text-[14px] text-black/[0.9] line-clamp-2 font-semibold"
                />
                <small class="text-gray-500 text-[13px]">
                  <i class="bi bi-clock"></i>
                  {{ $timeFormat(item.published_at) }}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArticleDataTypes, ArticleDetailsReturnType } from "~/types";

const route = useRoute();
const articleId = route.params.slug[0];
const userName = route.params.slug[1];
const page = ref<number>(1);
const {
  data: article,
  pending,
  error,
} = await useAsyncData(
  "article-details",
  (): Promise<ArticleDetailsReturnType> =>
    $fetch(`https://dev.to/api/articles/${articleId}`),
  { lazy: true, server: false }
);

console.log({ article });

const { data: writerArticles } = await useAsyncData(
  "writer-articles",
  (): Promise<Array<ArticleDataTypes>> =>
    $fetch(
      `
https://dev.to/api/articles?username=${userName}`,
      {
        query: {
          page: page.value,
          per_page: 4,
        },
      }
    ),
  {
    lazy: true,
    server: false,
    watch: [page],
  }
);
// console.log({ cc: toRaw(writerArticles) });
</script>

<style></style>