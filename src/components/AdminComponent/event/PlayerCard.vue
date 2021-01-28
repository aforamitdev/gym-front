<template>
  <div class=" space-y-4">
    <div class="flex space-x-8">
      <div class="font-bold text-gray-800 w-60">{{ name }}</div>
      <div class="text-gray-800">{{ clubName }}</div>
    </div>
    <div class="grid grid-cols-7">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div>E'Score</div>
    </div>
    <div class="divide-y-2 space-y-3">
      <div class="flex items-center space-x-4  ">
        <div class="text-3xl">A</div>
        <div class="w-full ">
          <div
            class="grid grid-cols-7 border-solid auto-cols-max 	 border-gray-300"
          >
            <div>Mount</div>
            <div class="text-gray-400">Point</div>
            <div>Bend Leg</div>
            <div>Bend Arm</div>
            <div>Toe Flex</div>
            <div>Leg Sepration</div>
          </div>
          <div class="grid grid-cols-7 border-solid 	 border-gray-300 space-x-2">
            <div>UpStart</div>
            <div>0.8</div>
            <div>0.20</div>
            <div>0.20</div>
            <div>0.10</div>
            <div>0.20</div>
          </div>
        </div>
      </div>
      <!-- B -->
      <div class="flex items-center space-x-4">
        <div class="text-3xl">B</div>
        <div class="w-full">
          <div class="grid grid-cols-7 border-solid border-gray-300">
            <div>Circles</div>
            <div class="text-gray-400">Point</div>
            <div>Bend Leg</div>
            <div>Bend Arm</div>
            <div>Toe Flex</div>
            <div>Leg Sepration</div>
          </div>
          <div class="grid grid-cols-7 border-solid border-gray-300">
            <div>
              <div>Back Hip Circle</div>
              <div>Free Hip Circle</div>
            </div>
            <div>
              <div>0.6</div>
              <div>0.8</div>
            </div>
            <div>0.20</div>
            <div>0.20</div>
            <div>0.10</div>
            <div>0.20</div>
          </div>
        </div>
      </div>
      <!-- C -->
      <div class="flex items-center space-x-4">
        <div class="text-3xl">C</div>
        <div class="w-full">
          <div class="grid grid-cols-7 border-solid 	 border-gray-300">
            <div>N.A</div>
            <div class="text-gray-400">Point</div>
            <div>Havitation</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="grid grid-cols-7 border-solid 	 border-gray-300">
            <div>
              <div>HB Catch</div>
            </div>
            <div>
              <div>0.8</div>
            </div>
            <div>0.30</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <!-- D -->
      <div class="flex items-center space-x-4">
        <div class="text-3xl">D</div>
        <div class="w-full">
          <div class="grid grid-cols-7 border-solid 	 border-gray-300">
            <div>N.A</div>
            <div class="text-gray-400">Point</div>
            <div>Bend Leg</div>
            <div>Bend Arm</div>
            <div>Toe Flex</div>
            <div>Leg Sepration</div>
          </div>
          <div class="grid grid-cols-7 border-solid 	 border-gray-300">
            <div>
              <div>HB Upstart</div>
            </div>
            <div>
              <div>0.8</div>
            </div>
            <div>0.20</div>
            <div>0.20</div>
            <div>0.10</div>
            <div>0.20</div>
          </div>
        </div>
      </div>
      <!-- E -->
      <div class="flex items-center space-x-4">
        <div class="text-3xl">E</div>
        <div class="w-full">
          <div class="grid grid-cols-7 border-solid 	 border-gray-300">
            <div class="w-full">HB Element</div>
            <div class="text-gray-400">Point</div>
            <div>Missing Cast 90</div>
            <div>Bend Leg</div>
            <div>Entire Position</div>
            <div></div>
          </div>
          <div class="grid grid-cols-7 border-solid 	 border-gray-300">
            <div>
              <div>Backpull over/3/4 Gient</div>
            </div>
            <div>
              <div>0.8</div>
            </div>
            <div>0.20</div>
            <div>0.20</div>
            <div>0.30</div>
            <div></div>
          </div>
        </div>
      </div>
      <!-- F -->
      <div class="flex items-center space-x-4">
        <div class="text-3xl">F</div>
        <div class="w-full">
          <div class="grid grid-cols-7 border-solid 	 border-gray-300">
            <div class="w-full">Cast</div>
            <div class="text-gray-400">Point</div>
            <div>Missing cast 90</div>
            <div>Neck Back</div>
            <div>Leanding</div>
            <div></div>
          </div>
          <div class="grid grid-cols-7 border-solid 	 border-gray-300">
            <div>
              <div>Back Salto tuck or Strach</div>
            </div>
            <div>
              <div>0.1</div>
            </div>
            <div>0.20</div>
            <div>0.20</div>
            <div>0.20</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* 




*/

export default {
  name: 'player-card',
  props: ['name', 'id', 'sheetId', 'judgeId', 'eventId', 'clubName'],
  watch: {
    sheetId() {
      console.log('/api request for sheets ');
    },
  },
};
</script>

<style></style>
