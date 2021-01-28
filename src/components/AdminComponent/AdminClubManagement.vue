<template>
  <div class="bg-gray-200  min-h-screen divide-y-2 divide-gray-300">
    <div class="divide-y-2 divide-gray-400 ">
      <!-- firest header -->
      <headers icon="club" heading="Club List" />
      <!-- Search ends  -->
    </div>

    <!-- first header ends  -->

    <div class="flex justify-between h-12 items-center px-6">
      <div
        class="flex divide-x-2 space-x-12 text-center divide-gray-400 items-center"
      >
        <div class="flex items-center space-x-3 ">
          <span class="text-3xl text-blue-500 font-bold">18</span>
          <span class="font-normal text-gray-800">Clubs</span>
        </div>
        <div>
          <span class="text-gray-800 mx-5 active:outline-none py-2"
            >Sort By :</span
          >
          <select class="mx-1 py-1 bg-white rounded-sm flex-col items-center">
            <option>Last Register</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
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
    <!-- ends second header -->
    <!--s -->
    <div class="px-5 pt-5">
      <div class="grid grid-cols-5 text-gray-700 px-2">
        <div class="flex items-center space-x-2">
          <input type="checkbox" name="" id="" />
          <span>Basic Info</span>
        </div>
        <div>Phone Number</div>
        <div>City</div>
        <div>Registration Date</div>
        <div>No.of Students</div>
      </div>
      <!-- listiten -->

      <div
        class="grid grid-cols-5 text-gray-700 mt-6 bg-white py-2 px-2 shadow-sm rounded-sm"
      >
        <div class="flex items-center space-x-2">
          <input type="checkbox" name="" id="" />
          <div class="h-8 w-8 rounded-full bg-gray-600"></div>
          <router-link to="/admin/admin-club/121">
            <div class="flex flex-col justify-center">
              <div class="text-sm font-bold">Mahalazmi Sports club</div>
              <div class="text-xs">aforamitrai@gmail.com</div>
            </div>
          </router-link>
        </div>
        <div class="flex items-center">(91)7303032970</div>
        <div class="flex items-center">Mumbai</div>
        <div class="flex items-center">12-12-2020</div>
        <div class="flex items-center justify-between">
          <div>140</div>
          <div class="font-bold cursor-pointer">
            <icons name="hdot" />
          </div>
          <div></div>
        </div>
      </div>

      <div
        class="grid grid-cols-5 text-gray-700 mt-2 bg-white py-2 px-2 shadow-sm rounded-sm"
      >
        <div class="flex items-center space-x-2">
          <input type="checkbox" name="" id="" />
          <div class="h-8 w-8 rounded-full bg-gray-600"></div>
          <div class="flex flex-col justify-center">
            <div class="text-sm font-bold">Mahalazmi Sports club</div>
            <div class="text-xs">aforamitrai@gmail.com</div>
          </div>
        </div>
        <div class="flex items-center">+(91)7303032970</div>
        <div class="flex items-center">Mumbai</div>
        <div class="flex items-center">12-12-2020</div>
        <div class="flex items-center justify-between">
          <div>140</div>
          <div class="font-bold cursor-pointer">
            <icons name="hdot" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icons from '../../utils/Icons.vue';
import Headers from './Headers.vue';
export default {
  components: { Icons, Headers },
  name: 'AdminClubManagment',
};
</script>

<style></style>
