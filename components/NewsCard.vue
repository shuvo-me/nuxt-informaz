<template>
  <nuxt-link :to="`/news/${article.id}/${article.user.username}`" class="">
    <div class="rounded-md relative max-h-[233px] overflow-hidden group">
      <img
        @error="handleImageError"
        :src="article.cover_image"
        alt="news-img"
        class="h-full w-full group-hover:scale-150 transition-all duration-100"
        v-if="article.cover_image"
      />
      <img
        src="~/assets/images/Placeholder_view_vector.svg.png"
        alt="news-img"
        class="h-full w-full group-hover:scale-150 transition-all duration-100"
        v-else
      />
      <span
        class="absolute z-10 bottom-2 right-2 bg-white rounded-full text-black text-[12px] px-1 py-1 gap-2 flex items-center"
        role="button"
      >
        Read more
        <small
          class="bg-blue-600 text-white h-[20px] w-[20px] rounded-full flex items-center justify-center text-[14px]"
        >
          <i class="bi bi-chevron-right" />
        </small>
      </span>
    </div>
    <div class="mt-4">
      <span class="line-clamp-3 text-[14px]" v-text="article.title" />
      <p
        v-html="article.description"
        class="my-5 text-slate-800 text-[14px] px-2 border-l-2 border-slate-300"
      />
      <div class="flex items-start mt-3 gap-2">
        <img
          :src="
            article.user.profile_image ||
            '~/assets/images/Placeholder_view_vector.svg.png'
          "
          alt="user-img"
          class="h-[30px] w-[30px] rounded-full object-cover"
        />
        <div class="w-full">
          <p class="text-[12px] text-slate-700" v-text="article.user.name" />
          <span
            class="flex justify-between items-center text-slate-500 text-[12px]"
          >
            <small
              class="text-[11px]"
              v-text="`${article.reading_time_minutes} min read`"
            />
            <small
              v-text="$timeFormat(article.published_at)"
              class="text-[13px]"
            />
          </span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { ArticleDataTypes } from "~/types";
import PlaceHolderImage from "~/assets/images/Placeholder_view_vector.svg.png";

defineProps<{
  article: ArticleDataTypes;
}>();

const handleImageError = (err: any) => {
  err.target.src = PlaceHolderImage;
};
</script>

