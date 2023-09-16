<template>
  <Transition name="modal">
    <div
      @click="$emit('hide-modal')"
      id="user-details-modal"
      class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/[0.4] flex items-center"
    >
      <div class="relative w-full max-w-2xl max-h-full mx-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600 modal-header-bg min-h-[140px]"
          ></div>
          <!-- Modal body -->
          <div class="p-6 space-y-6 mt-[-70px] flex items-end gap-x-3">
            <img
              :src="
                userDetails?.profile_image ||
                '~/assets/images/Placeholder_view_vector.svg.png'
              "
              alt="user img"
              class="h-[100px] w-[100px] rounded-full"
            />
            <div class="flex justify-between items-center flex-1 mt-3">
              <div>
                <h5 v-text="userDetails?.name || ''" class="font-semibold" />
                <div class="space-x-3">
                  <span class="text-gray-500 text-[13px] font-medium">
                    <i class="bi bi-geo-alt"></i>
                    {{ userDetails?.location }}</span
                  >
                  <span class="text-gray-500 text-[13px] font-medium">
                    <i class="bi bi-calendar2-check"></i>
                    {{ $timeFormat(userDetails?.joined_at || "") }}</span
                  >
                </div>
              </div>
              <div class="flex items-center gap-x-3">
                <nuxt-link
                  target="_blank"
                  :to="`https://twitter.com/${userDetails.github_username}`"
                  class="bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white text-[13px] flex items-center justify-center h-[25px] w-[25px] rounded-md"
                >
                  <i class="bi bi-github"></i>
                </nuxt-link>
                <nuxt-link
                  target="_blank"
                  :to="`https://twitter.com/${userDetails.twitter_username}`"
                  class="bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white text-[13px] flex items-center justify-center h-[25px] w-[25px] rounded-md"
                >
                  <i class="bi bi-twitter"></i>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="px-10">
            <h4 v-text="'About..'" />
            <p v-if="!userDetails?.summary" class="text-gray-700 text-[15px]">
              No details provided by user
            </p>
            <p
              v-else
              v-text="userDetails?.summary"
              class="text-gray-700 text-[15px]"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { UserDetailsDataTypes } from "~/types";

defineProps<{
  userDetails: UserDetailsDataTypes;
}>();
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>