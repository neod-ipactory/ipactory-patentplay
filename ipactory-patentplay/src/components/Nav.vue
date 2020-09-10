<template>
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
        <img src="/global_assets/images/logo_light.png" alt />
      </a>
    </div>
  </div>
  <!-- /Main navbar -->
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-expand-md {
  position: relative;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;
}

#navbar-mobile {
  padding-left: 15px;
}

.navbar-brand {
  min-width: 0;
  position: absolute;
  left: 50%;
}
</style>
