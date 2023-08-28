<template>
  <div :class="`max-w-[1200px] px-5 md-px-0 mx-auto ${extraClass}`">
    <slot/>
  </div>
</template>

<script setup lang="ts">
defineProps<{
    extraClass?: string
}>()
</script>

