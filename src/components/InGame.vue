<script>
import { useToast } from 'vue-toastification';
import Loading from 'vue-loading-overlay';
import VIcon from './VIcon.vue';
import { GAME_STAGE } from '../pages/Game.vue';

export default {
  name: 'InGame',
  components: {
    Loading,
    VIcon,
  },
  inject: ['axios', 'ws'],
  props: {
    questions: {
      type: Array,
      default() {
        return [];
      },
    },
    sessionProgress: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ['changeStage'],
  data() {
    return {
      isLoading: true,
      toast: null,
      currentQuestionIndex: 0,
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
      timer: new Date(),
      questionsToUse: [],
    };
  },
  computed: {
    currentQuestion() {
      return this.questionsToUse[this.currentQuestionIndex];
    },
  },
  watch: {
    async currentQuestionIndex(val, previousVal) {
      if (!val || val === previousVal) {
        return;
      }
      // Reset timer when student is taking on new question
      this.timer = new Date();
      this.answers = (
        await this.axios.get('/api/answers-of-question/', {
          params: {
            id: this.questions[val].id,
          },
        })
      ).data.answers;
      this.isLoading = false;
    },
  },
  async mounted() {
    this.toast = useToast();
    this.questionsToUse = this.questions.filter(
      ({ id }) => !this.sessionProgress.progress.some(({ question_id }) => id === question_id)
    );
    if (this.questionsToUse.length) {
      this.answers = (
        await this.axios.get('/api/answers-of-question/', {
          params: {
            id: this.questionsToUse[this.currentQuestionIndex]?.id,
          },
        })
      ).data.answers;
      this.isLoading = false;
    } else {
      this.toast.success("You have answered all the questions! Let's go to score page!");
      window.setTimeout(() => {
        this.$emit('changeStage', {
          nextStage: GAME_STAGE.SCORE_PAGE,
        });
      }, 5000);
    }
  },
  methods: {
    handleAnswerClick(answer) {
      if (this.answerSelected) {
        return;
      }
      this.answerSelected = true;
      // eslint-disable-next-line no-param-reassign
      answer.clicked = true;
      const now = new Date();
      this.ws.send(
        JSON.stringify({
          type: 'session_progress_update',
          payload: {
            question_set: this.questions,
            question_id: this.currentQuestion.id,
            question_status: 'completed',
            answer_taken: answer.id,
            time_taken: (now.getTime() - this.timer.getTime()) / 1000,
            session_progress_id: this.sessionProgress.id,
          },
        })
      );
    },
    handleNextButtonClick() {
      // if last question then go to score page
      if (this.currentQuestionIndex === this.questionsToUse.length - 1) {
        this.$emit('changeStage', {
          nextStage: GAME_STAGE.SCORE_PAGE,
        });
        return;
      }
      this.currentQuestionIndex += 1;
      this.answerSelected = false;
      this.isLoading = true;
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

    <div class="d-flex justify-content-center position-relative">
      <div class="question-part">{{ currentQuestion?.description }}</div>

      <div v-if="answerSelected" class='feedback-container'>
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
    <Loading v-model:active="isLoading" loader="bars" :lock-scroll="true" />
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.bar {
  background-color: #f8c033;
  width: 26rem;
  height: 2rem;
  margin-right: 1rem;
  border-radius: 2.5rem;
}

.stopwatch {
  font-size: 2rem;
  text-decoration: none;
  color: orangered;
}

.question-part {
  width: 35rem;
  height: 12rem;
  font-size: 1.6rem;
  border: solid 0.3rem;
  border-radius: 1rem;
  background-color: white;
  justify-self: end;
  overflow: scroll;
  padding: 1rem;
}

.feedback-container {
  position: absolute;
  right: 2rem;
  bottom: 20%;
}

.feedback {
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
  content: '';
  width: 0;
  height: 0;
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
  padding: 1rem;
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
  min-height: 3rem;
  max-height: 5rem;
  overflow: scroll;
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
