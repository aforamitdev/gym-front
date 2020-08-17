<template>
  <div class="bg-gray-300 flex  h-full">
    <div class="w-full mx-2">
      <div class="mx-2 my-2">Manage Events</div>
      <div class="flex">
        some dashboard
      </div>
      <table class="table-auto w-full text-center justify-evenly px-6">
        <thead class="text-center">
          <tr class="mx-2 text-center">
            <th>
              <TopMenuBar
                heading="Event"
                :svg="path.sort"
              />
            </th>
            <th>
              <TopMenuBar
                heading="Location"
                :svg="path.sort"
              />
            </th>
            <th>
              <TopMenuBar
                heading="Time And Date"
                :svg="path.sort"
              />
            </th>
            <th>
              <TopMenuBar
                heading="Number Of Players"
                :svg="path.sort"
              />
            </th>
            <th>

              <TopMenuBar
                heading="Number Of Players"
                :svg="path.sort"
              />
            </th>

            <th>
              <TopMenuBar
                heading="Level"
                :svg="path.sort"
              />
            </th>
            <th>

              <TopMenuBar
                heading="Status"
                :svg="path.sort"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="event in events"
            :key="event._id"
            class="px-1 py-2 rounded-sm shadow-sm bg-white"
          >
            <td class="border px-4 py-2">{{event.title}}</td>
            <td class="border px-4 py-2">{{event.location}}</td>
            <td class="border px-4 py-2">{{event.eventDate | moment("d/MMMM/YY")}}</td>
            <td class="border px-4 py-2 text-blue-500">{{event.participant.length}}</td>
            <td class="border px-4 py-2 text-blue-500"> {{event.clubparticipant.length}}</td>
            <td class="border px-4 py-2">{{event.level}}</td>
            <td class="border px-4 py-2">status</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
import icons from "../icons";
import TopMenuBar from "./Admin_Top_Manage_event";
export default {
  name: "manage-event",
  components: {
    TopMenuBar
  },
  mounted() {
    this.$store.dispatch("getEvents");
  },
  computed: {
    path() {
      return icons;
    },
    events() {
      // console.log(this.$store.state, "events in comuted");
      return this.$store.state.AdminStore.allevents;
    }
  }
};
</script>

<style></style>
