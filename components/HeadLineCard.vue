<template>
  <div class="flex gap-x-2">
    <img
      src="https://plus.unsplash.com/premium_photo-1664197368374-605ce8ec8f54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      alt="headline-img"
      class="object-cover h-auto w-[55px] rounded-md"
    />
    <div>
      <p class="text-[14px] text-black/[0.9] max-w-[180px] truncate">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit sit amet. Lorem ipsum
        dolor sit amet.
      </p>
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
defineProps<{
  news: any;
}>();
</script>

