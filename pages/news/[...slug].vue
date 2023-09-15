<template>
  <section class="pb-10">
    <div class="flex flex-wrap gap-x-5">
      <div class="left-details">
        <h4
          v-text="article?.title"
          class="text-black text-[24px] line-clamp-2"
        />
        <div class="flex flex-wrap items-center justify-between my-3">
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
              <p class="text-black text-[15px]">{{ article?.user?.name }}</p>
              <span class="text-slate-500 text-[14px]">{{
                $timeFormat(article?.published_at || "")
              }}</span>
            </div>
          </div>
          <div class="flex items-center gap-x-2">
            <span
              role="button"
              class="text-blue-600 h-[30px] w-[30px] rounded-full flex justify-center items-center text-[14px] bg-blue-50 hover:bg-blue-600 hover:text-white"
            >
              <i class="bi bi-facebook"></i>
            </span>
            <span
              role="button"
              class="text-blue-600 h-[30px] w-[30px] rounded-full flex justify-center items-center text-[14px] bg-blue-50 hover:bg-blue-600 hover:text-white"
            >
              <i class="bi bi-twitter"></i>
            </span>
            <span
              role="button"
              class="text-blue-600 h-[30px] w-[30px] rounded-full flex justify-center items-center text-[14px] bg-blue-50 hover:bg-blue-600 hover:text-white"
            >
              <i class="bi bi-share-fill"></i>
            </span>
          </div>
        </div>
        <div class="my-5 rounded-md overflow-hidden">
          <img :src="article?.cover_image || ''" alt="article cover" />
        </div>
        <div>
          <p v-html="$md(article?.body_markdown || '')" />
        </div>
      </div>
      <div></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArticleDetailsReturnType } from "~/types";

const route = useRoute();
const articleId = route.params.slug;
console.log({ route });
const {
  data: article,
  pending,
  error,
} = await useAsyncData(
  "article-details",
  (): Promise<ArticleDetailsReturnType> =>
    $fetch(`https://dev.to/api/articles/${articleId}`),
  { lazy: true }
);
</script>

<style>
</style>