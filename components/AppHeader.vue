<template>
  <header>
    <app-container>
      <div class="flex items-center justify-between py-5 px-1">
        <div class="app-logo">
          <h4 class="text-[20px] text-primary font-normal">Informaz</h4>
        </div>
        <div class="nav-links">
          <ul class="flex items-center gap-[20px]">
            <li
              v-for="item of navLinks"
              :key="item.title"
              class="text-slate-500 hover:text-[#3055F6]"
            >
              <NuxtLink :href="`/?${item.query}`">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="nav-btns">
          <ul>
            <li>
              <button
                type="button"
                class="border border-slate-200 h-[30px] w-[30px] rounded-md text-[14px] text-slate-500 flex items-center justify-center"
              >
                <BootstrapIconPersonFill />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </app-container>
  </header>
</template>

<script setup lang="ts">
const navLinks = [
  {
    title: "Trending",
    query: "trending",
  },
  {
    title: "Top list",
    query: "top-list",
  },
  {
    title: "Programming",
    query: "programming",
  },
  {
    title: "Interaction",
    query: "interaction",
  },
  {
    title: "Designer",
    query: "designer",
  },
  {
    title: "Latest news",
    query: "latest-news",
  },
];
const navBtnIcons = [];
</script>
