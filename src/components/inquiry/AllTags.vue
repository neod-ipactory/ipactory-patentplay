<template>
  <div class="all-tags">
    <section class="tag-container nine">
      <button class="tag-title" disabled>9T분류({{ this.countTags(getNine) }})</button>
      <div class="tag-wrapper">
        <ToggleAndTag v-for="tag in getNine" :tagInfo="tag" :key="tag[0]"></ToggleAndTag>
      </div>
    </section>
    <section class="tag-container national">
      <button class="tag-title" disabled>국가표준분류 ({{ this.countTags(getNationalStandard) }})</button>
      <span
        class="national-title"
      >기계 ({{ this.countTags(divideTagCategory(this.getNationalStandard, 0, 16)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 0, 16)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >재료 ({{ this.countTags(divideTagCategory(this.getNationalStandard, 16, 25)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 16, 25)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >화공 ({{ this.countTags(divideTagCategory(this.getNationalStandard, 25, 37)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 25, 37)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >전기전자 ({{ this.countTags(divideTagCategory(this.getNationalStandard, 37, 49)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 37, 49)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >정보통신 ({{ this.countTags(divideTagCategory(this.getNationalStandard, 49, 64)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 49, 64)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >에너지자원 ({{ this.countTags(divideTagCategory(this.getNationalStandard, 64, 72)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 64, 72)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >원자력 ({{ this.countTags(divideTagCategory(this.getNationalStandard, 72, 83)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 72, 83)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >환경 ({{ this.countTags(divideTagCategory(this.getNationalStandard, 83, 99)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 83, 99)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >건설교통 ({{ this.countTags(divideTagCategory(this.getNationalStandard, 99, 112)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 99, 112)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >생명과학 ({{ this.countTags(divideTagCategory(this.getNationalStandard, 112, 124)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 112, 124)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >농수산식품 ({{ this.countTags(divideTagCategory(this.getNationalStandard, 124, 145)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getNationalStandard, 124, 145)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >보건의료 ({{ this.countTags(divideTagCategory(this.getNationalStandard, 145, 161)) }})</span>
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
      <button class="tag-title" disabled>ICT분류 ({{ this.countTags(getIct) }})</button>
      <span class="national-title">창조융합 ({{ this.countTags(divideTagCategory(this.getIct, 0, 6)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 0, 6)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">이동통신 ({{ this.countTags(divideTagCategory(this.getIct, 6, 9)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 6, 9)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >네트워크 ({{ this.countTags(divideTagCategory(this.getIct, 9, 13)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 9, 13)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >전파위성 ({{ this.countTags(divideTagCategory(this.getIct, 13, 17)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 13, 17)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span class="national-title">방송 ({{ this.countTags(divideTagCategory(this.getIct, 17, 21)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 17, 21)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >정보보호 ({{ this.countTags(divideTagCategory(this.getIct, 21, 27)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 21, 27)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >기반SW ({{ this.countTags(divideTagCategory(this.getIct, 27, 30)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 27, 30)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >융합SW ({{ this.countTags(divideTagCategory(this.getIct, 30, 35)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 30, 35)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >스마트서비스 ({{ this.countTags(divideTagCategory(this.getIct, 35, 42)) }})</span>
      <template>
        <div class="tag-wrapper">
          <ToggleAndTag
            v-for="tag in divideTagCategory(this.getIct, 35, 42)"
            :tagInfo="tag"
            :key="tag[0]"
          ></ToggleAndTag>
        </div>
      </template>
      <span
        class="national-title"
      >디지털콘텐츠 ({{ this.countTags(divideTagCategory(this.getIct, 42, 46)) }})</span>
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
      <button class="tag-title" disabled>기술 Theme({{ this.countTags(getTechTheme) }})</button>
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
