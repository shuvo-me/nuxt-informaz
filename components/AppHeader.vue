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
            <li>
              <button
                type="button"
                class="border border-slate-200 h-[35px] w-[35px] rounded-md text-[14px] text-slate-500 flex items-center justify-center"
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
