<template>
  <div id="index">
    <!-- <div class="border top"></div> -->
    <div class="container">
      <img src="/images/서울과기대.jpg" alt="서울과기대 로고" />
      <div class="codeContainer">
        <input type="text" placeholder="Enter Connection Code" />
        <button>Connect</button>
      </div>
      <!-- <div class="textContainer"><h1>PATENT PLAY</h1></div> -->
    </div>
    <!-- <div class="border bottom"></div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#index {
  position: relative;
  height: 100vh;

  .container {
    width: 500px;
    margin: 10% auto 0;

    img {
      width: 500px;
    }

    h1 {
      margin-top: 10%;
      text-align: center;
      font-size: 30px;
      color: white;
    }

    .codeContainer {
      width: 320px;
      height: 150px;
      margin: 15% auto;
      text-align: center;
      border: 1px solid #ced4da;
      border-radius: 5px;

      input {
        margin-top: 5%;
        width: 90%;
        height: 30%;
        border: 1px solid #ced4da;
        border-radius: 5px;
        padding-left: 5%;
        font-size: 15px;
      }

      button {
        margin-top: 5%;
        width: 90%;
        height: 35%;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
        font-size: 20px;
      }
    }

    /* .textContainer {
      width: 60%;
      margin: 0 auto; 
      background-color: black;
    } */
  }

  .border {
    &.top {
      width: 100%;
      height: 150px;
      /* background-color: #141b2e; */
    }

    &.bottom {
      width: 100%;
      height: 150px;
      /* background-color: #141b2e; */
      position: absolute;
      bottom: 0;
    }
  }
}
</style>
