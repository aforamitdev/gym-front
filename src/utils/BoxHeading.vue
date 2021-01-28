<template>
  <div class="text-2xl font-light">
    <div>{{heading}}</div>
    <div class="text-sm text-gray-800">{{subheading}}</div>
  </div>
</template>

<script>
export default {
  name: "SubHeading",
  props: ["heading", "subheading"]
};
</script>

<style>
</style>