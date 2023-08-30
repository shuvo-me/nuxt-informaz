<template>
  <aside>
    <ul
      class="flex flex-row md:flex-col gap-5 md:gap-10 justify-center items-center bg-slate-100 rounded-full p-2 md:p-5"
    >
      <l v-for="item in navigationLinks" :key="item.icon">
        <NuxtLink :to="item.to" activeClass="text-[#3759F9]">
          <span
            class="text-[18px] md:text-[21px] text-slate-400 transition-all hover:text-[#3759F9]"
          >
            <i :class="item.icon" />
          </span>
        </NuxtLink>
      </l>
    </ul>
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
    icon: "bi bi-award-fill",
  },
];
</script>
