<template>
  <div class="flex gap-x-2">
    <img
      :src="headLine.urlToImage"
      alt="headline-img"
      class="object-cover h-auto w-[55px] rounded-md"
    />
    <div>
      <p
        class="text-[14px] text-black/[0.9] max-w-[180px] truncate"
        v-text="headLine.title"
      />

      <div class="flex justify-between items-center mt-3">
        <small
          class="text-[11px] bg-blue-100 text-blue-600 px-2 py-[2px] rounded-md"
          >NY news</small
        >
        <div class="text-slate-500 text-[14px]">
          <small class="" role="button">
            <i class="bi bi-eye-fill" />
            4.6k
          </small>
          <small class="" role="button">
            <i class="bi bi-hand-thumbs-up-fill" />
            77k
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SingleNewsDataTypes } from "~/types";
defineProps<{
  headLine: SingleNewsDataTypes;
}>();
</script>

