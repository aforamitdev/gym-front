<template>
  <div class="flex">
    <div>
      <router-view name="main" class="h-screen" />
    </div>
  </div>
</template>

<script>
// import SideBar from '../utils/SideBar';
export default {
  name: "AuthView",
  components: {
    // SideBar,
  }
};
</script>

<style></style>
