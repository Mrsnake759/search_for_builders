<template>
  <section class="vacancies">
    <h4 class="vacancies-title">Вакансии</h4>
    <div class="vacancies_block">
      <div class="vacancies_block-text"><span class="vacancies-text">Мы в поиске специалистов</span>разных специальностей</div>
      <div class="vacancies_block-table">
        <div class="vacancies_item">
          <div>Бетонщик</div>
          <div class="vacancies_item-text">100 000 - 160 000 руб.</div>
          <img class="vacancies_item-img" src="../assets/concrete.png">
          <button class="apply-button" onclick="window.location.href='https://example.com'">Подать заявку</button>
        </div>
        <div class="vacancies_item">
          <div>Арматурщик</div>
          <div class="vacancies_item-text">100 000 - 160 000 руб.</div>
          <img class="vacancies_item-img" src="../assets/concrete.png">
          <button class="apply-button" onclick="window.location.href='https://example.com'">Подать заявку</button>
        </div>
        <div class="vacancies_item">
          <div>Разнорабочий</div>
          <div class="vacancies_item-text">100 000 - 160 000 руб.</div>
          <img class="vacancies_item-img" src="../assets/concrete.png">
          <button class="apply-button" onclick="window.location.href='https://example.com'">Подать заявку</button>
        </div>
        <div class="vacancies_item">
          <div>Сварщик-монтажник</div>
          <div class="vacancies_item-text">100 000 - 160 000 руб.</div>
          <img class="vacancies_item-img" src="../assets/concrete.png">
          <button class="apply-button" onclick="window.location.href='https://example.com'">Подать заявку</button>
        </div>
        <div class="vacancies_item">
          <div>Штукатур-маляр</div>
          <div class="vacancies_item-text">100 000 - 160 000 руб.</div>
          <img class="vacancies_item-img" src="../assets/concrete.png">
          <button class="apply-button" onclick="window.location.href='https://example.com'">Подать заявку</button>
        </div>
        <div class="vacancies_item">
          <div>Электромонтажник</div>
          <div class="vacancies_item-text">100 000 - 160 000 руб.</div>
          <img class="vacancies_item-img" src="../assets/concrete.png">
          <button class="apply-button" onclick="window.location.href='https://example.com'">Подать заявку</button>
        </div>
        <div class="vacancies_item">
          <div>Газосварщик</div>
                    <div class="vacancies_item-text">100 000 - 160 000 руб.</div>
          <img class="vacancies_item-img" src="../assets/concrete.png">
          <button class="apply-button" onclick="window.location.href='https://example.com'">Подать заявку</button>
        </div>
        <div class="vacancies_item">
          <div>Монолитщик</div>
                    <div class="vacancies_item-text">100 000 - 160 000 руб.</div>
          <img class="vacancies_item-img" src="../assets/concrete.png">
          <button class="apply-button" onclick="window.location.href='https://example.com'">Подать заявку</button>
        </div>
        <div class="vacancies_item">
          <div>Монтажник</div>
                    <div class="vacancies_item-text">100 000 - 160 000 руб.</div>
          <img class="vacancies_item-img" src="../assets/concrete.png">
          <button class="apply-button" onclick="window.location.href='https://example.com'">Подать заявку</button>
        </div>
        <div class="vacancies_item">
          <div>Стропальщик</div>
                    <div class="vacancies_item-text">100 000 - 160 000 руб.</div>
          <img class="vacancies_item-img" src="../assets/concrete.png">
          <button class="apply-button" onclick="window.location.href='https://example.com'">Подать заявку</button>
        </div>
        <div class="vacancies_item">
          <div>Плиточник</div>
                    <div class="vacancies_item-text">100 000 - 160 000 руб.</div>
          <img class="vacancies_item-img" src="../assets/concrete.png">
          <button class="apply-button" onclick="window.location.href='https://example.com'">Подать заявку</button>
        </div>
        <div class="vacancies_item">
          <div>Отделочник</div>
                    <div class="vacancies_item-text">100 000 - 160 000 руб.</div>
          <img class="vacancies_item-img" src="../assets/concrete.png">
          <button class="apply-button" onclick="window.location.href='https://example.com'">Подать заявку</button>
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
    //background-color: #D9D9D9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    //transition: transform 0.3s ease-in-out;

    border-radius: 10px;
    display: flex;
    flex-direction: column;
    //justify-content: space-between;

    &-text {
      display: none;
      font-size: 16px;
    }

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

.apply-button {
  display: none;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: end;
}

@keyframes wiggle {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(3deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-3deg); }
  100% { transform: rotate(0deg); }
}


.vacancies_item:hover {
  background-color: #0671E0;
  color: white;
  transition: background-color 0.5s ease-in-out;
  //transform: rotate(5deg);
  //transform: translateY(-15px);
  animation: wiggle 0.3s ease-in-out forwards;

}

.vacancies_item-text:hover {
  display: block;
  color: white;
}

.vacancies_item:hover img {
  display: none;
}

.vacancies_item:hover .vacancies_item-text {
  display: block;
}

.vacancies_item:hover .apply-button {
  display: block;

}

</style>
