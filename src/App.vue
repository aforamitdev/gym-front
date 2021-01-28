<template>
  <div id="app" class="font-sans">
    <div class="absolute right-1" @click="$store.dispatch('logout')">
      Logout
    </div>
    <router-view />
  </div>
</template>

<script>
import store from './store/index';
export default {
  name: 'App',
};
</script>
