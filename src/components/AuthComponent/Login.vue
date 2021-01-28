<template>
  <div class="bg-gray-300 w-full">
    <div class="mx-2 w-1/2 flex justify-center">
      <div class="space-y-3 sm:col-start-3 sm:col-end-5 col-start-1 col-end-7">
        <div class="flex flex-col justify-center">
          <label for="EmailAddress" class="text-xl text-gray-700 font-semibold"
            >Email</label
          >
          <input
            type="text"
            class="border-gray-400 border-solid border-4 py-2 px-2 rounded-sm font-semibold"
            placeholder="you@example.com"
            v-model="email"
          />
        </div>
        <div class="flex flex-col justify-center">
          <label for="EmailAddress" class="text-xl text-gray-700 font-semibold"
            >Password</label
          >
          <input
            type="password"
            class="border-gray-400 border-solid border-4 py-2 px-2 rounded-sm font-semibold"
            placeholder="Secrate Password"
            v-model="password"
          />
        </div>
        <button
          @click="login"
          class="py-2 px-2 bg-blue-400 w-full hover:bg-blue-500 uppercase text-white text-xl tracking-wide"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-tag';
export default {
  name: 'login-page',
  data: () => {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
