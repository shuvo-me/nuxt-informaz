<template>
  <section>
    <h4 class="text-slate-600 text-[20px] flex justify-between items-center">
      Top categories
      <small
        class="text-[15px] text-slate-400"
        v-if="length === newsCategories.length"
        @click="length = 6"
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
    <div class="py-5 custom-scrollbar">
      <ul
        class="grid grid-cols-2 min-[360px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-7 md:gap-10 flex-wrap"
      >
        <li v-for="item in categories" :key="item.link">
          <NuxtLink
            :to="item.link"
            class="bg-slate-100/[0.7] p-[7px] md:p-[10px] rounded-xl flex flex-col gap-2 items-center h-[120px] md:h-[120px] w-[120px] md:w-[140px] aspect-square text-slate-600/[0.7]"
          >
            <i :class="`${item.icon} text-[24px] md:text-[30px]`"></i>
            <p v-text="item.title" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
  
  <script setup lang="ts">
import { ref } from "vue";
import newsCategories from "~/utils";

const length = ref<number>(6);

const categories = computed(() => {
  return newsCategories.slice(0, length.value);
});
</script>
  