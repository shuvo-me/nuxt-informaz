<template>
  <section class="mt-5 pb-5">
    <div
      class="grid grid-cols-1 min-[500px]:grid-cols-2 gap-10 md:gap-11 mt-4"
      v-if="pending"
    >
      <news-card-skeleton-loading v-for="n in [...new Array(4)]" :key="n" />
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
    <div class="flex justify-center mt-10" v-if="articles?.length">
      <vue-awesome-paginate
        :total-items="50"
        v-model="page"
        :items-per-page="4"
        :max-pages-shown="3"
      >
        <template #prev-button>
          <span>
            <i class="bi bi-chevron-left"></i>
          </span>
        </template>
        <template #next-button>
          <span>
            <i class="bi bi-chevron-right"></i>
          </span>
        </template>
      </vue-awesome-paginate>
    </div>
  </section>
</template>
  
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "~/store";
import { ref } from "vue";
const length = ref<number>(7);
const page = ref<number>(1);
const category = ref<string>("world-news");
const store = useStore();
const { tag } = storeToRefs(store);

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
        page: page.value.toString(),
        per_page: 4,
        tag: tag.value,
      },
    }),
  {
    server: false,
    lazy: true,
    watch: [page, category, tag],
  }
);
</script>
  