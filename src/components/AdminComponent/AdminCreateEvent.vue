<template>
  <div class="bg-gray-300 h-screen w-full">
    <div>
      <headers heading="Create Event" icon="event" />
    </div>
    <div class="flex mx-6 space-x-2">
      <div>
        <event-form />
      </div>
      <div class="w-full min-h-full bg-white rounded-lg">
        <event-sheet />
      </div>
    </div>
  </div>
  <!-- forms  -->

  <!-- form ends  -->
</template>

<script>
import { createHelpers } from 'vuex-map-fields';
import { required } from 'vuelidate/lib/validators';
import Headers from './Headers.vue';
import EventForm from './event/EventForm.vue';
import icons from '../icons';
import EventSheet from './event/EventSheet.vue';
export default {
  name: 'create-event',
  components: {
    EventForm,
    Headers,
    EventSheet,
  },
  data: () => {
    return {
      eventData: {
        title: '',
        description: '',
        location: '',
        eventDate: '',
        registrationDue: '',
        reportingTime: '',
      },
    };
  },
  methods: {
    createEvent() {
      this.$store.dispatch('eventCreate', this.eventData);
    },
  },
  computed: {
    path() {
      return icons;
    },
  },
};
</script>

<style></style>
