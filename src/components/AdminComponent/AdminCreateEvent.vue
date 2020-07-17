<template>
  <div class="bg-gray-300 h-full w-full">
    <div class="flex">
      <div class="mx-2 my-2">
        <div class="text-2xl">
          <span class="text-gray-900">Admin /</span>
          <span class="text-gray-700">Create Event</span>
        </div>
      </div>
    </div>
    <!-- forms  -->
    <div>
      <div class="w-full mx-4">
        <div class="flex space-x-6">
          <!-- create ebent starts -->
          <div class="w-1/2 bg-white rounded-sm">
            <BoxHeading
              heading="Event Details"
              subheading="Basics information about the event"
              class="px-2 py-2"
            />
            <div class="px-4 py-2 space-y-2">
              <!-- input for  -->
              <label for="EventName" class="text-base font-bold my-2">Event Title</label>
              <div class="flex my-2">
                <input
                  type="text"
                  class="border border-gray-400 bg-gray-300 py-2 px-10 rounded-sm text-lg w-full font-normal relative justify-center"
                  v-model="eventTitle"
                />
                <svg class="h-6 w-6 absolute my-2 mx-2" xmlns="http://www.w3.org/2000/svg">
                  <path :d="path.home" />
                </svg>
              </div>
              <label for="EventVanue" class="text-base font-bold">Event Vanue</label>
              <div class="flex">
                <input
                  type="text"
                  class="border border-gray-400 bg-gray-300 py-2 px-10 rounded-sm text-lg w-full font-normal relative justify-center"
                  v-model="eventAddress"
                />
                <svg class="h-6 w-6 absolute my-2 mx-2" xmlns="http://www.w3.org/2000/svg">
                  <path :d="path.map" />
                </svg>
              </div>
              <!-- date input -->
              <div class="flex space-x-3">
                <div class="w-1/2">
                  <label for="EventVanue" class="text-base font-bold">Event Vanue</label>
                  <div class="flex items-center">
                    <input
                      type="date"
                      class="border border-gray-400 bg-gray-300 py-2 px-10 rounded-sm text-lg w-full font-normal relative justify-center"
                      v-model="eventDate"
                    />
                    <svg class="h-6 w-6 absolute my-2 mx-2" xmlns="http://www.w3.org/2000/svg">
                      <path :d="path.date" />
                    </svg>
                  </div>
                </div>
                <!-- date time time -->
                <div class="w-1/2">
                  <label for="EventVanue" class="text-base font-bold">Event Time</label>
                  <div class="flex">
                    <input
                      type="time"
                      class="border border-gray-400 bg-gray-300 py-2 px-10 rounded-sm text-lg w-full font-normal relative justify-center"
                      v-model="eventTime"
                    />
                    <svg class="h-6 w-6 absolute my-2 mx-2" xmlns="http://www.w3.org/2000/svg">
                      <path :d="path.time" />
                    </svg>
                  </div>
                </div>
                <!-- date time time ends  -->
              </div>
              <!-- date input time -->
            </div>
          </div>
          <!-- crate events ends  -->

          <div class="w-1/2 bg-white rounded-sm">
            <BoxHeading
              heading="Event Level"
              subheading="Choose Appropriate level for the Event"
              class="px-2 py-2"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- form ends  -->
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import BoxHeading from "../../utils/BoxHeading";
import icons from "../icons";
export default {
  name: "create-event",
  components: {
    BoxHeading
  },
  data: () => {
    return {
      eventTitle: "",
      eventAddress: "",
      pin: "",
      eventDate: "",
      eventTime: ""
    };
  },
  validations: {
    eventTitle: {
      required
    }
  },
  computed: {
    path() {
      return icons;
    }
  }
};
</script>

<style></style>
