<template>
  <div class="mx-10 my-10">
    <div class="text-2xl text-gray-600 my-5">
      Registration Details For Clubs
    </div>
    <div class="flex space-x-10 ">
      <div class="flex flex-col space-y-4">
        <div>
          <label for="clubname" class="font-medium text-gray-700 block"
            >Name</label
          >
          <input
            type="text"
            class="text-box-app block"
            autocomplete="false"
            placeholder="Andhari Storts Complex"
            v-model="clubData.clubName"
          />
        </div>
        <div>
          <label for="clubAdmin" class="font-medium text-gray-700 block"
            >Admin Name</label
          >
          <input
            type="text"
            class="text-box-app block"
            autocomplete="false"
            placeholder="Jone Doe"
            v-model="clubData.clubAdminName"
          />
        </div>
        <div>
          <label class="font-medium text-gray-700 block">
            Phone No
          </label>
          <input
            type="number"
            class="text-box-app block"
            placeholder="+91989878989"
            v-model="clubData.phone"
          />
        </div>
        <div>
          <label class="font-medium text-gray-700 block">
            Telephone No
          </label>
          <input
            type="number"
            class="text-box-app block"
            placeholder="02282838232"
            v-model="clubData.telePhone"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-4">
        <div>
          <label for="clubname" class="font-medium text-gray-700 block">
            Address
          </label>
          <input
            type="text"
            class="text-box-app block"
            autocomplete="false"
            placeholder="Street Address"
            v-model="clubData.street"
          />
        </div>
        <div>
          <label for="clubname" class="font-medium text-gray-700 block">
            City
          </label>
          <input
            type="text"
            class="text-box-app block"
            autocomplete="false"
            placeholder="Mumbai"
            v-model="clubData.city"
          />
        </div>
        <div>
          <label for="clubname" class="font-medium text-gray-700 block">
            Country
          </label>
          <input
            type="text"
            class="text-box-app block"
            autocomplete="false"
            placeholder="Country"
            v-model="clubData.country"
          />
        </div>
        <div>
          <label for="clubname" class="font-medium text-gray-700 block">
            Pin Code
          </label>
          <input
            type="number"
            class="text-box-app block"
            autocomplete="false"
            placeholder="400011"
            v-model="clubData.pin"
          />
        </div>
      </div>
    </div>
    <button
      class="bg-blue-500 w-full my-5 py-3 shadow-lg uppercase text-white rounded-sm tracking-wider hover:bg-blue-600"
      @click="registerClub"
    >
      Submit
    </button>
  </div>
</template>

<script>
export default {
  name: 'club-registration-form',
  data: () => {
    return {
      clubData: {
        clubName: '',
        street: '',
        city: '',
        state: '',
        pin: '',
        country: '',
        approved: false,
        phone: '',
        clubAdminName: '',
        telePhone: '',
      },
    };
  },
  computed: {
    currentClubData: () => this.$store.getters.currentClubData,
  },
  methods: {
    registerClub() {
      this.$store.dispatch('registerClub', {
        ...this.clubData,
        id: this.$store.getters.getProfileId,
      });
    },
  },
};
</script>
