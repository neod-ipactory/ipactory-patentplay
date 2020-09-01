<template>
  <div class="form-group">
    <div class="input-group">
      <select id="select-date">
        <option value="year">년</option>
        <option value="month">월</option>
        <option value="day">일</option>
      </select>
      <div class="date-container">
        <input type="text" class="form-control daterange-left" value="03/18/2013 - 03/23/2013" />
        <span class="input-group-append">
          <span class="input-group-text">
            <i class="icon-calendar22"></i>
          </span>
        </span>
      </div>
      <button>조회</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 5%;

  .input-group {
    width: 350px;
    margin: 0 auto;

    .select-container {
      margin-right: 3%;

      label {
        padding-top: 5%;
        font-size: 17px;
      }
    }

    #select-date {
      margin-right: 5%;
      border: 1px solid black;
      border-radius: 3px;
    }

    .date-container {
      display: flex;
      border: 1px solid black;
      border-radius: 3px;
    }

    button {
      width: 50px;
      margin-left: 5%;
      background-color: white;
      border: 1px solid black;
      border-radius: 3px;
    }
  }
}
</style>
