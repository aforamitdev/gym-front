<template>
  <div class="flex ">

    <div>
      {{heading}}</div>

    <svg
      class="fill-current  text-gray-600"
      width="18"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path :d="svg" />
    </svg>

  </div>
</template>

<script>
export default {
  name: "Admin_Top_manage_event",
  props: ["heading", "svg"]
};
</script>

<style>
</style>