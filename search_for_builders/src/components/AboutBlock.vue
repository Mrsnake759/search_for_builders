<template>
  <section class="about">
    <h4 class="about-title">О компании</h4>
    <div class="about_block">
      <div class="about_block-text">
        Мы - лучшая в России и Европе особая экономическая зона "Алабуга".
      </div>
      <div class="about_block-table">
        <div class="about_block-table_left">
          <div class="about-item">
            <div class="about-item-title">171 млрд. +</div>
            <div class="about-item-subtitle">Инвестиции ОЭЗ "Алабуга" в новые частные проекты в течении 5 лет</div>
          </div>
          <div class="about-item">
            <div class="about-item-title">17 000 +</div>
            <div class="about-item-subtitle">Количество наших сотрудников</div>
          </div>
          <div class="about-item">
            <div class="about-item-title">179 млдр. +</div>
            <div class="about-item-subtitle">Выручка резидентов за 2023 год</div>
          </div>
        </div>
        <div class="about_block-table_right">
          <div class="about-text">
            «Алабуга» — это инфраструктурный партнер полного цикла, который обеспечивает кадровую, социальную, промышленную и строительную инфраструктуру. За 18 лет работы мы построили сильную команду, ежедневно развивающую особую экономическую зону с помощью лучших мировых практик.
          </div>
          <div class="about-text2">
            Наш приоритет — развитие промышленности во благо людям. Для этого мы создаём социальную инфраструктуру, предоставляем рабочие места, хороший карьерный рост и возможность молодым амбициозным выпускникам работать над реальными проектами.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutBlock"
}
</script>

<style lang="scss" scoped>
.about {
  margin-top: 100px;
  text-align: start;

  &-title {
    color: #989CA5;
    font-size: 18px;
    text-align: start;
  }

  &_block {
    display: flex;
    flex-direction: column;

    &-text {
      text-align: start;
    }

    &-table {
      margin-top: 30px;
      display: grid;
      grid-template-columns: 50% 45%;
      gap: 100px;

      &_left {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 50px;
      }
    }
  }

  &-text {
    font-size: 18px;
  }

  &-text2 {
    margin-top: 30px;
    font-size: 18px;
  }

  &-item {
    max-width: 200px;

    &-title {
      font-size: 24px;
      font-weight: bold;
    }

    &-subtitle {
      margin-top: 10px;
      color: #989CA5;
      font-size: 18px;
    }
  }
}
</style>
