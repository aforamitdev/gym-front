<template>
  <div class="bg-gray-300 w-full">
    <div class="mx-2 w-1/2 flex justify-center">
      <div class="space-y-3 sm:col-start-3 sm:col-end-5 col-start-1 col-end-7">
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
            type="password"
            v-model="password"
            class="border-gray-400 border-solid border-4 py-2 px-2 rounded-sm font-semibold"
            placeholder="Secrate Password"
          />
        </div>
        <button
          @click="$store.dispatch('login')"
          class="py-2 px-2 bg-blue-400 w-full hover:bg-blue-500 uppercase text-white text-xl tracking-wide"
        >Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  name: "login-page",
  computed: {
    ...mapFields(["loginDetail.email", "loginDetail.password"])
  }
};
</script>

<style>
</style>