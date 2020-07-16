<template>
  <div class="flex">
    <div class="md:w-1/3">
      <div>
        <img src alt />
      </div>
    </div>
    <div class="bg-gray-300 w-full">
      <div class="p-5 justify-center mt-32">
        <div class="grid grid-cols-6">
          <BoxHeading
            heading="Registraion"
            subheading="Enter Registraion details"
            class="sm:col-start-3 sm:col-end-6 col-start-1 col-end-7 font-semibold text-gray-700"
          />
        </div>
        <div v-if="step === 0" class="grid grid-cols-6">
          <div class="space-y-3 sm:col-start-3 sm:col-end-5 col-start-1 col-end-7">
            <div class="flex flex-col justify-center">
              <label for="Name" class="text-xl text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                v-model="name"
                class="border-gray-400 border-solid border-4 py-2 px-2 rounded-sm font-semibold"
                placeholder="Jone Doe"
              />
            </div>
            <div class="flex flex-col justify-center">
              <label for="EmailAddress" class="text-xl text-gray-700 font-semibold">Email</label>
              <input
                type="text"
                v-model="email"
                class="border-gray-400 border-solid border-4 py-2 px-2 rounded-sm font-semibold"
                placeholder="you@example.com"
              />
            </div>
            <div class="flex flex-col justify-center">
              <label for="EmailAddress" class="text-xl text-gray-700 font-semibold">Password</label>
              <input
                type="text"
                v-model="password"
                class="border-gray-400 border-solid border-4 py-2 px-2 rounded-sm font-semibold"
                placeholder="Secrate Password"
              />
            </div>
          </div>
        </div>
        <div v-if="step === 1">
          this is step 1
          <input type="radio" value="student" v-model="option" />
          <label for="student">studetn</label>
          <input type="radio" value="club" v-model="option" v-on:change="log" />
          <label for="club">club</label>
          <div v-if="option === 'club'">
            <div>load clubs name</div>
          </div>
          <div v-else>
            <input type="clubname" />
          </div>
        </div>
        <div v-if="step === 2">
          this is step 2
          <div></div>
        </div>
      </div>
      <!-- buttons -->
      <div class="grid grid-cols-6">
        <span class="col-end-5 flex space-x-2">
          <div v-show="step > 0">
            <button
              @click="step--"
              class="px-3 py-2 bg-red-400 rounded-sm text-white uppercase"
            >prevous</button>
          </div>
          <div>
            <button
              @click="step++"
              class="px-3 py-2 bg-blue-400 rounded-sm text-white uppercase"
            >next</button>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import BoxHeading from "../../utils/BoxHeading";
export default {
  name: "login",
  components: {
    BoxHeading
  },
  data: () => {
    return {
      step: 0,
      option: ""
    };
  },
  methods: {
    log() {
      console.log("clo");
    }
  },
  computed: {
    ...mapFields([
      "userDetail.name",
      "userDetail.email",
      "userDetail.password",
      "userDetail.role",
      "userDetail.clubname"
    ])
  }
};
</script>

<style></style>
