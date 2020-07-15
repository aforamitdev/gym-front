<template>
  <div class=" flex">
    <div class="w-1/3">
      sidebar
    </div>
    <div>
      as
      <div v-if="step === 0">
        <div>
          <div>
            <input
              type="text"
              v-model="name"
              class="border-gray-900 border-solid border"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="email"
              class="border-gray-900 border-solid border"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="password"
              class="border-gray-900 border-solid border"
            />
          </div>
        </div>
      </div>
      <div v-if="step === 1">
        this is step 1
        <input type="radio" value="student" v-model="option" />
        <label for="student">studetn</label>
        <input type="radio" value="club" v-model="option" v-on:change="log" />
        <label for="club">club</label>
        <div v-if="option === 'club'">
          <div>load clubs name</div>
        </div>
        <div v-else>
          <input type="clubname" />
        </div>
      </div>
      <div v-if="step === 2">
        this is step 2
        <div></div>
      </div>

      <div v-show="step > 0">
        <button @click="step--">prevous</button>
      </div>
      <button @click="step++">next</button>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  name: "login",
  data: () => {
    return {
      step: 0,
      option: "",
    };
  },
  methods: {
    log() {
      console.log("clo");
    },
  },
  computed: {
    ...mapFields([
      "userDetail.name",
      "userDetail.email",
      "userDetail.password",
      "userDetail.role",
      "userDetail.clubname",
    ]),
  },
};
</script>

<style></style>
