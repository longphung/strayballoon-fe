<script>
import VIcon from './VIcon.vue';

export default {
  name: 'InGame',
  components: {
    VIcon,
  },
  data() {
    return {
      answers: [
        {
          id: '1',
          description: 'Incorrect Answer',
          isCorrect: false,
        },
        {
          id: '2',
          description: 'Correct Answer',
          isCorrect: true,
        },
        {
          id: '3',
          description: 'Incorrect Answer',
          isCorrect: false,
        },
        {
          id: '4',
          description: 'Incorrect Answer',
          isCorrect: false,
        },
      ],
      // We only allow people to select answer once
      answerSelected: false,
    };
  },
  // emits: ['changeStage'],
  methods: {
    handleAnswerClick(answer) {
      if (this.answerSelected) {
        return;
      }
      this.answerSelected = true;
      // eslint-disable-next-line no-param-reassign
      answer.clicked = true;
    },
  },
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
      <button
        v-for="answer in answers"
        :key="answer.id"
        type="button"
        class="answer"
        :class="{ green: answer.clicked && answer.isCorrect, red: answer.clicked && !answer.isCorrect }"
        @click="handleAnswerClick(answer)"
      >
        {{ answer.description }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.choose {
  display: grid;
  grid-template-columns: auto auto auto;
}

.green {
  background-color: green;
  color: white;
}

.red {
  background-color: red;
  color: white;
}

.ingame-container {
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
  background-color: #f8c033;
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

.answer {
  justify-self: center;
  border: solid 0.3rem;
  border-radius: 0.3rem;
  width: 35rem;
}
</style>
