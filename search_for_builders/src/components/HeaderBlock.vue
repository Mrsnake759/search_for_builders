<template>
  <section class="header">
    <div class="header_block">
      <img src="../assets/logo.png" alt="логотип">
      <div class="header_block-middle">
        <div>Вакансии</div>
        <div>О компании</div>
        <div>Преимещества</div>
        <div>Проживание</div>
        <div>Вопросы</div>
        <div>Контакты</div>
      </div>
      <button class="header_block-button">
        Подать заявку
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "header"
}
</script>

<style lang="scss" scoped>

.header_block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &-middle {
    align-items: center;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  &-button {
    border: 1px solid black;
    padding: 15px 60px 15px 60px;
    border-radius: 10px;
    background-color: white;
    font-size: 18px;
  }
}

</style>
