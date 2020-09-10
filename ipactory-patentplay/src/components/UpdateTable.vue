<template>
  <div class="content-wrapper">
    <div class="content">
      <!-- Striped rows -->
      <div class="card">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>출원번호</th>
                <th>변경 전</th>
                <th>변경 후</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>이전내용</td>
                <td>현재내용</td>
              </tr>
              <tr>
                <td>2</td>
                <td>이전내용2</td>
                <td>현재내용2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>이전내용3</td>
                <td>현재내용3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>이전내용4</td>
                <td>현재내용4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- /striped rows -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
th {
  text-align: center;
  font-weight: bold;
}
td {
  text-align: center;

  &:first-child {
    width: 20%;
  }
}
</style>
