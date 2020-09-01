<template>
  <div class="form-group">
    <div class="input-group">
      {{ date }}
      <select v-model="dateType" id="select-date">
        <option value="year">연</option>
        <option value="month">월</option>
        <option value="day">일</option>
      </select>
      <div class="date-container">
        <input v-model="date" type="text" class="form-control daterange-left" />
        <span class="input-group-append">
          <span class="input-group-text">
            <i class="icon-calendar22"></i>
          </span>
        </span>
      </div>
      <button @click="emitDate">조회</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateType: 'year',
      date: new Date(),
    };
  },
  methods: {
    emitDate() {
      this.$emit('updateDate', this.dateType, this.date);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 5%;

  .input-group {
    width: 360px;
    margin: 0 auto;

    .select-container {
      margin-right: 3%;

      label {
        padding-top: 5%;
        font-size: 17px;
      }
    }

    #select-date {
      width: 40px;
      margin-right: 5%;
      border: 1px solid black;
      border-radius: 3px;
    }

    .date-container {
      display: flex;
      border: 1px solid black;
      border-radius: 3px;

      input {
        width: 180px;
      }
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
