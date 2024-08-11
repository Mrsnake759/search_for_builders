<template>
  <section class="advantages">
    <h4 class="advantages-title">Преимущества</h4>
    <div class="advantages_block">
      <div>Почему стоит работать в "Алабуга"</div>
      <div class="advantages_block-table">
        <div class="advantages-item">
          <img class="advantages-item-img" src="../assets/ellipse.png" alt="эллипс">
          <div class="advantages-item-text">Высокая зарпалата</div>
          <div class="advantages-item-subtitle">От 100 000 рублей до вычета налогов.</div>
        </div>
        <div class="advantages-item">
          <img class="advantages-item-img" src="../assets/ellipse.png" alt="эллипс">
          <div class="advantages-item-text">Официальное трудоустройство</div>
          <div class="advantages-item-subtitle">В соответствии с ТК РФ, мы оплачиваем нашим сотрудникам больничные, отпуска и гарантируем правовую безопасность.</div>
        </div>
        <div class="advantages-item">
          <img class="advantages-item-img" src="../assets/ellipse.png" alt="эллипс">
          <div class="advantages-item-text">Корпоративное жилье</div>
          <div class="advantages-item-subtitle">Удобное и комфортное жилье для каждого сотрудника.</div>
        </div>
      </div>
      <div class="advantages_block-table_down">
        <div class="advantages-item">
          <img class="advantages-item-img" src="../assets/ellipse.png" alt="эллипс">
          <div class="advantages-item-text">Карьерный рост</div>
          <div class="advantages-item-subtitle">Возможность развиваться в своей спецаильаность и стать профессионалом мирового уровня.</div>
        </div>
        <div class="advantages-item last">
          <div class="advantages-item-text text">И это далеко не все, что мы можем вам предложить. Чтобы узнать обо всем, нужно подать заявку</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdvantagesBlock"
}
</script>

<style lang="scss" scoped>
.advantages {
  margin-top: 100px;
  display: flex;
  flex-direction: column;

  &-title {
    color: #989CA5;
    font-size: 18px;
    text-align: start;
  }

  &_block {
    text-align: start;
    &-table {
      margin-top: 30px;
      display: grid;
      gap: 20px;
      grid-template-columns: 30% 35% 34%;

      &_down {
        gap: 20px;
        margin-top: 20px;
        display: grid;
        grid-template-columns: 40% 60%;
      }
    }
  }

  &-item {
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    background-color: #D9D9D9;
    padding: 30px;

    &-img {
      width: 50px;
      height: 50px;
    }

    &-text {
      margin-top: 15px;
      font-size: 20px;
      font-weight: bold;
    }

    &-subtitle {
      margin-top: 10px;
      font-size: 16px;
    }
  }
}
</style>
