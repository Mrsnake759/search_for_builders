<template>
  <header-block></header-block>
  <work-block></work-block>
  <vacancies-block></vacancies-block>
  <about-block></about-block>
  <img class="video" src="../assets/video.png" alt="видео">
  <advantages-block></advantages-block>
  <residence-block></residence-block>
  <questions-block></questions-block>
  <application-block></application-block>
  <footer-block></footer-block>
</template>

<script lang="ts">
import HeaderBlock from "@/components/HeaderBlock.vue";
import WorkBlock from "@/components/WorkBlock.vue";
import VacanciesBlock from "@/components/VacanciesBlock.vue";
import AboutBlock from "@/components/AboutBlock.vue";
import AdvantagesBlock from "@/components/AdvantagesBlock.vue";
import ResidenceBlock from "@/components/ResidenceBlock.vue";
import QuestionsBlock from "@/components/QuestionsBlock.vue";
import ApplicationBlock from "@/components/ApplicationBlock.vue";
import FooterBlock from "@/components/FooterBlock.vue";
export default {
  name: 'ParentComponent',
  components: {
    // Регистрируем дочерний компонент
    HeaderBlock,
    WorkBlock,
    VacanciesBlock,
    AboutBlock,
    AdvantagesBlock,
    ResidenceBlock,
    QuestionsBlock,
    ApplicationBlock,
    FooterBlock
  },
};

</script>

<style lang="scss">
body {
  margin: 50px 200px 50px 200px;
}

.video {
  margin-top: 30px;
  width: 100%;
}
</style>
