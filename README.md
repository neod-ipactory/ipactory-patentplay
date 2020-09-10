# ipactory-patentplay

## componet별 기능 정리

### views

**공통 컴포넌트**

- Nav.vue
- SideBar.vue

**Index.vue**

- 로그인 페이지

**Main.vue**

- 차트: Google chart 사용
- vc-date-picker(라이브러리): 연월일 & 달력에서 날짜 선택 후 조회 기능
- 기간 내 해당 데이터 없을시 NoData.vue띄움
- LineApplyChart.vue
- LineRegisterChart.vue
- ColumnMajorChart.vue
- ColumnProfessorChart.vue
  - 학과 선택 기능
- ColumnCoworkChart.vue
- UpdateTable.vue

  - 주간 업데이트 DB정리중으로 미해결

**Inquiry.vue**

- 검색 시 백엔드 api 소통
- InquiryLeft.vue: 페이지 왼쪽 태그 부분
  - ToggleOrange.vue: 출원중, 공개, 심사중, 등록유지, 거절/포기/취하를 위한 토글
  - AllTags.vue: 나머지 모든 태그 부분
    - ToggleAndTag.vue: 아래의 분류된 각 태그
- InquiryRight.vue: 페이지 오른쪽 테이블 부분

**List.vue**

- 조회페이지(Inquiry.vue)에서 리스트 보기 클릭

**Regist.vue**

- 백엔드 api 미준비로 데이터 통신 미해결
