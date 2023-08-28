<template>
  <header>
    <app-container class="border-b-2 border-b-slate-100">
      <div class="flex items-center justify-between py-5 px-1">
        <div class="app-logo">
          <h4 class="text-[20px] text-primary font-normal">Informaz</h4>
        </div>
        <div class="nav-links hidden md:block">
          <ul class="flex items-center gap-5 lg:gap-[20px] md:flex-wrap">
            <li
              v-for="item of navLinks"
              :key="item.title"
              class="text-slate-500 hover:text-[#3055F6] text-[14px] lg:text-[16px]"
            >
              <NuxtLink :href="`/?${item.query}`">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="nav-btns">
          <ul class="flex items-center gap-4">
            <li>
              <button
                type="button"
                class="border border-slate-200 h-[35px] w-[35px] rounded-md text-[14px] text-slate-500 flex items-center justify-center"
              >
                <BootstrapIconHeartFill />
              </button>
            </li>
            <li>
              <button
                type="button"
                class="border border-slate-200 h-[35px] w-[35px] rounded-md text-[14px] text-slate-500 flex items-center justify-center"
              >
                <BootstrapIconPersonFill />
              </button>
            </li>
            <li>
              <button
                type="button"
                class="border border-slate-200 h-[35px] w-[35px] rounded-md text-[14px] text-slate-500 flex items-center justify-center"
              >
                <BootstrapIconGearFill />
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
