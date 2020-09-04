<template>
  <div class="flex">
    <div class="md:w-1/3">
      <div>
        <img src alt />
      </div>
    </div>
    <div class="bg-gray-300 w-full">
      <div class="p-5 justify-center mt-32 h-1/">
        <div class="grid grid-cols-6">
          <BoxHeading
            heading="Registraion"
            subheading="Enter Registraion details"
            class="sm:col-start-3 sm:col-end-6 col-start-1 col-end-7 font-semibold text-gray-700"
          />
        </div>
        <!-- step one starts  -->
        <div v-if="step === 0" class="grid grid-cols-6">
          <div
            class="space-y-3 sm:col-start-3 sm:col-end-5 col-start-1 col-end-7"
          >
            <div class="flex flex-col justify-center">
              <label for="Name" class="text-xl text-gray-700 font-semibold"
                >Name</label
              >
              <input
                type="text"
                v-model="userDetail.name"
                class="border-gray-400 border-solid border-4 py-2 px-2 rounded-sm font-semibold"
                placeholder="Jone Doe"
              />
            </div>
            <div class="flex flex-col justify-center">
              <label
                for="EmailAddress"
                class="text-xl text-gray-700 font-semibold"
                >Email</label
              >
              <input
                type="text"
                v-model="userDetail.email"
                class="border-gray-400 border-solid border-4 py-2 px-2 rounded-sm font-semibold"
                placeholder="you@example.com"
              />
            </div>
            <div class="flex flex-col justify-center">
              <label
                for="EmailAddress"
                class="text-xl text-gray-700 font-semibold"
                >Password</label
              >
              <input
                type="password"
                v-model="userDetail.password"
                class="border-gray-400 border-solid border-4 py-2 px-2 rounded-sm font-semibold"
                placeholder="Secrate Password"
              />
            </div>
          </div>
        </div>
        <!-- step one ends  -->
        <!-- step two ends  -->
        <div v-if="step === 1" class="grid grid-cols-6">
          <div class="sm:col-start-3 sm:col-end-5 col-start-1 col-end-7">
            <div class="py-3">
              <div class="flex flex-col space-y-2">
                <div class="text-xl text-gray-700">Choose Role</div>
                <div class="flex px-4 py-4 bg-gray-600">
                  <input
                    type="radio"
                    value="player"
                    v-model="userDetail.option"
                  />
                  <label
                    for="player"
                    class="uppercase text-lg text-gray-100 px-3"
                    >Player</label
                  >
                </div>
                <div v-show="option === 'player'">
                  <select
                    name="clubselect"
                    v-model="userDetail.clubname"
                    class="px-2 py-2 w-full rounded-sm"
                  >
                    <option disabled value="None"
                      >Please Select your Club</option
                    >
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                </div>
                <div class="flex px-4 py-4 bg-gray-600">
                  <input
                    type="radio"
                    value="club"
                    v-model="userDetail.option"
                    v-on:change="log"
                  />
                  <label for="club" class="uppercase text-lg text-gray-100 px-3"
                    >club</label
                  >
                </div>
                <div v-show="option === 'club'">
                  <input
                    type="clubname"
                    class="px-2 py-2 w-full rounded-sm"
                    placeholder="Enter Club Name"
                    v-model="userDetail.clubname"
                  />
                </div>
                <button
                  class="w-full bg-blue-500 uppercase text-xl text-white font-bold py-2 px-2 rounded-sm"
                  @click="$store.dispatch('register')"
                >
                  submit
                </button>
              </div>
            </div>
            <!-- steop two ends  -->
          </div>
        </div>
      </div>
      <!-- buttons -->
      <div class="grid grid-cols-6">
        <div class="col-start-3 col-end-5 space-x-2">
          <span v-show="step === 1">
            <button
              @click="step--"
              class="px-3 py-2 bg-red-400 rounded-sm text-white uppercase w-full"
            >
              prevous
            </button>
          </span>
          <span v-show="step == 0" class="inline-block w-full">
            <button
              @click="step++"
              class="px-3 py-2 bg-blue-400 rounded-sm text-white uppercase w-full"
            >
              next
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createHelpers } from "vuex-map-fields";
import BoxHeading from "../../utils/BoxHeading";

const { mapFields } = createHelpers({
  getterType: "getAuthFields",
  mutationType: "updateAuthFields",
});

export default {
  name: "login",
  components: {
    BoxHeading,
  },
  data: () => {
    return {
      step: 1,
      option: "",
    };
  },
  methods: {
    log() {
      this.role = "clubadmin";
    },
  },
  computed: {
    ...mapFields(["userDetail"]),
  },
};
</script>

<style></style>
