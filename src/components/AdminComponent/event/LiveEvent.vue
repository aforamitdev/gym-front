<template>
  <div
    class="px-6 py-6 divide-y-2 divide-gray-400 bg-gray-300 h-screen overflow-hidden"
  >
    <div>
      <div class="text-2xl text-gray-700">State Semi Final</div>
      <div class="text-sm text-blue-500 font-bold">Age Group 8-11</div>
    </div>
    <div class="flex space-x-4 max-h-full">
      <div class="w-1/6 my-2 overflow-y-scroll">
        <div
          v-for="player in playerList"
          :key="player.id"
          @click="selectPlayer(player)"
          class="  mt-2 bg-white py-2 px-2 shadow-sm rounded-sm cursor-pointer "
          :class="[
            selectedPlayer != null
              ? selectedPlayer.id == player.id
                ? 'bg-blue-500 text-white'
                : 'text-gray-500'
              : '',
          ]"
        >
          <div class="flex items-center space-x-2">
            <div class="h-8 w-8 rounded-full bg-gray-600">
              <img src="" alt="" />
            </div>
            <div class="flex flex-col justify-center">
              <div class="text-sm font-bold">
                {{ player.name }} ({{ player.clubName }})
              </div>
              <div class="text-xs">Age {{ player.age }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white my-4 mb-9 h-screen w-full rounded-md  ">
        <div class="px-6 py-6">
          <template v-if="selectedPlayer">
            <player-card
              :eventId="selectedPlayer.id"
              :name="selectedPlayer.name"
              :sheetId="selectedPlayer.sheetId"
              :clubName="selectedPlayer.clubName"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerCard from '../event/PlayerCard.vue';
export default {
  components: { PlayerCard },
  name: 'live-event',
  component: {
    Headers,
    PlayerCard,
  },
  data() {
    return {
      selectedPlayer: null,
      playerList: [
        {
          name: 'Hament Sawent',
          age: 12,
          clubName: 'ACX',
          id: '1323',
          sheetId: '1',
          eventId: '12',
        },
        {
          name: 'Milind Sawant',
          age: 9,
          clubName: 'ACX',
          id: '13223',
          sheetId: '3',
          eventId: '12',
        },
        {
          name: 'Amit Swant',
          age: 3,
          clubName: 'ACX',
          id: '11323',
          sheetId: '5',
          eventId: '12',
        },
      ],
    };
  },
  methods: {
    selectPlayer(id) {
      this.selectedPlayer = id;
    },
  },
};
</script>

<style></style>
