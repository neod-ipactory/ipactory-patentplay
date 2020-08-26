<template>
  <div id="index">
    <div class="container">
      <img src="/images/서울과기대.jpg" alt="서울과기대 로고" />
      <div class="codeContainer">
        <input type="text" placeholder="Enter Connection Code" />
        <button>Connect</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#index {
  .container {
    width: 500px;
    margin: 10% auto 0;

    img {
      width: 500px;
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
        background-color: #263238;
        color: white;
        font-size: 20px;
      }
    }
  }
}
</style>
