<script>
import { computed } from 'vue';
import { useToast } from 'vue-toastification';
import axios from 'axios';
import ChooseYourCharacter from '../components/ChooseYourCharacter.vue';
import InGame from '../components/InGame.vue';
import ScorePage from '../components/ScorePage.vue';
import authGuard from '../mixins/authGuard';
import roleGuard from '../mixins/roleGuard';
import { baseWs } from '../features';

export const GAME_STAGE = {
  CHOOSE_CHARACTER: 'ChooseYourCharacter',
  IN_GAME: 'InGame',
  SCORE_PAGE: 'ScorePage',
};

export default {
  name: 'GamePage',
  components: {
    ChooseYourCharacter,
    InGame,
    ScorePage,
  },
  mixins: [authGuard, roleGuard('students')],
  inject: ['userData'],
  provide() {
    return {
      session: computed(() => this.session),
      setSession: (newSession) => {
        this.session = newSession;
      },
      axios: computed(() => this.axios),
      ws: computed(() => this.ws),
    };
  },
  data() {
    return {
      // This will be replaced with data from the backend
      gameStage: GAME_STAGE.CHOOSE_CHARACTER,
      session: null,
      ws: null,
      toast: {},
      axios: null,
      questions: [],
      sessionProgress: null,
    };
  },
  computed: {
    gamePageBackgroundClass() {
      switch (this.gameStage) {
        case GAME_STAGE.CHOOSE_CHARACTER:
          return 'choose-your-character';
        case GAME_STAGE.IN_GAME:
          return 'in-game';
        case GAME_STAGE.SCORE_PAGE:
          return 'score-page';
        default:
          return '';
      }
    },
    propsToPass() {
      if (this.gameStage === GAME_STAGE.IN_GAME) {
        return {
          questions: this.questions,
        };
      }
      return {};
    },
  },
  watch: {
    session(val, previousVal) {
      if (!val.sessionId || val.sessionId === previousVal.sessionId) {
        return;
      }
      if (previousVal.sessionId) {
        this.ws.close();
      }
      this.handleSocketConnection(val);
    },
  },
  mounted() {
    this.toast = useToast();
    this.axios = axios.create({
      headers: {
        Authorization: `token ${this.userData.token}`,
      },
    });
  },
  beforeUnmount() {
    if (this.ws) {
      this.ws.close();
    }
  },
  methods: {
    async handleChangeStage(data) {
      try {
        const { nextStage } = data;
        if (this.session.sessionId && this.ws) {
          await this.handleFetchQuestions();
          this.gameStage = nextStage;
        }
      } catch (e) {
        console.error(e);
      }
    },
    async handleFetchQuestions() {
      const result = await this.axios.get('/api/questions/');
      this.questions = result.data;
    },
    async handleFetchStudentSessionProgress(sessionId, studentId) {
      const result = await this.axios.get('/api/session-progress-of-students/', {
        params: {
          session_id: sessionId,
          student_id: studentId,
        },
      });
      this.sessionProgress = result.data;
    },
    handleSocketConnection(session) {
      this.ws = new WebSocket(`${baseWs}/session/${session.sessionId}?token=${this.userData.token}`);
      this.ws.onmessage = (event) => {
        const { data: rawData } = event;
        try {
          const data = JSON.parse(rawData);
          switch (data.type) {
            case 'session_join':
              break;
            case 'session_info_student':
              this.handleFetchStudentSessionProgress(data.sessionId, this.userData?.userId);
              break;
            default:
              break;
          }
        } catch (e) {
          console.error(e);
        }
      };
      this.ws.onopen = () => {
        this.toast.success(`You have joined session ${session.sessionId}`);
      };
    },
  },
};
</script>

<template>
  <section class="game-page" :class="gamePageBackgroundClass">
    <component :is="gameStage" v-bind="propsToPass" @change-stage="handleChangeStage" />
  </section>
</template>

<style scoped>
.game-page {
  background: #f6f8ff;
  width: 100%;
  height: 47rem;
  display: grid;
  grid-template-rows: 1fr 5fr;
}

.choose-your-character {
  background-image: url(/game-background.jpg);
  background-size: contain;
}

.in-game {
  background-image: url(/in-game-background.png);
  background-size: contain;
}

.score-page {
  background-image: url(/in-game-background.png);
  background-size: contain;
}
</style>
