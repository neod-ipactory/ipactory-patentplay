<template>
  <div>
    <ToggleButton></ToggleButton>
    <!-- <ToggleButton
      :value="customValue"
      :width="customWidth"
      :height="customHeight"
      color="customColor"
    ></ToggleButton>-->
    <!-- <ToggleButton :value="true" :width="35" :height="15" color="#3d9be8"></ToggleButton> -->
    <!-- {{customValue}} / {{customWidth}} / {{customHeight}} / {{customColor}} -->
  </div>
</template>

<script>
import { ToggleButton } from "vue-js-toggle-button";

export default {
  // props: ["customValue", "customWidth", "customHeight", "customColor"],
  components: ToggleButton,
};
</script>

<style>
</style>