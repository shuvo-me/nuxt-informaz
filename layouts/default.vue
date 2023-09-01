<template class="bg-white">
  <app-header />

  <app-container>
    <NuxtLoadingIndicator />
    <div class="flex flex-col md:flex-row pt-[30px] md:gap-10 w-full">
      <div class="order-2 md:order-1">
        <vertical-menu />
      </div>
      <div class="flex-1 w-full order-1 md:order-2">
        <slot />
      </div>
    </div>
  </app-container>
  <app-footer />
</template>

<script setup lang="ts">
</script>

<style>
</style>