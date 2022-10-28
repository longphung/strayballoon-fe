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
  },
  watch: {
    session(val, previousVal) {
      if (!val.sessionId) {
        return;
      }
      if (val.sessionId === previousVal.sessionId) {
        return;
      }
      if (previousVal.sessionId) {
        this.ws.close();
      }
      this.handleSocketConnection(val);
    },
  },
  created() {
    this.toast = useToast();
  },
  unmounted() {
    this.ws.close();
  },
  methods: {
    async handleChangeStage(data) {
      const { nextStage } = data;
      this.axios = axios.create({
        headers: {
          Authorization: `token ${this.userData.token}`,
        },
      });
      await this.handleFetchQuestions();
      this.gameStage = nextStage;
    },
    async handleFetchQuestions() {
      const result = await this.axios.get('/api/questions');
      this.questions = result.data;
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
            default:
              break;
          }
        } catch (e) {
          console.error(e);
        }
      };
      this.ws.onopen = () => {
        console.log(`You have joined session ${session.sessionId}`);
      };
    },
  },
};
</script>

<template>
  <section class="game-page" :class="gamePageBackgroundClass">
    <component :is="gameStage" @change-stage="handleChangeStage" />
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
