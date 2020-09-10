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
            <th class="status">현재상태</th>
            <th>
              <div>출원번호</div>
              <div>(출원날짜)</div>
            </th>
            <th>
              <div>문헌번호</div>
              <div>(문헌날짜)</div>
            </th>
            <th>출원인/발명자</th>
            <th>현재 특허권자</th>
            <th class="major">학과/주발명자</th>
            <th class="grade">등급</th>
            <th class="tags">발명의 명칭/TAGS</th>
          </tr>
          <tr v-for="(tagInfo, i) in getSelectedList" :key="tagInfo['file_num, file_date'][0] + i">
            <!-- # -->
            <td>{{ i + 1 }}</td>
            <!-- 현재상태 -->
            <td class="status">{{ tagInfo.status }}</td>
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
                <span v-for="name in tagInfo['applicant, inventor'][0]" :key="name + i">
                  {{ name }}
                </span>
              </div>
              <div>
                <span v-for="(name, i) in tagInfo['applicant, inventor'][1]" :key="name + i">
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
            <td class="major">
              <div>{{ tagInfo['major, main_inventor'][0] }}</div>
              <div>{{ tagInfo['major, main_inventor'][1] }}</div>
            </td>
            <!-- 등급 -->
            <td class="grade">{{ tagInfo.grade }}</td>
            <!-- 발명의 명칭 / TAGS -->
            <td class="tags">
              <div>{{ tagInfo['title, tags'][0] }}</div>
              <div>
                <button
                  v-for="(tag, i) in tagInfo['title, tags'][1]"
                  :class="tag[1][0]"
                  :key="tag + i"
                  disabled
                >
                  <!-- {{ tag }} -->
                  <template v-if="i === tagInfo['title, tags'][1].length - 1">{{
                    tag[0]
                  }}</template>
                  <template v-else>{{ tag[0] }}, </template>
                </button>
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
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  padding: 5% 1% 0 1%;

  .list-count {
    font-size: 25px;

    span {
      color: #486fff;
    }
  }

  table {
    width: 100%;
    margin-bottom: 2%;
    text-align: center;
    border: 1px solid #919191;
    font-size: 18px;

    th,
    td {
      border: 1px solid #919191;

      &.status {
        width: 4%;
      }
      &.major {
        width: 11%;
      }
      &.grade {
        width: 3%;
      }
      &.tags {
        width: 40%;
      }

      button {
        margin: 0 2% 0.5% 0;
        padding: 0.5% 1%;
        color: black;
        border: 1px solid #919191;
        border-radius: 3px;

        &.A {
          background-color: #c2ff93;
        }
        &.B {
          background-color: #ffbe93;
        }
        &.C {
          background-color: #93fff2;
        }
        &.D {
          background-color: #f6adff;
        }
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
