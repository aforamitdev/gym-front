<template>
  <div>
    <div
      v-show="regInd"
      class="z-10 bg-opacity-50 bg-gray-700 absolute flex items-center justify-center w-screen h-screen"
    >
      <registration-inv v-on:toggleReg="toggleIndReg()" />
    </div>
    <div
      v-show="regClub"
      class="z-10 bg-opacity-50 bg-gray-700 absolute flex items-center justify-center w-screen h-screen"
    >
      <registration-club v-on:toggleRegClub="toggleClubReg()" />
    </div>
    <div>
      <div>
        <div>
          <div class="absolute flex items-center justify-between w-full px-16">
            <div>
              <img src="../assets/logo-new.png" alt="" class="s mx-10 my-5" />
            </div>
            <div class="bg-blue-700 rounded-sm text-white font-bold px-3 py-2">
              Login To Your Account
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img
              src="../assets/banner1.png"
              alt=""
              class="h-1/2 object-cover"
            />
          </div>
          <div
            class="absolute top-1/4 left-12 text-4xl text-white text-transparent w-1/2"
          >
            <div>
              We develop every child by understanding their unique abilities and
              mental strength by consulting our team Physio and psychiatrist.
            </div>
            <div class="flex space-x-2 py-5 items-center">
              <div
                @click="regInd = !regInd"
                class="text-sm bg-blue-500 px-2 py-2 rounded-sm cursor-pointer hover:bg-blue-600 font-bold"
              >
                Register Your Child / Individual Registration
              </div>
              <div
                class="text-sm bg-blue-500 px-2 py-2 rounded-sm font-bold hover:bg-blue-600"
                @click="regClub = !regClub"
              >
                Register For Club
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center py-12">
            <div class="uppercase text-2xl font-bold text-gray-700">
              Our Programs
            </div>
            <div class="flex items-center py-5">
              <div class="flex px-10 items-center space-x-2">
                <div
                  class="px-3 py-3 bg-blue-500 border-2 border-blue-600 rounded-sm hover:bg-blue-600 text-white font-bold"
                >
                  Primary Level Program (6-8 yrs)
                </div>
                <div
                  class="px-3 py-3 bg-blue-500 border-2 border-blue-600 rounded-sm hover:bg-blue-600 text-white font-bold"
                >
                  Jr. Advance Level Program (12-14 yrs)
                </div>
                <div
                  class="px-3 py-3 bg-blue-500 border-2 border-blue-600 rounded-sm hover:bg-blue-600 text-white font-bold"
                >
                  PSr. Advance Level Program (15-17yrs)
                </div>
                <div
                  class="px-3 py-3 bg-blue-500 border-2 border-blue-600 rounded-sm hover:bg-blue-600 text-white font-bold"
                >
                  Elite Level Program (17yrs & above)
                </div>
                <div
                  class="px-3 py-3 bg-blue-500 border-2 border-blue-60a0 rounded-sm hover:bg-blue-600 text-white font-bold"
                >
                  Stunt Gymnastics / Ladies Gymnastics
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between mx-20 space-x-3 h-64">
            <div class="bg-gray-300 w-1/2 rounded-md">
              <div class="">
                <div class="mx-11 py-4 text-xl font-bold text-gray-800">
                  Notices
                </div>
                <div>
                  <div
                    class="text-gray-700 bg-white px-2 shadow-sm rounded-sm mx-10 py-3"
                  >
                    <div class="flex items-center justify-between space-x-2">
                      <div class="font-bold">Fee Update Notics</div>
                      <div><icons name="file" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-300 w-1/2 rounded-md">
              <div class="">
                <div class="mx-11 py-4 text-xl font-bold text-gray-800">
                  Upcomming Events
                </div>
                <div>
                  <div
                    class="text-gray-700 bg-white py-3 px-2 shadow-sm rounded-sm mx-10 flex justify-between"
                  >
                    <div class="flex items-center">
                      <div class="font-bold">State Semi Final</div>
                    </div>
                    <div class="flex items-center">Mumbai</div>
                    <div class="flex items-center text-blue-500">
                      12-12-2020
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- footer  -->
      <div class="w-full bg-blue-500 mt-10">
        <div class="flex justify-center">
          <div>
            <img
              src="http://thegymnast.in/wp-content/uploads/2016/09/logo-new.png"
              alt=""
              class="s mx-10 my-5"
            />
          </div>
        </div>
        <div
          class="w-full justify-center text-center text-white text-2xl pt-8 pb-16"
        >
          <div class="">
            elcome to ‘The Gymnast’ a academy where our goal is to provide a
            safe, positive and fun experience for all – from toddlers to
            'veteran' gymnasts.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationInv from '../components/HomeComponents/RegistrationInv.vue';
import RegistrationClub from '../components/HomeComponents/RegistrationClub.vue';
import Icons from '../utils/Icons.vue';
export default {
  components: { RegistrationInv, RegistrationClub, Icons },
  name: 'Home',
  component: {
    RegistrationInv,
    RegistrationClub,
  },
  data() {
    return {
      regInd: false,
      regClub: false,
    };
  },
  methods: {
    toggleIndReg() {
      console.log('object');
      this.regInd = !this.regInd;
    },
    toggleClubReg() {
      this.regClub = !this.regClub;
    },
  },
};
</script>
