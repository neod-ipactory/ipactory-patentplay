<template>
  <div>
    <!-- Main navbar -->
    <div class="navbar navbar-expand-md navbar-dark">
      <div class="collapse navbar-collapse" id="navbar-mobile">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              href="#"
              class="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block"
              data-popup="tooltip-demo"
              data-placement="bottom"
              data-container="body"
              data-trigger="hover"
            >
              <i class="icon-paragraph-justify3"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="navbar-brand">
        <a href="index.html" class="d-inline-block">
          <img src="/global_assets/images/logo_light.png" alt="" />
        </a>
      </div>
      <div class="d-md-none">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-mobile"
        >
          <i class="icon-tree5"></i>
        </button>
        <button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
          <i class="icon-paragraph-justify3"></i>
        </button>
      </div>
    </div>
    <!-- /main navbar -->

    <!-- Page content -->
    <div class="page-content">
      <!-- Main sidebar -->
      <div class="sidebar sidebar-dark sidebar-main sidebar-expand-md">
        <!-- Sidebar mobile toggler -->
        <div class="sidebar-mobile-toggler text-center">
          <a href="#" class="sidebar-mobile-main-toggle">
            <i class="icon-arrow-left8"></i>
          </a>
          Navigation
          <a href="#" class="sidebar-mobile-expand">
            <i class="icon-screen-full"></i>
            <i class="icon-screen-normal"></i>
          </a>
        </div>
        <!-- /sidebar mobile toggler -->

        <!-- Sidebar content -->
        <div class="sidebar-content">
          <!-- Main navigation -->
          <div class="card card-sidebar-mobile">
            <ul class="nav nav-sidebar" data-nav-type="accordion">
              <!-- Main -->
              <li class="nav-item">
                <a href="index.html" class="nav-link">
                  <i class="icon-home4"></i>
                  <span>
                    Home
                  </span>
                </a>
              </li>
              <li class="nav-item nav-item-submenu">
                <a href="#" class="nav-link"><i class="icon-stack"></i> <span>조회</span></a>
              </li>
              <li class="nav-item nav-item-submenu">
                <a href="#" class="nav-link"
                  ><i class="icon-stack"></i> <span>신규케이스 등록</span></a
                >
              </li>
              <li class="nav-item nav-item-submenu">
                <a href="#" class="nav-link"
                  ><i class="icon-stack"></i> <span>학과, 교수관리</span></a
                >
              </li>
              <li class="nav-item nav-item-submenu">
                <a href="#" class="nav-link"><i class="icon-stack"></i> <span>태그 관리</span></a>
              </li>
              <li class="nav-item nav-item-submenu">
                <a href="#" class="nav-link"
                  ><i class="icon-stack"></i> <span>기타 코드 관리</span></a
                >
              </li>

              <!-- /main -->
            </ul>
          </div>
          <!-- /main navigation -->
        </div>
        <!-- /sidebar content -->
      </div>
      <!-- /main sidebar -->
    </div>
    <!-- /page content -->
  </div>
</template>

<script>
export default {};
</script>

<style lnag="scss" scoped>
.navbar-expand-md {
  position: relative;
}

#navbar-mobile {
  padding-left: 5px;
}

.navbar-brand {
  min-width: 0;
  position: absolute;
  left: 50%;
}

.sidebar-content {
  height: 94.5vh;
}

.nav-sidebar {
  margin-top: 10%;
}
</style>
