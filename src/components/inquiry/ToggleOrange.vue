<template>
  <ToggleButton
    @change="fetchToggleStatus"
    v-model="status"
    :width="35"
    :height="15"
    color="#FF5733"
  ></ToggleButton>
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      status: true,
    };
  },
  props: ['title'],
  computed: {
    ...mapGetters(['getTagStatus']),
  },
  components: {
    ToggleButton,
  },
  methods: {
    fetchToggleStatus() {
      this.$store
        .dispatch('COMPUTE_TAG_STATUS', {
          action: 'status',
          type: this.status === false ? 'add' : 'remove',
          item: this.title,
        })
        .then(() => {
          this.$store.dispatch('FETCH_TAG_STATUS', { tagStatus: this.getTagStatus });
        });
    },
  },
};
</script>

<style></style>
