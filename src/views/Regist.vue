<template>
  <div id="top">
    <Nav></Nav>
    <div class="page-content">
      <SideBar></SideBar>
      <div class="main-content">
        <span class="title">정보 입력</span>
        <article class="caution">
          <div>
            ※ 각 필드에 기본으로 보여지는 입력 양식에 맞추어 입력해 주시기 바랍니다. 입력 양식이
            잘못되면 프로그램 오류가 발생하거나, 잘못된 통계가 나올 수 있습니다.
          </div>
          <div>※ 데이터에 큰 따옴표(")나 작은 따옴표(')가 포함되지 않도록 해주십시오.</div>
          <div>
            ※ 출원인/특허권자/인용문헌 출원인 등을 입력하실 때에는, 정확한 통계를 위해 기존에
            입력되어 있던 데이터를 참조하여 입력해 주시기 바랍니다. (예: 서울과학기술대학교
            산학협력단 (띄어쓰기 있음. O), 서울과학기술대학교산학협력단 (띄어쓰기 없음. X)) ※ 새로운
            학과나 주발명자를 입력하실 때에는, "직접입력"을 선택한 후 입력해 주시기 바랍니다. ※
            대표도면의 파일명은 오류를 방지하기 위해, 영문과 숫자로만 기재해 주시기 바랍니다. (예:
            대표도면.jpg (X), kr1020170001234.jpg (O))
          </div>
          <div>
            ※ Backward/Forward 인용문헌의 입력 양식에 유의해 주시기 바랍니다. 만약 하나의
            인용문헌번호에 출원인이 여러명인 경우는 "번호1-1,출원인1|번호1-2,출원인2"와 같이
            입력하시기 바랍니다.
          </div>
        </article>
        <!-- <button class="upload-button">PDF 파일 업로드</button> -->
        <div class="file-handler">
          <label for="pdfUpload" class="upload-button">
            <div>PDF 파일 업로드</div>
            <input type="file" @click="(e) => onFileChange(e, 'pdfFile')" id="pdfUpload" />
          </label>
          <button class="save-button">신규케이스 등록</button>
        </div>

        <table>
          <tr>
            <th>
              구분 (
              <span class="red">*</span>는 필수)
            </th>
            <th>데이터</th>
          </tr>
          <tr>
            <td class="green">
              출원번호
              <span class="red">*</span>
            </td>
            <td>
              <input type="text" placeholder="10-20YY-0000000" />
            </td>
          </tr>
          <tr>
            <td class="green">
              출원일
              <span class="red">*</span>
            </td>
            <td>
              <input type="text" placeholder="20YY-MM-DD" />
            </td>
          </tr>
          <tr>
            <td class="green">출원인</td>
            <td>
              <input type="text" placeholder="서울과학기술대학교 산학협력단|한국전자통신연구원|포항공과대학교 산학협력단" />
            </td>
          </tr>
          <tr>
            <td class="green">발명자</td>
            <td>
              <input type="text" placeholder="홍길동|유장현|OOO" />
            </td>
          </tr>
          <tr>
            <td class="pink">공개번호</td>
            <td>
              <input type="text" placeholder="10-20YY-0000000" />
            </td>
          </tr>
          <tr>
            <td class="pink">공개일</td>
            <td>
              <input type="text" placeholder="20YY-MM-DD" />
            </td>
          </tr>
          <tr>
            <td class="yellow">등록번호</td>
            <td>
              <input type="text" placeholder="10-1234567" />
            </td>
          </tr>
          <tr>
            <td class="yellow">등록일</td>
            <td>
              <input type="text" placeholder="20YY-MM-DD" />
            </td>
          </tr>
          <tr>
            <td class="yellow">특허권자</td>
            <td>
              <input type="text" placeholder="서울과학기술대학교 산학협력단|한국전자통신연구원|포항공과대학교 산학협력단" />
            </td>
          </tr>
          <tr>
            <td class="blue">현재상태</td>
            <td>
              <select v-model="selectedStatus" name="currentStatus">
                <option>출원중</option>
                <option>공개</option>
                <option>심사중</option>
                <option>등록유지</option>
                <option>거절/포기/취하</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="purple">학과</td>
            <td>
              <div>
                <select v-model="selectedMajor" name="major">
                  <option v-for="major in majors" :key="major">{{ major }}</option>
                </select>
              </div>
              <div>
                <input type="text" class="manual" placeholder="학과 직접 입력" />
              </div>
            </td>
          </tr>
          <tr>
            <td class="purple">주발명자</td>
            <td>
              <!-- <div>
                <select name="inventor">
                  <option>홍길동</option>
                </select>
              </div>
              <div>
                <input type="text" class="manual" placeholder="주발명자 직접 입력" />
              </div>-->
              <input type="text" placeholder="주발명자" />
            </td>
          </tr>
          <tr>
            <td class="purple">등급</td>
            <td>
              <select v-model="selectedGrade" name="grade">
                <option v-for="num in [1, 2, 3, 4, 5, 6]" :key="num">{{num}}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>발명의명칭</td>
            <td>
              <input type="text" placeholder="발명의 명칭" />
            </td>
          </tr>
          <tr>
            <td>요약</td>
            <td>
              <textarea placeholder="요약" />
            </td>
          </tr>
          <tr>
            <td>대표청구항</td>
            <td>
              <textarea placeholder="대표청구항" />
            </td>
          </tr>
          <tr>
            <td>대표도면</td>
            <td>
              <input type="file" @change="(e) => onFileChange(e, 'bluePrint')" class="chooseFile" />
            </td>
          </tr>
          <tr>
            <td>상세보기 링크 URL</td>
            <td>
              <input type="text" placeholder="http://www.seoultech.ac.kr/index.jsp" />
            </td>
          </tr>
          <tr>
            <td class="gray">Backward 인용</td>
            <td>
              <input type="text" placeholder="번호1,출원인1|번호2,출원인2|번호3,출원인3" />
            </td>
          </tr>
          <tr>
            <td class="gray">Forward 인용</td>
            <td>
              <input type="text" placeholder="번호1,출원인1|번호2,출원인2|번호3,출원인3" />
            </td>
          </tr>
        </table>
        <!-- <footer>
          <button class="save-button">저장</button>
        </footer>-->
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import SideBar from "../components/SideBar.vue";
import { majors } from "../../public/data";

export default {
  data() {
    return {
      majors,
      selectedStatus: "",
      selectedMajor: "",
      selectedGrade: "",
      pdfFile: {},
      bluePrint: {},
    };
  },
  components: {
    Nav,
    SideBar,
  },
  methods: {
    onFileChange(e, type) {
      this[type] = e.target.files || e.dataTransfer.files;
      if (!this[type].length) return;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  padding-top: 5%;
  width: 50%;
  margin: 0 auto;

  .title {
    display: block;
    text-align: center;
    font-size: 30px;
    margin-bottom: 1%;
  }

  .caution {
    margin-bottom: 3%;
    padding: 1% 2%;
    font-size: 16px;
    background-color: #d4d4d4;
    border: 1px solid #919191;

    div {
      margin-bottom: 2%;
    }
  }

  .file-handler {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .upload-button {
      width: 60%;
      padding: 0.5%;
      margin-bottom: 1%;
      background-color: #ffd787;
      border: 1px solid #919191;
      border-radius: 3px;

      div {
        font-size: 15px;
        font-weight: bold;
      }
      input {
        width: 100%;
      }
    }

    .save-button {
      height: 50%;
      padding: 1% 2%;
      border-radius: 3px;
      color: white;
      background-color: #205cff;
    }
  }

  table {
    width: 100%;
    font-size: 16px;
    margin-bottom: 2%;
    border: 1px solid #919191;

    tr {
      line-height: 40px;
      border: 1px solid #919191;

      .red {
        color: red;
      }

      th,
      td {
        border-right: 1px solid #919191;
      }

      th {
        text-align: center;
      }

      td {
        height: 100%;

        &:first-child {
          text-align: center;

          &:hover {
            opacity: 0.4;
            font-weight: bold;
          }
        }

        .chooseFile {
          line-height: 22px;
          margin: 0 1%;
          padding-left: 0;
        }

        input,
        textarea {
          width: 99%;
          line-height: 35px;
          margin-left: 1%;
          padding-left: 1%;
          background-color: #f5f5f5;

          &::placeholder {
            opacity: 0.6;
          }

          &.manual {
            width: 30%;
            background-color: #dadada;
            border-radius: 3px;
          }
        }

        select {
          margin-left: 1%;
        }

        &.green {
          background-color: #ccff87;
        }
        &.pink {
          background-color: #ffd2d2;
        }
        &.yellow {
          background-color: #ffd67f;
        }
        &.blue {
          background-color: #d2f3ff;
        }
        &.purple {
          background-color: #f0d2ff;
        }
        &.gray {
          background-color: #dadada;
        }
      }
    }
  }
}
</style>
