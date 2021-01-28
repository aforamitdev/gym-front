<template>
  <div class="flex justify-between h-12 items-center px-6">
    <div
      class="flex divide-x-2 space-x-12 text-center divide-gray-400 items-center"
    >
      <!-- <div class="flex items-center space-x-3 ">
        <span class="text-3xl text-blue-500 font-bold">18</span>
        <span class="font-normal text-gray-800">Clubs</span>
      </div> -->
      <!-- <div>
        <span class="text-gray-800 mx-5 active:outline-none py-2"
          >Sort By :</span
        >
        <select class="mx-1 py-1 bg-white rounded-sm flex-col items-center">
          <option>Last Register</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div> -->
      <div>
        <span class="text-blue-500 font-semibold"> Club List</span> >
        <span class="text-gray-800 font-semibold"> Mahalaxmi Sports club</span>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <div
        class="text-gray-800 flex  items-center px-1 h-8  rounded-sm bg-white "
      >
        <div class=" text-gray-800 px-2 cursor-pointer">
          <icons name="export" />
        </div>
      </div>

      <div
        class="text-gray-800 flex  items-center px-1 h-8 rounded-sm bg-white cursor-pointer "
      >
        <div class="flex  items-center text-gray-800 px-2 ">
          <icons name="filter" /> Filter
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icons from '../../utils/Icons.vue';
export default {
  name: 'secondary-header',
  components: {
    Icons,
  },
};
</script>

<style></style>
