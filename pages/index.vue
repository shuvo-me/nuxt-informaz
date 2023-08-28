<template></template>
  
  <script setup lang="ts">
import { ref } from "vue";

const counter = ref(0);

const increment = () => counter.value++;
const decrement = () => counter.value--;
</script>
  