<template>
  <div class="flex">
    <SideBar>
      <PlayersSideBar />
    </SideBar>
    <div>
      <router-view name="main" />
    </div>
  </div>
</template>

<script>
import SideBar from "../utils/SideBar";
import PlayersSideBar from "../components/PlayersComponent/PlayersSideBar";
export default {
  name: "playersview",
  components: {
    SideBar,
    PlayersSideBar
  }
};
</script>

<style></style>
