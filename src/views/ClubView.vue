<template>
  <div class="flex">
    <SideBar>
      <ClubSideBar />
    </SideBar>
    <div class="w-full h-screen">
      <router-view name="main" />
    </div>
  </div>
</template>

<script>
import SideBar from '../utils/SideBar';
import ClubSideBar from '../components/ClubComponent/ClubSideBar';
export default {
  name: 'clubView',
  components: {
    SideBar,
    ClubSideBar,
  },
};
</script>
