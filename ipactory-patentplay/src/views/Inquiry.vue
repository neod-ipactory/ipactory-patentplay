<template>
  <div>
    <Nav></Nav>
    <div class="page-content">
      <SideBar></SideBar>
      <div class="main-content">
        <div class="keyword-container">
          <input
            @keyup.enter="searchData.length > 0 && fetchSearch()"
            v-model="searchData"
            type="text"
          />
          <button @click="searchData.length > 0 && fetchSearch()">검색</button>
        </div>
        <div class="main">
          <InquiryLeft></InquiryLeft>
          <div class="vertical-line"></div>
          <InquiryRight></InquiryRight>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InquiryLeft from '../components/inquiry/InquiryLeft.vue';
import InquiryRight from '../components/inquiry/InquiryRight.vue';
import Nav from '../components/Nav.vue';
import SideBar from '../components/SideBar.vue';
import axios from 'axios';
import { config } from '../api';

export default {
  components: {
    InquiryLeft,
    InquiryRight,
    Nav,
    SideBar,
  },
  data() {
    return {
      searchData: '',
    };
  },
  methods: {
    fetchSearch() {
      axios
        .post(`${config.basicUrl}keyword`, { keyword: this.searchData })
        .then(({ data }) => console.log(data))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  padding-top: 3%;

  .keyword-container {
    height: 40px;
    margin-top: 1%;
    text-align: center;

    input {
      width: 500px;
      height: 100%;
      border: 1px solid #2b78e4;
      padding-left: 1%;
      font-size: 18px;
    }

    button {
      width: 60px;
      height: 100%;
      color: white;
      border-top: 4px solid #2b78e4;
      background-color: #2b78e4;
    }
  }

  .main {
    display: flex;

    .vertical-line {
      width: 1px;
      margin: 1% 2%;
      background-color: #919190;
    }
  }
}
</style>
