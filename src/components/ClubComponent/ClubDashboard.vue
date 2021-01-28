<template>
  <div>
    <div
      class="flex  items-center w-full h-screen  justify-center"
      v-show="!clubData.clubName"
    >
      <club-registration-form />
    </div>
    <div v-show="clubData.clubName">
      <div class="px-10 py-10">
        <club-banner
          :name="clubData.clubName"
          :address="clubData.clubAddress"
          :status="clubData.approved"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ClubRegistrationForm from './ClubRegistrationForm.vue';
import ClubBanner from './ClubBanner.vue';
export default {
  name: 'ClubDashboard',
  components: {
    ClubRegistrationForm,
    ClubBanner,
  },
  data: () => {
    return {};
  },
  mounted() {
    this.$store.dispatch('getClub');
  },
  computed: {
    clubData: function() {
      return this.$store.getters.currentClubData;
    },
  },
};
</script>

<style></style>
