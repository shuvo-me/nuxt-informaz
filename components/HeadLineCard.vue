<template>
  <NuxtLink :to="`/news/${headLine.title}`" class="flex gap-x-2">
    <img
      v-if="!headLine.image"
      src="~/assets/images/Placeholder_view_vector.svg.png"
      alt="headline-placeholder-img"
      class="object-cover h-[55px] w-[55px] rounded-md"
    />
    <img
      :src="headLine.image"
      alt="headline-img"
      class="object-cover h-[55px] w-[55px] rounded-md"
      v-else
      @error="handleImageError"
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
  </NuxtLink>
</template>

<script setup lang="ts">
import { SingleNewsDataTypes } from "~/types";
import PlaceHolderImage from "~/assets/images/Placeholder_view_vector.svg.png";
defineProps<{
  headLine: SingleNewsDataTypes;
}>();
const handleImageError = (err: any) => {
  err.target.src = PlaceHolderImage;
};
</script>

