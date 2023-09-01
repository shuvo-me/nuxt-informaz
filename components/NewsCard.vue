<template>
  <div class="">
    <div class="rounded-md relative max-h-[150px] overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NyZWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="news-img"
        class="h-full w-full group-hover:scale-150 transition-all duration-100"
      />
      <span
        class="absolute z-10 bottom-2 right-2 bg-white rounded-full text-black text-[12px] px-1 py-1 gap-2 flex items-center"
        role="button"
      >
        Read more
        <small
          class="bg-blue-600 text-white h-[20px] w-[20px] rounded-full flex items-center justify-center text-[14px]"
        >
          <i class="bi bi-chevron-right" />
        </small>
      </span>
    </div>
    <div class="mt-4">
      <h5 class="line-clamp-2 text-[14px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
        commodi.
      </h5>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

