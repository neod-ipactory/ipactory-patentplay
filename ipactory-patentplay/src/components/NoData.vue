<template>
  <div class="nodata-container">
    <img alt="nodata" src="/images/nodata-found.jpg" />
    <div class="nodata text">해당 기간 내에는 알맞은 정보가 없습니다.</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nodata-container {
  margin: 0 auto;

  .text {
    text-align: center;
    color: red;
    font-size: 17px;
  }
}
</style>
