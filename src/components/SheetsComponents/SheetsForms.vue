<template>
  <div class="mx-3 my-10">
    <div class="flex">
      <div class="mr-10">
        <label for="sheetName" class="mr-10">Sheet Name:</label>
        <input type="text" class="border border-gray-600" v-model="SheetName" />
      </div>
      <div class="mr-5">
        <label for="Level">Select Level:</label>
        <select v-model="sheetLevel">
          <option disabled value>Please select one</option>
          <option>LEVEL-1</option>
          <option>LEVEL-2</option>
          <option>LEVEL-3</option>
          <option>LEVEL-4</option>
          <option>LEVEL-5</option>
        </select>
      </div>
      <div
        @click="addNewRow"
        class="border border-gray-600 px-4 py-2 inline-block bg-blue-400 cursor-pointer"
      >
        Add A Row
      </div>
    </div>
    <div v-for="(element, idx) in createSheet" :key="idx" class="my-4">
      <div class="flex">
        <div class="w-auto inline-block border border-gray-600">
          <div class="border border-gray-600 flex">
            <input
              type="text"
              placeholder="Skill Name"
              v-model="element.skill.skillName"
              class="py-2"
            />
            <div class="text-center" @click="addSubSkill"></div>
          </div>
          <div class="flex justify-between">
            <div>
              <div
                v-for="(subSkill, idxs) in element.skill.subSkill"
                :key="idxs"
                class="flex"
              >
                <div>
                  <input
                    type="text"
                    v-model="subSkill.name"
                    placeholder="sub Skill Name"
                    class="inline-block w-32 border border-gray-700 mr-2 p-2"
                  />
                </div>
                <div>
                  <input
                    type="Number"
                    v-model="subSkill.point"
                    placeholder="Point"
                    class="inline-block w-24 border border-gray-600 p-2"
                  />
                </div>
                <span v-if="idxs == 0" @click="addSubSkill(idx, idxs)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="20px"
                    height="20px"
                    class="cursor-pointermx-2 mx-2 my-2 fill-current text-teal-500 hover:text-blue-600 inline-block"
                  >
                    <path
                      d="M15,28.5C7.556,28.5,1.5,22.444,1.5,15S7.556,1.5,15,1.5S28.5,7.556,28.5,15S22.444,28.5,15,28.5z"
                    />
                    <path
                      d="M15,2c7.168,0,13,5.832,13,13s-5.832,13-13,13S2,22.168,2,15S7.832,2,15,2 M15,1 C7.268,1,1,7.268,1,15s6.268,14,14,14s14-6.268,14-14S22.732,1,15,1L15,1z"
                    />
                    <path fill="#fff" d="M8 14H22V16H8z" />
                    <path
                      fill="#fff"
                      d="M8 14H22V16H8z"
                      transform="rotate(90 15 15)"
                    />
                  </svg>
                </span>
                <span v-else @click="removeSubSkill(idx, idxs)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="20px"
                    height="20px"
                    class="cursor-pointer mx-2 my-2 fill-current text-red-500 hover:text-red-600 inline-block"
                  >
                    <path
                      d="M504.1 256C504.1 119 393 7.9 256 7.9S7.9 119 7.9 256 119 504.1 256 504.1 504.1 393 504.1 256z"
                    />
                    <path
                      fill="#FFF"
                      d="M285 256l72.5-84.2c7.9-9.2 6.9-23-2.3-31-9.2-7.9-23-6.9-30.9 2.3L256 222.4l-68.2-79.2c-7.9-9.2-21.8-10.2-31-2.3-9.2 7.9-10.2 21.8-2.3 31L227 256l-72.5 84.2c-7.9 9.2-6.9 23 2.3 31 4.1 3.6 9.2 5.3 14.3 5.3 6.2 0 12.3-2.6 16.6-7.6l68.2-79.2 68.2 79.2c4.3 5 10.5 7.6 16.6 7.6 5.1 0 10.2-1.7 14.3-5.3 9.2-7.9 10.2-21.8 2.3-31L285 256z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="(element, idxe) in createSheet[idx].subSkillErrors"
          :key="idxe"
          class="mx-1 border border-gray-600"
        >
          <div class="flex">
            <div v-if="idxe == 0" class="border border-gray-600 p-1">
              <div @click="addSkillError(idx, idxe)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="20px"
                  height="20px"
                  class="cursor-pointer mx-2 my-2 fill-current text-teal-500 hover:text-blue-600 inline-block"
                >
                  <path
                    d="M15,28.5C7.556,28.5,1.5,22.444,1.5,15S7.556,1.5,15,1.5S28.5,7.556,28.5,15S22.444,28.5,15,28.5z"
                  />
                  <path
                    d="M15,2c7.168,0,13,5.832,13,13s-5.832,13-13,13S2,22.168,2,15S7.832,2,15,2 M15,1 C7.268,1,1,7.268,1,15s6.268,14,14,14s14-6.268,14-14S22.732,1,15,1L15,1z"
                  />
                  <path fill="#fff" d="M8 14H22V16H8z" />
                  <path
                    fill="#fff"
                    d="M8 14H22V16H8z"
                    transform="rotate(90 15 15)"
                  />
                </svg>
              </div>
              <div @click="removeSkillError(idx, idxe)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="20px"
                  height="20px"
                  class="cursor-pointer mx-2 my-2 fill-current text-red-500 hover:text-red-600 inline-block"
                >
                  <path
                    d="M504.1 256C504.1 119 393 7.9 256 7.9S7.9 119 7.9 256 119 504.1 256 504.1 504.1 393 504.1 256z"
                  />
                  <path
                    fill="#FFF"
                    d="M285 256l72.5-84.2c7.9-9.2 6.9-23-2.3-31-9.2-7.9-23-6.9-30.9 2.3L256 222.4l-68.2-79.2c-7.9-9.2-21.8-10.2-31-2.3-9.2 7.9-10.2 21.8-2.3 31L227 256l-72.5 84.2c-7.9 9.2-6.9 23 2.3 31 4.1 3.6 9.2 5.3 14.3 5.3 6.2 0 12.3-2.6 16.6-7.6l68.2-79.2 68.2 79.2c4.3 5 10.5 7.6 16.6 7.6 5.1 0 10.2-1.7 14.3-5.3 9.2-7.9 10.2-21.8 2.3-31L285 256z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <input
                    type="text"
                    v-model="element.name"
                    class="border border-gray-600 py-2 inline-block"
                    placeholder="Skill Error Name"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    v-model="element.point"
                    class="border border-gray-600 py-2 inline-block"
                    placeholder="Skill Error Point"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full bg-blue-500 py-3 my-3 shadow-sm uppercase text-center text-white"
      @click="createSheetButton"
    >
      Submit
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
let i = 0;
export default {
  name: 'app',
  data: () => {
    return {
      SheetName: '',
      sheetLevel: '',
      createSheet: [],
    };
  },
  methods: {
    addNewRow: function() {
      let sheetTamplet = {
          skill: {
            skillName: '',
            subSkill: [{ name: '', point: '' }],
          },
          subSkillErrors: [{ name: '', point: '' }],
        },
        i = i + 1;
      // console.log(a);
      // this.sheetData.id = this.sheetData.id + 1;
      this.createSheet.push(sheetTamplet);
    },
    addSubSkill: function(idx, idxs) {
      this.createSheet[idx].skill.subSkill.push({ name: '', point: '' });
    },
    removeSubSkill: function(idx, idxs) {
      this.createSheet[idx].skill.subSkill.splice(idxs, 1);
      console.log(idx, idxs);
    },
    addSkillError: function(idx, idxe) {
      this.createSheet[idx].subSkillErrors.push({ name: '', point: '' });
    },
    removeSkillError: function(idx, idxe) {
      this.createSheet[idx].subSkillErrors.pop();
    },
    createSheetButton: function() {
      console.log(this.createSheet);
    },
  },
};
</script>
