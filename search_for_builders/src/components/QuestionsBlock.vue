<!--<template>-->
<!--  <div class="faq">-->
<!--    <div class="faq-item" data-id="1">-->
<!--      <span>Какие документы нужны для трудоустройства?</span>-->
<!--      <span class="toggle">+</span>-->
<!--    </div>-->
<!--    <div class="faq-content" id="content-1">-->
<!--      <p>Для трудоустройства нужны паспорт, ИНН, СНИЛС и трудовая книжка.</p>-->
<!--    </div>-->
<!--    <div class="faq-item" data-id="2">-->
<!--      <span>Как добираться до работы?</span>-->
<!--      <span class="toggle">+</span>-->
<!--    </div>-->
<!--    <div class="faq-content" id="content-2">-->
<!--      <p>Вы можете добираться до работы на общественном транспорте или на собственном автомобиле.</p>-->
<!--    </div>-->
<!--    <div class="faq-item" data-id="3">-->
<!--      <span>Есть ли жильё для иногородних?</span>-->
<!--      <span class="toggle">+</span>-->
<!--    </div>-->
<!--    <div class="faq-content" id="content-3">-->
<!--      <p>Компания предоставляет жильё для иногородних сотрудников.</p>-->
<!--    </div>-->
<!--    <div class="faq-item" data-id="4">-->
<!--      <span>Как пройти медосмотр?</span>-->
<!--      <span class="toggle">+</span>-->
<!--    </div>-->
<!--    <div class="faq-content" id="content-4">-->
<!--      <p>Для прохождения медосмотра необходимо обратиться в поликлинику с направлением от работодателя.</p>-->
<!--    </div>-->
<!--  </div>-->

<!--</template>-->
<template>
  <div class="question">
    <h4 class="question-title">Ответы на ваши вопросы</h4>
    <div class="question_block">
      <div class="question_block-title">Нас часто спрашивают</div>
      <button class="question_block-button">Задать свой вопрос</button>
    </div>

    <div class="faq-list">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="faq-item"
      >
        <div class="faq-list-item" @click="toggle(index)">
          <span>{{ item.question }}</span>
          <button class="question-button">{{ item.isOpen ? '-' : '+' }}</button>
        </div>
        <transition name="slide-fade">
          <div v-if="item.isOpen" class="answer">
            {{ item.answer }}
          </div>
        </transition>
      </div>
    </div>
  </div>

</template>



<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'FAQComponent',
  setup() {
    const items = reactive([
      { question: 'Какие документы нужны для трудоустройства?', answer: 'Вам потребуются следующие документы...', isOpen: false },
      { question: 'Как добираться до работы?', answer: 'Вы можете добраться до работы следующим образом...', isOpen: false },
      { question: 'Есть ли жильё для иногородних?', answer: 'Да, у нас есть жильё для иногородних сотрудников...', isOpen: false },
      { question: 'Как пройти медосмотр?', answer: 'Для прохождения медосмотра нужно...', isOpen: false },
    ]);

    const toggle = (index: number) => {
      items[index].isOpen = !items[index].isOpen;
    };

    return {
      items,
      toggle,
    };
  },
});
</script>

<style lang="scss" scoped>
.question {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  text-align: start;

  &-title {
    color: #989CA5;
    font-size: 18px;
  }

  &_block {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &-button {
      font-size: 18px;
      padding: 15px 30px;
      border-radius: 5px;
      border: 1px solid black;
      background-color: white;
    }
  }

  &-button {
    border: none;
    background-color: white;
    width: 25px;
    height: 25px;
  }
}

.faq-list {
  margin-top: 40px;
  width: 100%;
}

.faq-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.faq-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.answer {
  padding: 10px 0;
  overflow: hidden; /* Добавляем overflow:hidden */
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease-in-out; /* Изменяем все свойства */
}

.slide-fade-enter-from, .slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-fade-enter-to, .slide-fade-leave-from {
  max-height: 1000px; /* Большое значение для max-height */
}



</style>
