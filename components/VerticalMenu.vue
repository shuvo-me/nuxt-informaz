<template>
  <aside>
    <div class="flex flex-col items-center justify-between h-full">
      <ul
        class="flex flex-row md:flex-col gap-4 md:gap-8 justify-center items-center bg-slate-100 rounded-full p-2 md:p-3"
      >
        <l v-for="item in navigationLinks" :key="item.icon">
          <NuxtLink :to="item.to" activeClass="text-[#3759F9]">
            <span
              class="text-[18px] md:text-[20px] text-slate-400 transition-all hover:text-[#3759F9]"
            >
              <i :class="item.icon" />
            </span>
          </NuxtLink>
        </l>
      </ul>

      <div
        class="flex flex-row md:flex-col bg-slate-100 rounded-full items-center px-3 md:p-1 mt-5 md:mt-10"
      >
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="user-img"
          class="w-[35px] h-[35px] rounded-full object-cover"
        />
        <span
          class="text-[18px] md:text-[21px] text-slate-400 transition-all hover:text-[#3759F9] pl-[10px] md:pl-0 md:pt-[20px]"
          role="button"
        >
          <i class="bi bi-box-arrow-left"></i
        ></span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
interface navigationLink {
  to: string;
  icon: string;
}

const navigationLinks: navigationLink[] = [
  {
    to: "/",
    icon: "bi bi-house-fill",
  },
  {
    to: "/",
    icon: "bi bi-newspaper",
  },
  {
    to: "/",
    icon: "bi bi-stack",
  },
  {
    to: "/",
    icon: "bi bi-calendar-plus-fill",
  },
  {
    to: "/",
    icon: "bi bi-app-indicator",
  },
  {
    to: "/",
    icon: "bi bi-bookmark-plus",
  },
];
</script>
