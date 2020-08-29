<template>
  <div class="content-wrapper">
    <div class="content">
      <!-- Striped rows -->
      <div class="card">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>이전</th>
                <th>현재</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>이전내용</td>
                <td>현재내용</td>
              </tr>
              <tr>
                <td>이전내용2</td>
                <td>현재내용2</td>
              </tr>
              <tr>
                <td>이전내용3</td>
                <td>현재내용3</td>
              </tr>
              <tr>
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

<style scoped>
th {
  text-align: center;
  font-weight: bold;
}
</style>
