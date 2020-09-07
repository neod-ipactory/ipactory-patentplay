<template>
  <ToggleButton v-model="toggleStatus" :value="true" :width="35" :height="15" color="#FF5733"></ToggleButton>
</template>

<script>
import { ToggleButton } from "vue-js-toggle-button";

export default {
  data() {
    return {
      toggleStatus: "",
    };
  },
  components: {
    ToggleButton,
  },
  // methods: {
  //   handleToggleStatus() {
  //     this.$emit("handle-toggle", this.toggleStatus);
  //   },
  // },
};
</script>

<style></style>
