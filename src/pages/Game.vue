<script>
import Swal from 'sweetalert2';
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
      disabledNext: true,
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
      switch (this.gameStage) {
        case GAME_STAGE.CHOOSE_CHARACTER:
          return {
            disabledNext: this.disabledNext || !this.sessionProgress,
          };
        case GAME_STAGE.IN_GAME:
          return {
            questions: this.questions,
            sessionProgress: this.sessionProgress,
          };
        case GAME_STAGE.SCORE_PAGE:
          return {
            character: this.session.character,
          };
        default:
          return {};
      }
    },
  },
  watch: {
    session(val, previousVal) {
      if (!val.instructorId || val.instructorId === previousVal.instructorId) {
        return;
      }
      if (previousVal.instructorId) {
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
        if (nextStage === GAME_STAGE.SCORE_PAGE || nextStage === GAME_STAGE.CHOOSE_CHARACTER) {
          this.gameStage = nextStage;
          return;
        }
        if (this.session.instructorId && this.ws) {
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
    async handleFetchStudentSessionProgress(sessionProgressId) {
      const result = await this.axios.get(`/api/session-progress/${sessionProgressId}/`);
      this.sessionProgress = result.data;
    },
    handleSocketConnection(session) {
      this.ws = new WebSocket(`${baseWs}/session/${session.instructorId}?token=${this.userData.token}`);
      this.ws.onmessage = (event) => {
        const { data: rawData } = event;
        try {
          const data = JSON.parse(rawData);
          switch (data.type) {
            case 'session_join':
              break;
            case 'session_info_student':
              this.session.sessionStatus = data.sessionStatus;
              this.session.sessionid = data.sessionId;
              if (data.sessionProgressId) {
                this.handleFetchStudentSessionProgress(data.sessionProgressId);
              }
              break;
            case 'session_progress_started':
              if (Number.parseInt(data.sessionId, 10) !== Number.parseInt(this.session.sessionId, 10)) {
                this.session.sessionId = data.sessionId;
                this.handleFetchStudentSessionProgress(data.sessionProgressId);
              }
              break;
            case 'session_update':
              if (data.sessionStatus === 'ended') {
                Swal.fire({
                  title: 'Your Instructor Ended The Session',
                  text: 'Go to Score Page',
                  confirmButtonText: 'OK!',
                  didOpen: () => {
                    this.gameStage = GAME_STAGE.SCORE_PAGE;
                  },
                });
                return;
              }
              break;
            default:
              break;
          }
        } catch (e) {
          console.error(e);
        }
      };
      this.ws.onopen = () => {
        this.toast.success(`You have joined session ${session.instructorId}`);
        this.disabledNext = false;
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
  padding: 2rem
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
