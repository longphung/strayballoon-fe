<script>
import VIcon from './VIcon.vue'
import { GAME_STAGE } from '../pages/Game.vue';

export default {
  name: 'InGameCorrect',
  components: {
    VIcon,
  },
emits: ['changeStage'],
  methods: {
    handleAnswerClick() {
      this.$emit('changeStage', GAME_STAGE.SCORE_PAGE)
    }
  }
};
</script>
<template>
  <section class="choose">
      <div class="setting">
        <router-link class="hand-stop" to="/">
          <VIcon name="setting" />
        </router-link>
      </div>
      <div class="pause">
        <router-link class="hand-stop" to="/">
          <VIcon name="pause" />
        </router-link>
      </div>
      <div class="help">
        <router-link class="hand-stop" to="/">
          <VIcon name="notification" />
        </router-link>
      </div>
  </section>
  <section class="ingame-container">
  <div class="choose-character">
    <div class="bar"></div>
  </div>
  <div class="question">
    <div class="question-part"></div>
  </div>
  <div class="answers-wrapper">
    <button class="answer-1" @click='handleAnswerClick'></button>
    <button class="answer-2" @click='handleAnswerClick'></button>
    <button class="answer-3" @click='handleAnswerClick'></button>
    <button class="answer-4" @click='handleAnswerClick'></button>
  </div>
</section>
  </template>

<style scoped>
.choose {
  display: grid;
  grid-template-columns: auto auto auto;
}

.ingame-container{
  display: grid;
  grid-template-rows: 15% 42.5% 42.5%;
}

.setting {
  place-self: center start;
  padding-top: 2rem;
  padding-left: 6rem;
  font-size: 4rem;
}

.help {
  padding-top: 2rem;
  place-self: center end;
  padding-right: 6rem;
  font-size: 4rem;
}

.pause {
  place-self: center;
  font-size: 4rem;
}

.hand-stop {
  text-decoration: none;
  color: orangered;
}

.choose-character {
  display: grid;
  justify-content: space-around;
  align-content: space-between;
}

.bar {
  background-color: #F8C033;
  width: 26rem;
  height: 2rem;
  border-radius: 2.5rem;
}

.question {
  display: grid;
  justify-content: space-around;
  align-content: center;
}
.question-part {
  width: 35rem;
  height: 14rem;
  border: solid 0.3rem;
  border-radius: 1rem;
  background-color: white;
}

.answers-wrapper {
  display: grid;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: space-around;
  align-content: center;
  gap: 2rem;
}

.answer-1 {
  justify-self: center;
  border: solid 0.3rem;
  border-radius: 0.3rem;
  width:35rem;
}

.answer-2 {
  justify-self: center;
  border: solid 0.3rem;
  border-radius: 0.3rem;
  width:35rem;
}


</style>
