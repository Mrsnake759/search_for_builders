<template>
  <section class="vacancies">
    <h4 class="vacancies-title">Вакансии</h4>
    <div class="vacancies_block">
      <div class="vacancies_block-text"><span class="vacancies-text">Мы в поиске специалистов</span>разных специальностей</div>
      <div class="vacancies_block-table">
        <div class="vacancies_item">
          <div>Бетонщик</div>
          <img class="vacancies_item-img" src="../assets/square.png">
        </div>
        <div class="vacancies_item">
          <div>Арматурщик</div>
          <img class="vacancies_item-img" src="../assets/square.png">
        </div>
        <div class="vacancies_item">
          <div>Разнорабочий</div>
          <img class="vacancies_item-img" src="../assets/square.png">
        </div>
        <div class="vacancies_item">
          <div>Сварщик-монтажник</div>
          <img class="vacancies_item-img" src="../assets/square.png">
        </div>
        <div class="vacancies_item">
          <div>Штукатур-маляр</div>
          <img class="vacancies_item-img" src="../assets/square.png">
        </div>
        <div class="vacancies_item">
          <div>Электромонтажник</div>
          <img class="vacancies_item-img" src="../assets/square.png">
        </div>
        <div class="vacancies_item">
          <div>Газосварщик</div>
          <img class="vacancies_item-img" src="../assets/square.png">
        </div>
        <div class="vacancies_item">
          <div>Монолитщик</div>
          <img class="vacancies_item-img" src="../assets/square.png">
        </div>
        <div class="vacancies_item">
          <div>Монтажник</div>
          <img class="vacancies_item-img" src="../assets/square.png">
        </div>
        <div class="vacancies_item">
          <div>Стропальщик</div>
          <img class="vacancies_item-img" src="../assets/square.png">
        </div>
        <div class="vacancies_item">
          <div>Плиточник</div>
          <img class="vacancies_item-img" src="../assets/square.png">
        </div>
        <div class="vacancies_item">
          <div>Отделочник</div>
          <img class="vacancies_item-img" src="../assets/square.png">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VacanciesBlock"
}
</script>

<style lang="scss" scoped>
.vacancies {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  text-align: start;

  &_item {
    padding: 15px;
    background-color: #D9D9D9;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-img {
      align-self: end;
      margin-top: 20px;
    }
  }

  &-title {
    color: #989CA5;
    font-size: 18px;
  }

  &-text {
    color: white;
    background-color: #1F59B0;
    border-radius: 10px;
    padding: 4px;
    margin-right: 5px;
  }

  &_block {

    &-table {
      margin-top: 30px;
      gap: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }

    &-text {
      font-weight: bold;
    }
  }
}
</style>
