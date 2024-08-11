<template>
  <section class="work">
    <div class="work_block">
      <div class="work_block-left">
        <div class="work_block-left_title">Работа для строителей в стабильной компании</div>
        <div class="work_block-left_subtitle">Зарплата от 100 тысяч рублей, бесплатное проживание, официальное трудоустройство, помощь с переездом</div>
        <button class="work_block-left_button">Подать заявку</button>
      </div>
      <img src="../assets/3D.png" alt="3D">
    </div>
  </section>
</template>

<script>
export default {
  name: "WorkBlock"
}
</script>

<style lang="scss" scoped>
.work {
  margin-top: 110px;

  &_block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &-left {
      display: flex;
      flex-direction: column;
      max-width: 450px;

      &_title {
        font-size: 40px;
        font-weight: bold;
      }

      &_subtitle {
        margin-top: 30px;
        font-size: 20px;
      }

      &_button {
        width: 260px;
        border-radius: 10px;
        font-size: 18px;
        margin-top: 30px;
        background-color: black;
        color: white;
        padding: 16px 65px 16px 65px;
      }
    }
  }
}
</style>
