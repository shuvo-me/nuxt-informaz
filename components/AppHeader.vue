<template>
  <header>
    <app-container class="border-b-2 border-b-slate-100">
      <div class="flex items-center justify-between py-5 px-1">
        <div class="app-logo">
          <NuxtLink to="/">
            <h4 class="text-[20px] font-normal">Articles</h4>
          </NuxtLink>
        </div>

        <div class="nav-btns">
          <ul class="flex items-center gap-4">
            <li v-if="$route.name == 'news-slug'" @click="loved = !loved">
              <button
                type="button"
                :class="`border border-slate-200 h-[35px] w-[35px] rounded-md text-[14px] ${
                  loved ? 'text-red-500 bg-red-50' : 'text-slate-500'
                } flex items-center justify-center`"
              >
                <BootstrapIconHeartFill />
              </button>
            </li>

            <li>
              <div class="flex flex-row bg-slate-100 rounded-full items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="user-img"
                  class="w-[35px] h-[35px] rounded-full object-cover"
                />
                <!-- <span
                  class="text-[18px] md:text-[21px] text-slate-400 transition-all hover:text-[#3759F9] pl-[10px] md:pl-0 md:pt-[20px]"
                  role="button"
                >
                  <i class="bi bi-box-arrow-left"></i
                ></span> -->
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="$route.name !== 'news-slug'">
        <ul class="flex justify-center items-center pb-2 flex-wrap">
          <li
            :class="`hover:text-black  text-[15px] capitalize mx-2 ${
              selectedTag === tag.name ? 'text-black' : 'text-black/[0.7]'
            } `"
            role="button"
            v-for="tag in tags"
            :key="tag"
            @click="() => setSelectedTag(tag.name)"
          >
            <span v-text="tag.name" />
          </li>
        </ul>
      </div>
    </app-container>
  </header>
</template>

<script setup lang="ts">
import { useStore } from "~/store";
const selectedTag = ref<string>("");
const loved = ref<boolean>(false);
const { setTag } = useStore();
const val = ref<number>(2);
const {
  data: tags,
  pending,
  error,
  refresh,
} = await useAsyncData(
  "tags",
  () =>
    $fetch(`https://dev.to/api/tags`, {
      query: {
        page: 1,
        per_page: 7,
      },
    }),
  {
    server: false,
    lazy: true,
    transform: (data: any) => {
      selectedTag.value = data[0].name;
      return data;
    },
  }
);

const setSelectedTag = (tag: string) => {
  selectedTag.value = tag;
  setTag(tag);
};
</script>
