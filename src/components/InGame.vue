<script>
import VIcon from './VIcon.vue';
import { GAME_STAGE } from '../pages/Game.vue';

export default {
  name: 'InGame',
  components: {
    VIcon,
  },
  inject: ['axios'],
  props: {
    questions: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: ['changeStage'],
  data() {
    return {
      currentQuestion: this.questions[0],
      answers: [
        {
          id: '1',
          description: '',
          is_correct: false,
        },
        {
          id: '2',
          description: '',
          is_correct: true,
        },
        {
          id: '3',
          description: '',
          is_correct: false,
        },
        {
          id: '4',
          description: '',
          is_correct: false,
        },
      ],
      // We only allow people to select answer once
      answerSelected: false,
    };
  },
  async mounted() {
    this.answers = (
      await this.axios.get('/api/answers-of-question/', {
        params: {
          id: this.currentQuestion.id,
        },
      })
    ).data.answers;
  },
  methods: {
    handleAnswerClick(answer) {
      if (this.answerSelected) {
        return;
      }
      this.answerSelected = true;
      // eslint-disable-next-line no-param-reassign
      answer.clicked = true;
    },
    handleNextButtonClick() {
      this.$emit('changeStage', {
        nextStage: GAME_STAGE.SCORE_PAGE,
      });
    },
    selectedCorrectAnswer() {
      const selectedAnswer = this.answers.find(({ clicked }) => clicked);
      return selectedAnswer.is_correct;
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
    <div class="timer">
      <div class="bar"></div>
      <div class="stopwatch" to="/">
        <VIcon name="stopwatch" />
      </div>
    </div>
    <div class="question">
      <div class="question-part">{{ currentQuestion.description }}</div>
      <div v-if="answerSelected">
        <div class="feedback">
          {{
            currentQuestion.feedback
              ? currentQuestion.feedback
              : selectedCorrectAnswer()
              ? 'Well done!'
              : 'Better luck next time!'
          }}
        </div>
      </div>
    </div>
    <div class="answers-wrapper">
      <button
        v-for="answer in answers"
        :key="answer.id"
        type="button"
        class="answer"
        :class="{ green: answer.clicked && answer.is_correct, red: answer.clicked && !answer.is_correct }"
        @click="handleAnswerClick(answer)"
      >
        {{ answer.description }}
      </button>
    </div>
    <div class="next">
      <button type="button" class="p1 btn btn-success" :disabled="!answerSelected" @click="handleNextButtonClick">
        NEXT QUESTION
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
  grid-template-rows: 8% 40% 40% 12%;
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

.timer {
  display: grid;
  grid-template-columns: 63.5% 36.5%;
  justify-content: space-around;
  align-content: center;
}

.bar {
  background-color: #f8c033;
  width: 26rem;
  border-radius: 2.5rem;
  display: grid;
  justify-self: end;
}

.stopwatch {
  font-size: 2rem;
  text-decoration: none;
  color: orangered;
}

.question {
  display: grid;
  justify-content: space-around;
  align-content: center;
  grid-template-columns: 68% 32%;
}
.question-part {
  display: grid;
  width: 35rem;
  height: 12rem;
  font-size: 1.6rem;
  justify-content: center;
  align-content: center;
  border: solid 0.3rem;
  border-radius: 1rem;
  background-color: white;
  justify-self: end;
}

.feedback {
  display: grid;
  justify-self: center;
  background-color: #1e90ff;
  position: relative;
  font-size: 2rem;
  margin: 2rem;
  line-height: 2rem;
  width: 20rem;
  border-radius: 40px;
  padding: 24px;
  text-align: center;
  color: white;
}

.feedback:before {
  display: grid;
  justify-self: center;
  content: '';
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 24px solid #1e90ff;
  border-right: 12px solid transparent;
  border-top: 12px solid #1e90ff;
  border-bottom: 20px solid transparent;
  left: 32px;
  bottom: -24px;
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
  gap: 1.5rem;
}

.answer {
  justify-self: center;
  border: solid 0.3rem;
  border-radius: 0.3rem;
  width: 35rem;
  font-size: 1.5rem;
}
.next {
  display: grid;
  justify-content: space-around;
  align-self: center;
}
.p1 {
  font-size: 2rem;
  border: solid;
  border-radius: 0.5rem;
}
</style>
