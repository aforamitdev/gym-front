<template>
  <div class="bg-white w-1/4  rounded-md shadow">
    <div class="flex justify-between mx-10 items-center pb-5 pt-5">
      <div class="text-xl  font-bold text-gray-700 ">
        Registration for Club
      </div>
      <div @click="toggleRegistration()" class="cursor-pointer">
        <icons name="close" />
      </div>
    </div>
    <div class="text-xl font-bold text-gray-700">
      <div class="w-ful">
        <div class="flex justify-between px-10 pt-2 ">
          <form class="mt-6  flex flex-col w-full">
            <div class="  gap-3">
              <span class="w-full">
                <label
                  for="firstname"
                  class="block text-xs font-semibold text-gray-600 uppercase"
                  >Sports Club Name</label
                >
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="Andhari Sports Accadamy"
                  autocomplete="given-name"
                  class="block rounded-sm w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 "
                  required
                />
              </span>
            </div>
            <label
              for="email"
              class="block rounded-sm mt-2 text-xs font-semibold text-gray-600 uppercase"
              >E-mail</label
            >
            <input
              id="email"
              type="email"
              name="email"
              placeholder="john.doe@company.com"
              autocomplete="email"
              class="block rounded-sm w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 "
              required
            />
            <label
              for="password"
              class="block rounded-sm mt-2 text-xs font-semibold text-gray-600 uppercase"
              >Password</label
            >
            <input
              id="password"
              type="password"
              name="password"
              placeholder="********"
              autocomplete="new-password"
              class="block rounded-sm w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 "
              required
            />
            <label
              for="password-confirm"
              class="block rounded-sm mt-2 text-xs font-semibold text-gray-600 uppercase"
              >Confirm password</label
            >
            <input
              id="password-confirm"
              type="password"
              name="password-confirm"
              placeholder="********"
              autocomplete="new-password"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 "
              required
            />
            <button
              type="submit"
              class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-600 shadow-lg focus:outline-none hover:bg-gray-800 hover:shadow-none"
            >
              Sign up
            </button>
            <p
              class="flex py-5 justify-between  mt-4 text-xs text-gray-700 cursor-pointer hover:text-black"
            >
              Already registered?
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icons from '../../utils/Icons.vue';
export default {
  components: { Icons },
  name: 'club-registartion',
  methods: {
    toggleRegistration() {
      console.log('clicked');
      this.$emit('toggleRegClub');
    },
  },
};
</script>

<style></style>
