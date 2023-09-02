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
          <NuxtLink
            :to="`?${item.link}`"
            class="bg-slate-100/[0.7] p-[7px] md:p-[8px] rounded-xl flex flex-col gap-2 items-center h-[110px] w-[120px] aspect-square text-slate-600/[0.7] hover:bg-blue-600 hover:text-white transition-all duration-100 ease-in"
          >
            <i :class="`${item.icon} text-[24px] md:text-[30px]`"></i>
            <p v-text="item.title" class="text-[15px]" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
  <section class="mt-5 border-b border-slate-200 pb-5">
    <h4 class="text-slate-500 text-[17px]">Today headlines</h4>
    <div
      class="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-11 mt-4"
    >
      <head-line-card news="" v-for="n in [...new Array(8)]" :key="n" />
    </div>
  </section>
  <section class="mt-5 pb-5">
    <h4 class="text-slate-500 text-[17px]">Latest news</h4>
    <div
      class="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-11 mt-4"
    >
      <news-card news="" v-for="n in [...new Array(8)]" :key="n" />
    </div>
  </section>
</template>
  
  <script setup lang="ts">
import { ref } from "vue";
import newsCategories from "~/utils";

const length = ref<number>(7);

const categories = computed(() => {
  return newsCategories.slice(0, length.value);
});
</script>
  