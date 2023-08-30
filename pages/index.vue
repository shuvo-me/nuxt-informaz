<template>
  <section>
    <h4 class="text-slate-600 text-[20px]">Top categories</h4>
    <div class="mt-1 py-5 overflow-x-auto custom-scrollbar">
      <ul class="flex items-center gap-10">
        <li v-for="item in newsCategories" :key="item.link">
          <NuxtLink
            :to="item.link"
            class="bg-slate-100/[0.7] p-[10px] rounded-xl flex flex-col justify-center items-center h-[120px] w-[140px] aspect-square"
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

const counter = ref(0);

const increment = () => counter.value++;
const decrement = () => counter.value--;
</script>
  