<template>
  <div>
    <nav class="flex justify-between w-full items-center px-6 bg-heading-grad">
      <div class="w-36">
        <img src="http://www.ptks.co.in/logo1.png" alt="PTKda logo" />
      </div>
      <div class="text-3xl text-white font-bold">
        Prabodhankar Thackeray Krida Sankul
      </div>
      <div class="flex">
        <div class="text-gray-300 underline mx-2 px-2 py-4 text">About</div>
        <div class="text-gray-300 underline mx-2 px-2 py-4 text">
          Contact Us
        </div>
      </div>
      <div class="flex">
        <router-link to="/auth/login">
          <button
            class="px-6 py-2 mx-2 bg-gray-400 rounded-sm uppercase bg-gradient-blue-to-purple text-white font-medium"
          >
            Login
          </button>
        </router-link>
        <router-link to="/auth/register">
          <button
            class="px-6 py-2 mx-2 bg-gray-400 rounded-sm uppercase bg-gradient-blue-to-purple text-white font-medium"
          >
            Register
          </button>
        </router-link>
      </div>
    </nav>
    <div>
      body
      <div><button @click="$store.dispatch('test')">gtest</button></div>
    </div>
    <div>footer section</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
