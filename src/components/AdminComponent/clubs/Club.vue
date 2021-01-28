<template>
  <div>
    <div
      v-show="messageBox"
      class="absolute w-screen h-screen bg-transparent bg-gray-600 z-10 flex items-center justify-center"
    >
      <message-box />
    </div>
    <div class="bg-gray-200 h-screen">
      <div class="divide-y-2 divide-gray-300">
        <div>
          <headers icon="player" heading="Club List > Club" />
        </div>
        <div>
          <secondary-header />
        </div>
        <!-- Main Body for club  -->
        <div class="px-6 flex space-x-3 pt-5 ">
          <!-- upper section  -->
          <div class="bg-white w-3/5 rounded-md flex px-4 divide-x-2">
            <div class="w-1/3 flex flex-col items-center py-4 mx-3">
              <div>
                <div class=" rounded-full ">
                  <img
                    src="https://static4.depositphotos.com/1009701/356/i/950/depositphotos_3567684-stock-photo-new-shopping-center.jpg"
                    alt=""
                    class="rounded-full w-28 h-28"
                  />
                </div>
              </div>
              <div class="flex flex-col justify-center items-center space-y-2">
                <div class="font-bold text-gray-800 text-xl">
                  Mahalaxmi Sports Club
                </div>
                <div class="flex space-x-2">
                  <span class="flex flex-col items-center text-gray-800">
                    <div>15</div>
                    <div class="text-xs uppercase font-bold">
                      Player Approve
                    </div>
                  </span>
                  <span class="flex flex-col items-center text-gray-800">
                    <div>2</div>
                    <div class="text-xs uppercase font-bold">
                      Pending Players
                    </div>
                  </span>
                </div>
                <div
                  class="w-full inline-block  text-center border-2  rounded-md py-1  font-bold text-gray-700  cursor-pointer hover:bg-gray-500 hover:text-white"
                >
                  Send Message
                </div>
              </div>
            </div>
            <!--  -->
            <div class="w-4/6">
              <div class="px-5 py-6">
                <div class="grid grid-rows-3 grid-cols-3 w-full gap-5 ">
                  <div>
                    <div class="font-bold text-gray-700">Admin Name</div>
                    <div class="text-gray-800">AmitKumar Rai</div>
                  </div>
                  <div>
                    <div class="font-bold text-gray-700">Phone No</div>
                    <div class="text-gray-800">7303032970</div>
                  </div>
                  <div>
                    <div class="font-bold text-gray-700">Date Of Reg</div>
                    <div class="text-gray-800">12-12-2019</div>
                  </div>

                  <div>
                    <div class="font-bold text-gray-700">Street Address</div>
                    <div class="text-gray-800">42/22 Dr.Mossis Road</div>
                  </div>
                  <div>
                    <div class="font-bold text-gray-700">City</div>
                    <div class="text-gray-800">Mumbai</div>
                  </div>
                  <div>
                    <div class="font-bold text-gray-700">Zip Code</div>
                    <div class="text-gray-800">400011</div>
                  </div>

                  <div>
                    <div class="font-bold text-gray-700">Member Status</div>
                    <div class="text-gray-800 flex items-center space-x-2">
                      <div>Active</div>
                      <div
                        class="hover:bg-gray-700 hover:text-white rounded-full px-1 py-1"
                      >
                        <span><icons name="edit"/></span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-gray-700">Reg Date</div>
                    <div class="text-gray-800">2-12-2020</div>
                  </div>
                  <div>
                    <div class="font-bold text-gray-700"></div>
                    <div class="text-gray-800"></div>
                  </div>
                </div>
              </div>

              <!-- <div class="w-1/2 rounded-full">
            
            <div>
              <div></div>
            </div>
          </div> -->
              <!-- <div>
            as
          </div> -->
            </div>
          </div>
          <div class="bg-white rounded-md w-2/5 px-6 py-3">
            <div class="flex  justify-between items-center mx-3 ">
              <div class="font-bold text-gray-800 text-xl">Notes</div>
              <div class="text-blue-600">See All</div>
            </div>
            <div class="w-full h-5/6 relative">
              <textarea
                name="notes"
                class="bg-gray-300 w-full h-full inline-block rounded-md px-5 py-3"
              />
              <div
                class="absolute bottom-2 right-3 bg-blue-600 px-2 py-2 font-bold text-white rounded-md cursor-pointer shadow-md"
              >
                <div>Save Notes</div>
              </div>
            </div>
          </div>
        </div>
        <!-- upper secationuned -->
        <div class="px-6 py-6 space-x-3 flex  ">
          <div class="w-3/5 bg-white rounded-md h-full">
            <div
              class=" flex bg-gray-300 mx-5 my-4 py-1 rounded-md items-center "
            >
              <div
                class="bg-gray-100 rounded-md py-1 px-1 mx-2 font-bold text-blue-500 "
              >
                Upcoming Participation
              </div>
              <div class="text-gray-500 font-bold px-1">Past Participation</div>
              <div class="text-gray-500 font-bold px-1">
                Cancled Participation
              </div>
            </div>
            <div class="px-6 bg-gray-300 mx-6 rounded-md my-2">
              <div class="my-3 py-3  ">
                <div class="space-y-2 h-56 overflow-y-scroll ">
                  <div
                    class="bg-white rounded-sm py-2 px-2 text-gray-800 flex items-center justify-between space-y-3"
                  >
                    <div>
                      <div class="text-lg">27 Nov 25</div>
                      <div class="text-xs">3:00 PM : 5:00 PM</div>
                    </div>
                    <div>
                      <div class="text-xs">No Of Players</div>
                      <div class="text-lg">12</div>
                    </div>
                    <div>
                      <div class="text-xs">Payment</div>
                      <div class="text-lg">1200</div>
                    </div>
                    <div>
                      <div class="text-xs">Admin</div>
                      <div class="text-lg">Milind S</div>
                    </div>
                  </div>
                  <div
                    class="bg-white rounded-sm py-2 px-2 text-gray-800 flex items-center justify-between space-y-3"
                  >
                    <div>
                      <div class="text-lg">27 Nov 25</div>
                      <div class="text-xs">3:00 PM : 5:00 PM</div>
                    </div>
                    <div>
                      <div class="text-xs">No Of Players</div>
                      <div class="text-lg">12</div>
                    </div>
                    <div>
                      <div class="text-xs">Payment</div>
                      <div class="text-lg">1200</div>
                    </div>
                    <div>
                      <div class="text-xs">Admin</div>
                      <div class="text-lg">Milind S</div>
                    </div>
                  </div>
                  <!-- second -->
                  <div
                    class="bg-white py-2 px-2 text-gray-800 flex items-center justify-between space-y-3"
                  >
                    <div>
                      <div class="text-lg">27 Nov 25</div>
                      <div class="text-xs">3:00 PM : 5:00 PM</div>
                    </div>
                    <div>
                      <div class="text-xs">No Of Players</div>
                      <div class="text-lg">12</div>
                    </div>
                    <div>
                      <div class="text-xs">Payment</div>
                      <div class="text-lg">1200</div>
                    </div>
                    <div>
                      <div class="text-xs">Admin</div>
                      <div class="text-lg">Milind S</div>
                    </div>
                  </div>
                  <!-- third  -->
                  <div
                    class="bg-white py-2 px-2 text-gray-800 flex items-center justify-between space-y-3"
                  >
                    <div>
                      <div class="text-lg">27 Nov 25</div>
                      <div class="text-xs">3:00 PM : 5:00 PM</div>
                    </div>
                    <div>
                      <div class="text-xs">No Of Players</div>
                      <div class="text-lg">12</div>
                    </div>
                    <div>
                      <div class="text-xs">Payment</div>
                      <div class="text-lg">1200</div>
                    </div>
                    <div>
                      <div class="text-xs">Admin</div>
                      <div class="text-lg">Milind S</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-2/5 bg-white rounded-md"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icons from '../../../utils/Icons.vue';
import Headers from '../Headers.vue';
// import Icons from '../../../utils/Icons.vue';
import MessageBox from './MessageBox.vue';
import SecondaryHeader from '../SecondaryHeader.vue';
export default {
  components: { Headers, SecondaryHeader, Icons, MessageBox },
  name: 'club-page',

  data() {
    return {
      messageBox: false,
    };
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
}
</style>
