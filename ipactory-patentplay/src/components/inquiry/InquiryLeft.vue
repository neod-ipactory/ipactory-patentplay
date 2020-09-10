<template>
  <div class="main-left">
    <div class="tags-container">
      <section class="selected-tags-container">
        <span v-if="getSelectedTags.tagName.length > 0">선택된 TAG</span>
        <span v-else>선택된 TAG가 없습니다.</span>
        <div v-if="getSelectedTags.tagName.length > 0" class="selected-tags">
          <button v-for="tag in getSelectedTags.tagName" class="selected-tag" :key="tag">{{ tag }}</button>
        </div>
      </section>
      <section class="tags-category">
        <button disabled>TAGS</button>
        <button>9T분류</button>
        <button>국가표준분류</button>
        <button>ICT분류</button>
        <button>기술 Theme</button>
        <button>초기화</button>
      </section>
      <section class="tags-condition">
        <ToggleButton
          @change="fetchToggleStatus('andOr')"
          v-model="andOr"
          :width="35"
          :height="15"
          color="#3d9be8"
        ></ToggleButton>
        <button class="or">TAGS OR 검색</button>
        <div id="line"></div>
        <span>기간</span>
        <vc-date-picker
          v-model="date"
          mode="range"
          color="red"
          is-dark
          :max-date="new Date()"
          id="date-picker"
        ></vc-date-picker>
        <button @click="fetchDate" class="ask">조회</button>
      </section>
      <section class="toggles">
        <div class="toggle-left">
          <div class="toggle-container">
            <ToggleButton
              @change="fetchToggleStatus('stu')"
              v-model="stu"
              :width="35"
              :height="15"
              color="#3d9be8"
            ></ToggleButton>
            <span>서울과기대 단독 출원인/관리자</span>
          </div>
        </div>
        <div class="toggle-right">
          <div class="toggle-container">
            <ToggleOrange title="출원"></ToggleOrange>
            <span>출원중</span>
          </div>
          <div class="toggle-container">
            <ToggleOrange title="공개"></ToggleOrange>
            <span>공개</span>
          </div>
          <div class="toggle-container">
            <ToggleOrange title="심사중"></ToggleOrange>
            <span>심사중</span>
          </div>
          <div class="toggle-container">
            <ToggleOrange title="등록"></ToggleOrange>
            <span>등록유지</span>
          </div>
          <div class="toggle-container">
            <ToggleOrange title="거절/포기/취하"></ToggleOrange>
            <span>거절/포기/취하</span>
          </div>
        </div>
      </section>
      <AllTags></AllTags>
    </div>
  </div>
</template>

<script>
import AllTags from "./AllTags.vue";
import ToggleOrange from "./ToggleOrange.vue";
import { ToggleButton } from "vue-js-toggle-button";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      date: new Date(),
      toggleStatus: false,
      andOr: false,
      stu: false,
    };
  },
  components: {
    ToggleButton,
    ToggleOrange,
    AllTags,
  },
  computed: {
    ...mapGetters(["getTagStatus", "getSelectedTags"]),
  },
  methods: {
    handleVcalendar() {
      const calendarInput = document.querySelector(
        "#app > div > div.page-content >  div.main-content > div.main > div.main-left >  div.tags-container > section.tags-condition > span > input"
      );
      calendarInput.style.color = "black";
      calendarInput.value = new Date().toISOString().substring(0, 10);
    },
    fetchDate() {
      if (this.date !== null) {
        const startDate = this.date.start.toISOString().substring(0, 10);
        const endDate = this.date.end.toISOString().substring(0, 10);
        this.$store
          .dispatch("COMPUTE_TAG_DATE", {
            startDate,
            endDate,
          })
          .then(() => {
            this.$store.dispatch("FETCH_TAG_STATUS", {
              tagStatus: this.getTagStatus,
            });
          });
      }
    },
    fetchToggleStatus(actionType) {
      this.$store
        .dispatch("COMPUTE_TAG_STATUS", {
          action: actionType === "andOr" ? "andOr" : "stu",
          type: "",
          item: actionType === "andOr" ? this.andOr : this.stu,
        })
        .then(() => {
          this.$store.dispatch("FETCH_TAG_STATUS", {
            tagStatus: this.getTagStatus,
          });
        });
    },
  },
  mounted() {
    this.handleVcalendar();
  },
};
</script>

<style lang="scss" scoped>
.main-left {
  width: 60%;
  padding-left: 2%;

  .tags-container {
    margin-top: 1%;

    .selected-tags-container {
      font-size: 20px;

      .selected-tags {
        width: 100%;
        margin-bottom: 3%;
        padding: 1%;
        background-color: #486fff;
        border: none;
        border-radius: 3px;
        border-bottom: 2px solid #919191;

        .selected-tag {
          width: 140px;
          margin: 0 10px 10px 0;
          padding: 1%;
          background-color: #fff891;
          border: 1px solid #919191;
          border-radius: 3px;
        }
      }
    }

    .tags-category {
      margin-top: 2%;
      padding-top: 2%;
      height: 60px;
      margin-bottom: 3%;

      button {
        height: 100%;
        margin-right: 1%;
        padding: 0 20px;
        font-size: 20px;
        border: 1px solid black;
        border-radius: 3px;

        &:first-child {
          color: black;
        }
        &:nth-child(2) {
          background-color: #ea9999;
        }
        &:nth-child(3) {
          background-color: #8e7cc3;
        }
        &:nth-child(4) {
          background-color: #6fa8dc;
        }
        &:nth-child(5) {
          background-color: #2b78e4;
        }
        &:nth-child(6) {
          background-color: #e69138;
        }
      }
    }
  }

  .tags-condition {
    width: 460px;
    height: 35px;
    display: flex;
    align-items: center;
    font-size: 13px;
    margin-left: auto;

    .or {
      height: 100%;
      margin: 0 2%;
      padding: 5px;
      background-color: #76a5af;
    }

    #line {
      width: 1px;
      height: 100%;
      margin: 0 3%;
      background-color: black;
    }
    span {
      margin-right: 1%;
    }

    #date-picker {
      width: 200px;
    }
    .vc-w-full {
      height: 100%;
    }
    .ask {
      width: 50px;
      height: 100%;
      background-color: white;
      border: 1px solid black;
      border-radius: 3px;
    }
  }

  .toggles {
    height: 50px;
    margin-top: 4%;
    display: flex;
    justify-content: space-between;
    font-size: 15px;

    .toggle-left,
    .toggle-right {
      .toggle-container {
        span {
          /* width: 200px; */
          margin-left: 3%;
        }
      }
    }
    .toggle-left {
      width: 240px;
    }
    .toggle-right {
      /* width: 550px; */
      display: flex;

      .toggle-container {
        width: 95px;

        span {
          margin-left: 3%;
        }

        &:nth-child(5) {
          width: 135px;
        }
      }
    }
  }
}
</style>
