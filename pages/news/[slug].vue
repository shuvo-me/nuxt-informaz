<template>
  <section>
    <div class="relative z-[-1]">
      <img
        src="https://images.unsplash.com/photo-1693370000365-1fb8ae16f9d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="details-img"
        class="w-full max-h-[200px] rounded-lg"
      />
      <div
        class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/[0.4] to-black/[0.6] rounded-lg flex justify-center items-center text-white text-[17px] md:text-[20px] px-4 flex-col"
      >
        <h4 class="text-center line-clamp-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
          consequuntur. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Beatae, consequuntur. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Beatae, consequuntur. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Beatae, consequuntur.
        </h4>
      </div>
    </div>
    <div class="mt-[-40px] z-[1]">
      <div class="flex flex-col items-center gap-2">
        <img
          src="https://images.unsplash.com/photo-1692996757297-5faeb49aeb9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="news-author"
          class="h-[120px] w-[120px] rounded-full object-cover"
        />
        <span class="text-[13px] rounded-md px-2">
          <small class="text-blue-600 rounded-md">Author:</small>
          Kim Mulan.</span
        >

        <small class="block text-slate-500 text-[12px]"
          >Posted on: August 13, 2019. 3 min read.</small
        >
      </div>
      <div></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>