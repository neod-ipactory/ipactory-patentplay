<template>
  <div v-if="getCategoryCount.length > 0" class="all-tags">
    <section class="tag-container nine">
      <button class="tag-title" disabled>
        <template>{{ getCategoryCount[0][0] }} ({{ getCategoryCount[0][1] }})</template>
      </button>
      <div class="tag-wrapper">
        <ToggleAndTag v-for="tag in getNine" :tagInfo="tag" :key="tag[0]"></ToggleAndTag>
      </div>
    </section>
    <section class="tag-container national">
      <button class="tag-title" disabled>국가표준분류</button>
      <span class="national-title">{{ getCategoryCount[1][0] }} ({{ getCategoryCount[1][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 0, 16)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[2][0] }} ({{ getCategoryCount[2][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 16, 25)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[3][0] }} ({{ getCategoryCount[3][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 25, 37)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[4][0] }} ({{ getCategoryCount[4][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 37, 49)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[5][0] }} ({{ getCategoryCount[5][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 49, 64)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[6][0] }} ({{ getCategoryCount[6][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 64, 72)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[7][0] }} ({{ getCategoryCount[7][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 72, 83)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[8][0] }} ({{ getCategoryCount[8][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 83, 99)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[9][0] }} ({{ getCategoryCount[9][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 99, 112)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[10][0] }} ({{ getCategoryCount[10][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 112, 124)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[11][0] }} ({{ getCategoryCount[11][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 124, 145)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[12][0] }} ({{ getCategoryCount[12][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 145, 161)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
    </section>
    <section class="tag-container ict">
      <button class="tag-title" disabled>ICT분류</button>
      <span class="national-title">{{ getCategoryCount[13][0] }} ({{ getCategoryCount[13][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 0, 6)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[14][0] }} ({{ getCategoryCount[14][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 6, 9)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[15][0] }} ({{ getCategoryCount[15][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 9, 13)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[16][0] }} ({{ getCategoryCount[16][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 13, 17)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[17][0] }} ({{ getCategoryCount[17][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 17, 21)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[18][0] }} ({{ getCategoryCount[18][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 21, 27)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[19][0] }} ({{ getCategoryCount[19][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 27, 30)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[20][0] }} ({{ getCategoryCount[20][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 30, 35)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[21][0] }} ({{ getCategoryCount[21][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 35, 42)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">{{ getCategoryCount[22][0] }} ({{ getCategoryCount[22][1] }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 42, 46)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
    </section>
    <section class="tag-container techTheme">
      <button
        class="tag-title"
        disabled
      >{{ getCategoryCount[23][0] }} ({{ getCategoryCount[23][1] }})</button>
      <div class="tag-wrapper">
        <ToggleAndTag v-for="tag in getTechTheme" :tagInfo="tag" :key="tag[0]"></ToggleAndTag>
      </div>
    </section>
    <section class="tag-container major">
      <button class="tag-title" disabled>학과 ({{ this.countMajorGrade(getMajor) }})</button>
      <div class="tag-wrapper">
        <ToggleAndTag v-for="tag in getMajor" :tagInfo="tag" :major="true" :key="tag[0]"></ToggleAndTag>
      </div>
    </section>
    <section class="tag-container grade">
      <button class="tag-title" disabled>등급 ({{ this.countMajorGrade(getGrade) }})</button>
      <div class="tag-wrapper">
        <ToggleAndTag v-for="tag in getGrade" :tagInfo="tag" :grade="true" :key="tag[0]"></ToggleAndTag>
      </div>
    </section>
  </div>
</template>

<script>
import ToggleAndTag from "./ToggleAndTag.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "getNine",
      "getNationalStandard",
      "getIct",
      "getTechTheme",
      "getMajor",
      "getGrade",
      "getCategoryCount",
    ]),
  },
  methods: {
    countTags(title) {
      let count = 0;
      let tagTitle = title;
      tagTitle.map((tag) => (count += Number(tag[2])));
      return count;
    },
    countMajorGrade(title) {
      let count = 0;
      let tagTitle = title;
      tagTitle.map((tag) => (count += Number(tag[1])));
      return count;
    },
    divideTagCategory(category, start, end) {
      return category.slice(start, end);
    },
  },
  components: {
    ToggleAndTag,
  },
  created() {
    this.$store.dispatch("FETCH_ALL_TAG");
  },
};
</script>

<style lang="scss" scoped>
.all-tags {
  .tag-container {
    width: 100%;
    padding: 2%;
    margin-bottom: 5%;
    font-size: 15px;
    border: 1px solid #919190;
    border-radius: 10px;

    .tag-title {
      width: 150px;
      height: 30px;
      display: block;
      color: black;
      background-color: #f2ff00;
      border: 1px solid #919190;
      border-radius: 3px;
    }

    .national-title {
      display: block;
      font-size: 18px;
      margin: 2% 0 1% 0;
    }

    .tag-wrapper {
      display: flex;
      flex-wrap: wrap;
      margin-top: 2%;
      padding-bottom: 2%;
    }

    &.nine {
      background-color: blanchedalmond;
    }
    &.national {
      background-color: #ffc8fc;
    }
    &.ict {
      background-color: #b6d7a8;
    }
    &.techTheme {
      background-color: #ffb02e;
    }
    &.major {
      background-color: #ff7979;
    }
    &.grade {
      background-color: #ff974f;
    }
  }
}
</style>
