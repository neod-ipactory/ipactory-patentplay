<template>
  <div class="main-right">
    <div class="main-right-head">
      <span>총 {{ getFetchedTags.listshow.length }}건</span>
      <button @click="lookList" class="list-button">리스트 보기</button>
    </div>
    <section>
      <div class="main-title">공동 경쟁기관 (2건 이상)</div>
      <div class="sub-title">공동출원인</div>
      <div class="list-table">
        <table>
          <tr>
            <th>순위</th>
            <th>출원인</th>
            <th>건수</th>
          </tr>
          <tr>
            <td>1</td>
            <td>아무개</td>
            <td>10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>홍길동</td>
            <td>20</td>
          </tr>
        </table>
      </div>
      <div class="sub-title">경쟁기관</div>
      <div class="list-table">
        <table>
          <tr>
            <th>순위</th>
            <th>출원인</th>
            <th>건수</th>
          </tr>
          <tr>
            <td>1</td>
            <td>아무개</td>
            <td>10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>홍길동</td>
            <td>20</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getFetchedTags', 'getSelectedList']),
  },
  methods: {
    lookList() {
      var vm = this;
      this.$store.dispatch('FETCH_LIST_SHOW', {
        listshow: this.getFetchedTags.listshow,
        vm,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main-right {
  width: 40%;
  padding: 2% 2% 0 0;

  .main-right-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;

    .list-button {
      padding: 1%;
      border: 1px solid #919190;
      border-radius: 3px;
      background-color: white;
    }
  }

  section {
    .main-title {
      margin-top: 5%;
      text-align: center;
      background-color: #9fc5f8;
      font-size: 25px;
    }

    .sub-title {
      width: 50%;
      margin: 3% auto;
      text-align: center;
      background-color: #76a5af;
      font-size: 20px;
      color: white;
    }

    .list-table {
      width: 100%;

      table {
        width: 100%;
        text-align: center;
        font-size: 17px;
        border: 1px solid #919190;

        tr {
          border-bottom: 1px solid #919190;

          &:nth-child(odd) {
            background-color: #d6d6d6;
          }

          &:first-child {
            background-color: #9e9e9e;
          }
        }

        th,
        td {
          border-right: 1px solid #919190;
        }
      }
    }
  }
}
</style>
