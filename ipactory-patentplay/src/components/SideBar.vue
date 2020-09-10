<template>
  <!-- Main sidebar -->
  <div class="sidebar sidebar-dark sidebar-main sidebar-expand-md">
    <!-- Sidebar content -->
    <div class="sidebar-content">
      <!-- Main navigation -->
      <div class="card card-sidebar-mobile">
        <ul class="nav nav-sidebar" data-nav-type="accordion">
          <!-- Main -->
          <li class="nav-item">
            <a href="/main" class="nav-link">
              <i class="icon-home4"></i>
              <span>Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/inquiry" class="nav-link">
              <i class="icon-stack"></i>
              <span>조회</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/regist" class="nav-link">
              <i class="icon-upload"></i>
              <span>신규케이스 등록</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="icon-users"></i>
              <span>학과, 교수관리</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="icon-price-tags"></i>
              <span>태그 관리</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="icon-code"></i>
              <span>기타 코드 관리</span>
            </a>
          </li>

          <!-- /main -->
        </ul>
      </div>
      <!-- /main navigation -->
    </div>
    <!-- /sidebar content -->
  </div>
  <!-- /main sidebar -->
</template>

<script>
export default {};
</script>

<style lnag="scss" scoped>
.sidebar {
  max-width: 10%;
  margin-top: 48px;
  padding-left: 0.5%;
  top: 48px;
  z-index: 1;
}

.sidebar-content {
  height: 94.5vh;
}

.nav-sidebar {
  position: fixed;
}
</style>
