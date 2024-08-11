<template>
<div class="footer">
  <img class="footer_logo" src="../assets/logo.png" alt="логотип">
  <div class="footer_table">
    <div class="footer_table-item">
      <div class="footer_table-item_title">Навигация</div>
      <div class="footer_table-item-text">О компании</div>
      <div class="footer_table-item-text">Преимущества</div>
      <div class="footer_table-item-text">Вопросы</div>
      <div class="footer_table-item-text">Контакты</div>
    </div>
    <div class="footer_table-item">
      <div class="footer_table-item_title">Мы в сети</div>
      <div class="footer_table-item-text">Телеграмм</div>
      <div class="footer_table-item-text">Вконтакте</div>
      <div class="footer_table-item-text">Яндекс Дзен</div>
    </div>
    <div class="footer_table-item">
      <div class="footer_table-item_title">Контакты</div>
      <div class="footer_table-item-text">+7 923 838-82-18</div>
      <div class="footer_table-item-text">pochta@alabuga.ru</div>
    </div>
  </div>
  <button class="footer_button">
    <img class="footer_button-img" src="../assets/telegram.png" alt="telegram">
    <div class="footer_button-text">Телеграм</div>
  </button>
</div>
</template>

<script>
export default {
  name: "FooterBlock"
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 100px;
  margin-right: -200px;
  margin-left: -200px;
  margin-bottom: -50px;
  padding-left: 190px;
  padding-right: 190px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &_logo {
    margin-top: 50px;
    width: 60px;
    height: 50px;
  }

  &_button {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    padding: 15px 30px;
    border-radius: 10px;
    width: 200px;
    height: 50px;

    &-img {
      margin-top: 1px;
    }

    &-text {
      align-items: center;
      font-size: 18px;
      margin-left: 15px;
    }
  }

  &_table {
    text-align: start;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    gap: 150px;
    padding-bottom: 50px;

    &-item {
      color: white;
      display: flex;
      flex-direction: column;
      gap: 15px;

      &_title {
        margin-bottom: 10px;
        font-size: 24px;
      }

      &_text {
        font-size: 18px;
      }
    }
  }
}
</style>
