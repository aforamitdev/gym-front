<template>
  <div class="flex">
    <SideBar>
      <AdminSideBar />
    </SideBar>
    <div class="w-full">
      <router-view name="main" />
    </div>
  </div>
</template>

<script>
import SideBar from "../utils/SideBar";
import AdminSideBar from "../components/AdminComponent/AdminSideBar";
export default {
  components: {
    SideBar,
    AdminSideBar
  }
};
</script>

<style></style>
