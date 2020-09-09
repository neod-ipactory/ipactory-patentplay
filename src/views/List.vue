<template>
  <div v-if="getSelectedList.length > 0">
    <Nav></Nav>
    <div class="page-content">
      <SideBar></SideBar>
      <div class="main-content">
        <span class="list-count"
          >총 <span>{{ getSelectedList.length }}</span
          >건</span
        >
        <table>
          <tr>
            <th>#</th>
            <th>현재상태</th>
            <th>출원번호(출원날짜)</th>
            <th>문헌번호(문헌날짜)</th>
            <th>출원인/발명자</th>
            <th>현재 특허권자</th>
            <th>학과/주발명자</th>
            <th>등급</th>
            <th class="tags">발명의 명칭/TAGS</th>
          </tr>
          <tr v-for="(tagInfo, i) in getSelectedList" :key="tagInfo['file_num, file_date'][0]">
            <!-- # -->
            <td>{{ i + 1 }}</td>
            <!-- 현재상태 -->
            <td>{{ tagInfo.status }}</td>
            <!-- 출원번호(출원날짜) -->
            <td>
              <div>{{ tagInfo['file_num, file_date'][0] }}</div>
              <div v-if="tagInfo['file_num, file_date'][1]">
                ({{ tagInfo['file_num, file_date'][1] }})
              </div>
            </td>
            <!-- 문헌번호(문헌날짜) -->
            <td>
              <div>{{ tagInfo['pub_num, pub_date'][0] }}</div>
              <div v-if="tagInfo['pub_num, pub_date'][1]">
                ({{ tagInfo['pub_num, pub_date'][1] }})
              </div>
            </td>
            <!-- 출원인 / 발명자 -->
            <td>
              <div>
                <span v-for="name in tagInfo['applicant, inventor'][0]" :key="name">
                  {{ name }}
                </span>
              </div>
              <div>
                <span v-for="(name, i) in tagInfo['applicant, inventor'][1]" :key="name">
                  <template v-if="i === tagInfo['applicant, inventor'][1].length - 1">
                    {{ name }}</template
                  >
                  <template v-else>{{ name }}, </template>
                </span>
              </div>
            </td>
            <!-- 현재 특허권자 -->
            <td>{{ tagInfo.patentee }}</td>
            <!-- 학과 / 주발명자 -->
            <td>
              <div>{{ tagInfo['major, main_inventor'][0] }}</div>
              <div>{{ tagInfo['major, main_inventor'][1] }}</div>
            </td>
            <!-- 등급 -->
            <td>{{ tagInfo.grade }}</td>
            <!-- 발명의 명칭 / TAGS -->
            <td class="tags">
              <div>{{ tagInfo['title, tags'][0] }}</div>
              <div>
                <span v-for="(tag, i) in tagInfo['title, tags'][1]" :key="tag">
                  <!-- {{ tag }} -->
                  <template v-if="i === tagInfo['title, tags'][1].length - 1">{{ tag }}</template>
                  <template v-else>{{ tag }}, </template>
                </span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import SideBar from '../components/SideBar.vue';

export default {
  data() {
    return {
      getSelectedList: [],
    };
  },
  components: {
    Nav,
    SideBar,
  },
  methods: {
    getLocalStorage() {
      const storageList = JSON.parse(localStorage.getItem('list'));
      if (storageList) this.getSelectedList = storageList;
    },
  },
  beforeCreate() {},
  created() {
    this.getLocalStorage();
  },
  updated() {},
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  padding: 5% 1% 0 1%;
  font-family: Do Hyeon;

  .list-count {
    font-size: 25px;

    span {
      color: #486fff;
    }
  }

  table {
    width: 100%;
    text-align: center;
    border: 1px solid #919191;
    font-size: 18px;

    th,
    td {
      border: 1px solid #919191;

      .tags {
        width: 20%;
        background-color: black;
      }
    }

    tr {
      &:nth-child(odd) {
        background-color: #feffe7;
      }

      &:first-child {
        background-color: #9e9e9e;
      }
    }
  }
}
</style>
