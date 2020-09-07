<template>
  <div class="main-left">
    <div class="tags-container">
      <section class="selected-tags-container">
        <span>선택된 TAG</span>
        <div class="selected-tags">선택된 태그가 있을 공간{{getTagStatus}}</div>
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
        <button class="ask">조회</button>
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
            <!-- <ToggleOrange @handle-toggle="passToggleStatus()"></ToggleOrange> -->
            <span>출원중</span>
          </div>
          <div class="toggle-container">
            <!-- <ToggleOrange @handle-toggle="passToggleStatus()"></ToggleOrange> -->
            <span>공개</span>
          </div>
          <div class="toggle-container">
            <!-- <ToggleOrange @handle-toggle="passToggleStatus()"></ToggleOrange> -->
            <span>심사중</span>
          </div>
          <div class="toggle-container">
            <!-- <ToggleOrange @handle-toggle="passToggleStatus()"></ToggleOrange> -->
            <span>등록유지</span>
          </div>
          <div class="toggle-container">
            <!-- <ToggleOrange @handle-toggle="passToggleStatus()"></ToggleOrange> -->
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
// import ToggleOrange from "./ToggleOrange.vue";
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
    // ToggleOrange,
    AllTags,
  },
  computed: {
    ...mapGetters(["getTagStatus"]),
  },
  methods: {
    // testFunction() {
    //   this.test += "1";
    // },
    handleVcalendar() {
      const calendarInput = document.querySelector(
        "#app > div > div.page-content >  div.main-content > div.main > div.main-left >  div.tags-container > section.tags-condition > span > input"
      );
      calendarInput.style.color = "black";
      calendarInput.value = new Date().toISOString().substring(0, 10);
    },
    // handleToggleStatus(e) {
    //   if (e !== undefined) {
    //     console.log(this.test);
    //   } else {
    //     console.log(this.toggleStatus);
    //   }
    // },
    fetchToggleStatus(actionType) {
      this.$store.dispatch("FETCH_TAG_STATUS", {
        action: actionType === "andOr" ? "andOr" : "stu",
        type: "",
        item: actionType === "andOr" ? this.andOr : this.stu,
      });
      console.log(this.getTagStatus);
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
      }
    }

    .tags-category {
      height: 40px;
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
    font-size: 15px;
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
          margin-left: 3%;
        }
      }
    }
    .toggle-left {
      width: 210px;
    }
    .toggle-right {
      display: flex;

      .toggle-container {
        width: 90px;

        span {
          margin-left: 3%;
        }

        &:nth-child(5) {
          width: 120px;
        }
      }
    }
  }
}
</style>