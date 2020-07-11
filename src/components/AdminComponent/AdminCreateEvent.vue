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
          <div class="w-1/2 bg-white rounded-sm shadow-sm">
            <div class="text-2xl font-light px-3 py-3">
              <div>Event details</div>
              <div class="text-sm">Basics information about the event</div>
            </div>

            <div class="px-4 py-2">
              <!-- input for  -->
              <label for="EventName" class="text-base font-bold"
                >Event Title</label
              >
              <div class="flex">
                <input
                  type="text"
                  class="border border-gray-400 bg-gray-300 py-2 px-10 rounded-sm text-lg w-full font-normal relative justify-center"
                  v-model="eventTitle"
                />
                <svg
                  class="h-6 w-6 absolute my-2 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path :d="path.home" />
                </svg>
              </div>
            </div>
          </div>
          <!-- crate events ends  -->
          <div class="w-1/2 bg-white rounded-sm shadow-sm">Cheeose LEvel</div>
        </div>
      </div>
    </div>
    <!-- form ends  -->
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import icons from "../icons";
export default {
  name: "create-event",
  data: () => {
    return {
      eventTitle: "",
      eventAddress: "String",
      pin: "Number",
      eventDate: "Date",
    };
  },
  validations: {
    eventTitle: {
      required,
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
