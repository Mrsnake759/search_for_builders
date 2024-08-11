<template>
  <section class="residence">
    <h4 class="residence-title">Проживание</h4>
    <div class="residence_block">
      <div class="residence_block-left">
        <div>Мы представляем комфортное жилье для наших сотрудников</div>
        <div class="residence_block-left_text">
          <div>Квартиры удобно расположены и находятся непосредственно на территории особой экономической зоны.</div>
          <div>При их создании учитывалась безопасность и высокий уровень комфорта, а также наичие зон для активного отдыха.</div>
          <div>Здесь есть: <br>- Парк; <br>- Тренажеры и спортплощадки.</div>
          <div>Каждая квартира полностью оборудована для комфортной жизни: <br>- Новой мебелью; <br>- Всей необходимой бытовой техникой;
            <br>- Постельным бельём, подушкой и тёплым одеялом.</div>
        </div>
      </div>
      <img class="residence_block-img" src="../assets/field.png" alt="поле">
    </div>
  </section>
</template>

<script>
export default {
  name: "ResidenceBlock"
}
</script>

<style lang="scss" scoped>
.residence {
  margin-top: 100px;
  text-align: start;
  &-title {
    color: #989CA5;
    font-size: 18px;
  }

  &_block {
    display: grid;
    grid-template-columns: 40% 60%;

    &-img {
      width: 100%;
    }

    &-left {
      padding-right: 100px;
      &_text {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
}
</style>
