<template>
  <div
    class="bg-white shadow-sm py-2 px-2 flex items-center rounded-sm justify-between"
  >
    <div class="text-2xl text-gray-800 ">
      {{ name }}
      <div class="flex text-xs  text-gray-800 space-x-1 ">
        <div>
          {{ address ? address.street : null }}
        </div>
        <div>
          {{ address ? address.city : null }}
        </div>
        <div>
          {{ address ? address.pin : null }}
        </div>
      </div>
    </div>
    <div class="bg-red-400 px-2  text-white rounded-full uppercase">
      {{ !status ? 'Require Activation' : 'Activated' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'club-banner',
  props: ['name', 'address', 'status'],
  data: () => {
    return {};
  },
};
</script>

<style></style>
