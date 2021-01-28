<template>
  <div class="min-h-screen bg-gray-300">
    <div class="pt-12 mx-5">
      <div class="md:flex space-x-4 ">
        <!-- Calander Events -->
        <div class="md:w-3/5 shadow-sm">
          <calender />
        </div>
        <div
          class="bg-white md:w-2/5 sm:my-5 md:my-0 shadow-sm divide-y-2 w-full "
        >
          <div class="flex divide-x-2 ">
            <div class="w-1/2 text-sm font-bold text-gray-800 p-3 ">
              <div class="uppercase">
                Approval requests
              </div>
              <div class="text-7xl flex justify-center">
                11
              </div>
              <div class="text-xs">11 Clubs Need Approval</div>
              <div class="flex bg-gray-100 my-2 cursor-pointer uppercase">
                <div>More</div>
                <span><icons name="more"/></span>
              </div>
            </div>
            <!-- approve clubs ends  -->
            <div class="w-1/2 text-sm uppercase  font-bold text-gray-800 p-3 ">
              <div>
                approved clubs
              </div>
              <div class="text-7xl flex justify-center ">
                3
              </div>
              <div class="text-xs">.</div>
              <div class="flex bg-gray-100 my-2 cursor-pointer ">
                <div>More</div>
                <span><icons name="more"/></span>
              </div>
            </div>
          </div>
          <div>
            <div class="p-3">
              <div class="font-bold text-gray-800 flex items-center space-x-2">
                <div class="uppercase text-sm">
                  Club Information
                </div>
                <span
                  class="cursor-pointer hover:bg-gray-500 hover:text-white rounded-full px-1 py-1"
                >
                  <icons name="edit" />
                </span>
              </div>
              <!-- address  -->
              <div class="flex-col space-y-2">
                <div>
                  123 Main Street, New York, NY 10030
                </div>
                <div>
                  022-36265912
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calender from './dashboard/Calender.vue';
import Icons from '../../utils/Icons.vue';
export default {
  components: { Calender, Icons },
  name: 'adminDashboard',
};
</script>

<style></style>
