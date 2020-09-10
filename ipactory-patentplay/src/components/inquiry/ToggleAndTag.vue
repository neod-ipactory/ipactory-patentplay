<template>
  <div>
    <template v-if="major">
      <!-- <button :class="[tagInfo[2] === '0' ? '' : 'zero']" disabled> -->
      <!-- <button :class="{ zero: !Number(tagInfo[2]) }" disabled>{{ tagInfo[0] }} ({{ tagInfo[2] }})</button> -->
      <ToggleButton
        @change="fetchTagCode('major')"
        v-model="toggleStatus"
        :width="30"
        :height="15"
      ></ToggleButton>
      <button :class="{ zero: !Number(tagInfo[1]) }" disabled>
        {{ tagInfo[0] }} ({{ tagInfo[1] }})
      </button>
    </template>
    <template v-else-if="grade">
      <ToggleButton
        @change="fetchTagCode('grade')"
        v-model="toggleStatus"
        :width="30"
        :height="15"
      ></ToggleButton>
      <button :class="{ zero: !Number(tagInfo[1]) }" disabled>
        {{ tagInfo[0] }}등급 ({{ tagInfo[1] }})
      </button>
    </template>
    <template v-else>
      <ToggleButton
        @change="fetchTagCode('tag')"
        v-model="toggleStatus"
        :width="30"
        :height="15"
      ></ToggleButton>
      <button :class="{ zero: !Number(tagInfo[2]) }" disabled>
        {{ tagInfo[0] }} ({{ tagInfo[2] }})
      </button>
    </template>
  </div>
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      toggleStatus: false,
    };
  },
  props: ['tagInfo', 'major', 'grade'],
  components: {
    ToggleButton,
  },
  computed: {
    ...mapGetters(['getTagStatus']),
  },
  methods: {
    fetchTagCode(actionType) {
      this.$store
        .dispatch('COMPUTE_TAG_STATUS', {
          action: actionType,
          type: this.toggleStatus === true ? 'add' : 'remove',
          item: actionType === 'tag' ? this.tagInfo[1] : this.tagInfo[0],
          tagName: this.tagInfo[0],
          tagCount: actionType === 'tag' ? this.tagInfo[2] : this.tagInfo[1],
        })
        .then(() => {
          this.$store.dispatch('FETCH_TAG_STATUS', { tagStatus: this.getTagStatus });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 181px;

  button {
    width: 135px;
    height: 35px;
    margin: 0 0 5% 3%;
    color: black;
    border: 1px solid #919190;
    border-radius: 3px;
    background-color: #51c0ff;
  }

  .zero {
    background-color: #d0d0d0;
  }
}
</style>
