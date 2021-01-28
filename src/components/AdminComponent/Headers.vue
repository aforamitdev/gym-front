<template>
  <div class="py-5 px-6 pb-2 flex justify-between items-center">
    <div class="flex items-center space-x-2 ">
      <span class="text-gray-800  ">
        <icons :name="icon" />
      </span>
      <div class="text-xl font-bold text-gray-800 ">
        {{ heading }}
      </div>
      <div class="flex space-x-4 pl-10">
        <div class="font-bold text-blue-500">List</div>
        <div class="text-gray-800">Thumbnail</div>
      </div>
    </div>
    <!-- Search  -->
    <div>
      <div class="flex items-center space-x-4">
        <div class="relative">
          <input
            type="text"
            class="w-60 inline-block rounded-full py-1 px-10 relative  focus:outline-none "
          />
          <icons name="search" class="absolute top-2 left-2 text-gray-800" />
        </div>
        <div
          class="bg-blue-600 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer"
        >
          <icons name="plus" />
        </div>
        <div
          class="bg-gray-600 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer"
        >
          <icons name="bell" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icons from '../../utils/Icons.vue';
export default {
  name: 'admin-header',
  props: ['icon', 'heading'],
  components: {
    Icons,
  },
};
</script>

<style></style>
