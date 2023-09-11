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
