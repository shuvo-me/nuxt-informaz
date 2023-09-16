<template class="bg-white">
  <app-header />

  <app-container>
    <nuxt-loading-indicator
      color="#00DC82"
      :height="3"
      :throttle="0"
      :duration="400"
    />
    <div class="flex pt-[30px] w-full">
      <!-- <div class="order-2 md:order-1">
        <vertical-menu />
      </div> -->
      <div class="flex-1 w-full order-1 md:order-2">
        <slot />
      </div>
    </div>
  </app-container>
  <app-footer />
</template>